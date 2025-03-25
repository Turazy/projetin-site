
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedButton from "@/components/AnimatedButton";
import { toast } from "@/hooks/use-toast";

// In a real application, this would come from context or state management
// For now, we'll simulate with local storage
interface CartItem {
  id: string;
  name: string;
  price: number | null;
  image: string;
  quantity: number;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, you would get this from context or state management
    const getCartFromStorage = () => {
      try {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
      } catch (error) {
        console.error("Error loading cart from storage:", error);
        return [];
      }
    };

    setCartItems(getCartFromStorage());
    setLoading(false);
    window.scrollTo(0, 0);
  }, []);

  const updateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    const updatedCart = cartItems.map(item => 
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (itemId: string) => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    
    toast({
      title: "Item removido",
      description: "Item removido do carrinho com sucesso",
      duration: 3000,
    });
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.setItem("cart", JSON.stringify([]));
    
    toast({
      title: "Carrinho esvaziado",
      description: "Todos os itens foram removidos do carrinho",
      duration: 3000,
    });
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.price || 0) * item.quantity;
    }, 0);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-corpus-blue/30 border-t-corpus-blue rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="page-transition">
      <Navbar />
      
      <section className="section-container py-12 min-h-[60vh]">
        <h1 className="text-3xl font-bold text-corpus-text-dark mb-8 flex items-center">
          <ShoppingCart size={30} className="mr-3 text-corpus-blue" />
          Seu Carrinho
        </h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-corpus-text-dark/70 mb-6">Seu carrinho está vazio</p>
            <Link to="/products">
              <AnimatedButton
                variant="primary"
                size="lg"
                icon={<ShoppingCart size={20} />}
                iconPosition="left"
              >
                Continuar Comprando
              </AnimatedButton>
            </Link>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-corpus-silver/10 text-left">
                    <th className="p-4 border-b">Produto</th>
                    <th className="p-4 border-b">Preço</th>
                    <th className="p-4 border-b">Quantidade</th>
                    <th className="p-4 border-b">Total</th>
                    <th className="p-4 border-b"></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map(item => (
                    <tr key={item.id} className="border-b">
                      <td className="p-4">
                        <div className="flex items-center">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-16 h-16 object-cover rounded mr-4"
                          />
                          <span className="font-medium">{item.name}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        {item.price ? item.price.toLocaleString('pt-BR', { 
                          style: 'currency', 
                          currency: 'BRL' 
                        }) : 'Sob consulta'}
                      </td>
                      <td className="p-4">
                        <div className="flex items-center space-x-2">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 bg-corpus-silver/20 rounded flex items-center justify-center"
                          >
                            -
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 bg-corpus-silver/20 rounded flex items-center justify-center"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="p-4 font-semibold">
                        {item.price 
                          ? (item.price * item.quantity).toLocaleString('pt-BR', { 
                              style: 'currency', 
                              currency: 'BRL' 
                            }) 
                          : 'Sob consulta'}
                      </td>
                      <td className="p-4">
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          Remover
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 flex flex-col md:flex-row justify-between items-start">
              <div className="mb-4 md:mb-0">
                <Link to="/products" className="inline-flex items-center text-corpus-blue hover:text-corpus-blue-dark transition-colors">
                  <ArrowLeft size={20} className="mr-2" />
                  <span>Continuar Comprando</span>
                </Link>
              </div>
              
              <div className="bg-corpus-silver/10 p-6 rounded-lg w-full md:w-80">
                <div className="flex justify-between font-semibold mb-4">
                  <span>Subtotal:</span>
                  <span>
                    {calculateTotal().toLocaleString('pt-BR', { 
                      style: 'currency', 
                      currency: 'BRL' 
                    })}
                  </span>
                </div>
                
                <button 
                  onClick={() => {
                    toast({
                      title: "Pedido recebido",
                      description: "Seu pedido foi enviado para processamento",
                      duration: 3000,
                    });
                    clearCart();
                  }}
                  className="w-full mb-2"
                >
                  <AnimatedButton
                    variant="primary"
                    size="lg"
                    className="w-full"
                  >
                    Finalizar Compra
                  </AnimatedButton>
                </button>
                
                <button 
                  onClick={clearCart}
                  className="w-full text-corpus-text-dark/70 text-sm hover:text-corpus-text-dark"
                >
                  Esvaziar Carrinho
                </button>
              </div>
            </div>
          </>
        )}
      </section>
      
      <Footer />
    </div>
  );
};

export default Cart;
