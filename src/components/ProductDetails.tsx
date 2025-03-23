
import { ShoppingCart, Mail, Check } from 'lucide-react';
import AnimatedButton from '@/components/AnimatedButton';
import ProductSpecifications from '@/components/ProductSpecifications';
import { useToast } from '@/hooks/use-toast';

interface ProductDetailsProps {
  product: {
    id: string;
    name: string;
    description: string;
    price: number | null;
    category: string;
    specs?: Array<{ name: string; value: string }>;
  };
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const { toast } = useToast();

  const handleAddToCart = () => {
    toast({
      title: "Produto adicionado",
      description: `${product.name} foi adicionado ao seu carrinho`,
      duration: 3000,
    });
  };

  return (
    <div>
      <span className="inline-block text-sm text-corpus-blue uppercase tracking-wider mb-2">
        {product.category}
      </span>
      
      <h1 className="text-3xl md:text-4xl font-bold text-corpus-text-dark mb-4">
        {product.name}
      </h1>
      
      {product.price ? (
        <div className="text-2xl font-bold text-corpus-blue mb-6">
          {product.price.toLocaleString('pt-BR', { 
            style: 'currency', 
            currency: 'BRL' 
          })}
        </div>
      ) : (
        <div className="text-xl text-corpus-text-dark/80 mb-6">
          Preço sob consulta
        </div>
      )}
      
      <p className="text-corpus-text-dark/80 mb-6">
        {product.description}
      </p>
      
      {product.specs && <ProductSpecifications specs={product.specs} />}
      
      <div className="flex flex-wrap gap-4 mb-8">
        <button onClick={handleAddToCart}>
          <AnimatedButton
            variant="primary"
            size="lg"
            icon={<ShoppingCart size={20} />}
            iconPosition="left"
          >
            Adicionar ao Carrinho
          </AnimatedButton>
        </button>
        
        <a href={`mailto:contato@corpuscomercio.com.br?subject=Consulta sobre produto: ${product.name}`}>
          <AnimatedButton
            variant="outline"
            size="lg"
            icon={<Mail size={20} />}
            iconPosition="left"
          >
            Tirar Dúvidas
          </AnimatedButton>
        </a>
      </div>
      
      <div className="bg-corpus-silver/10 p-6 rounded-lg">
        <div className="flex items-center text-corpus-text-dark/80 mb-2">
          <Check size={18} className="text-corpus-blue mr-2" />
          <span>Garantia de 12 meses</span>
        </div>
        <div className="flex items-center text-corpus-text-dark/80 mb-2">
          <Check size={18} className="text-corpus-blue mr-2" />
          <span>Suporte técnico especializado</span>
        </div>
        <div className="flex items-center text-corpus-text-dark/80">
          <Check size={18} className="text-corpus-blue mr-2" />
          <span>Treinamento disponível</span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
