
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Eye } from 'lucide-react';
import AnimatedButton from './AnimatedButton';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number | null;
  image: string;
  category: string;
  isNew?: boolean;
  isFeatured?: boolean;
}

const ProductCard = ({ 
  id, 
  name, 
  description, 
  price, 
  image, 
  category,
  isNew = false,
  isFeatured = false 
}: ProductCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { toast } = useToast();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Here you would typically add the product to the cart state
    // For now we'll just show a toast notification
    toast({
      title: "Produto adicionado",
      description: `${name} foi adicionado ao seu carrinho`,
      duration: 3000,
    });
  };
  
  return (
    <div 
      className="glass-card group h-full flex flex-col overflow-hidden transform hover:-translate-y-1"
      data-testid="product-card"
    >
      {/* Product Image with Overlay */}
      <div className="relative overflow-hidden h-60">
        <div 
          className={`absolute inset-0 bg-corpus-blue/10 ${
            imageLoaded ? 'img-loaded' : 'img-loading'
          }`}
        ></div>
        <img
          src={image}
          alt={name}
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
            imageLoaded ? 'img-loaded' : 'img-loading'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Quick view button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <Link 
            to={`/products/${id}`}
            className="bg-white/90 text-corpus-blue p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
          >
            <Eye size={20} />
          </Link>
        </div>
        
        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <span className="bg-corpus-blue text-white text-xs font-semibold px-2 py-1 rounded animate-pulse-gentle">
              NOVO
            </span>
          )}
          {isFeatured && (
            <span className="bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded">
              DESTAQUE
            </span>
          )}
        </div>
      </div>
      
      {/* Product Info */}
      <div className="flex flex-col flex-grow p-5">
        <span className="text-xs text-corpus-blue-light uppercase tracking-wider mb-2">
          {category}
        </span>
        <h3 className="text-lg font-semibold text-corpus-text-dark mb-2 line-clamp-2">
          {name}
        </h3>
        <p className="text-sm text-corpus-text-dark/70 mb-4 line-clamp-2 flex-grow">
          {description}
        </p>
        
        <div className="mt-auto flex items-center justify-between">
          {price ? (
            <span className="text-corpus-blue font-bold text-xl">
              {price.toLocaleString('pt-BR', { 
                style: 'currency', 
                currency: 'BRL' 
              })}
            </span>
          ) : (
            <span className="text-corpus-text-dark/80 text-sm font-medium">
              Sob consulta
            </span>
          )}
          
          <button onClick={handleAddToCart}>
            <AnimatedButton
              variant="primary"
              size="sm"
              icon={<ShoppingCart size={16} />}
            >
              Adicionar
            </AnimatedButton>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
