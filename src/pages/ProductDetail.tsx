import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedButton from "@/components/AnimatedButton";
import ProductCard from "@/components/ProductCard";
import { ArrowLeft, Check, ShoppingCart, Mail, ChevronRight } from "lucide-react";

const mockProducts = [
  {
    id: "1",
    name: "Microscópio Digital Binocular",
    description: "Microscópio de alta resolução com ampliação de até 1000x, ideal para laboratórios e instituições de ensino.",
    price: 3599.90,
    image: "https://images.unsplash.com/photo-1516571748831-5d81767b788d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    category: "Equipamentos Laboratoriais",
    isNew: true,
    isFeatured: true,
    details: `
    <p>O Microscópio Digital Binocular é um equipamento de alta precisão projetado para fornecer imagens claras e nítidas, perfeito para uso em laboratórios de pesquisa, universidades e escolas.</p>
    
    <h3>Características principais:</h3>
    <ul>
      <li>Ampliação de 40x a 1000x</li>
      <li>Oculares WF10x/18mm</li>
      <li>Objetivas acromáticas (4x, 10x, 40x, 100x)</li>
      <li>Iluminação LED ajustável</li>
      <li>Condensador Abbe N.A. 1.25 com diafragma íris</li>
      <li>Platina mecânica com movimento X-Y</li>
      <li>Cabeçote binocular inclinado a 30°</li>
      <li>Sistema de focalização coaxial</li>
    </ul>
    
    <h3>Especificações técnicas:</h3>
    <ul>
      <li>Tensão: 110V/220V (bivolt)</li>
      <li>Potência: 20W</li>
      <li>Dimensões: 350 x 230 x 380 mm</li>
      <li>Peso: 5,7 kg</li>
      <li>Garantia: 12 meses</li>
    </ul>
    
    <p>Ideal para análises detalhadas em biologia, medicina, ciência forense e diversas áreas de pesquisa científica.</p>
    `,
    specs: [
      { name: "Ampliação", value: "40x - 1000x" },
      { name: "Tipo", value: "Binocular" },
      { name: "Iluminação", value: "LED ajustável" },
      { name: "Alimentação", value: "110V/220V" },
      { name: "Garantia", value: "12 meses" }
    ],
    additionalImages: [
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80",
      "https://images.unsplash.com/photo-1576086135878-01dea3e32d1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80",
      "https://images.unsplash.com/photo-1551884831-bbf3cdc6469e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80"
    ]
  },
];

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("description");
  const [selectedImage, setSelectedImage] = useState("");
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);
  
  useEffect(() => {
    const fetchProduct = () => {
      setLoading(true);
      const foundProduct = mockProducts.find(p => p.id === id);
      
      if (foundProduct) {
        setProduct(foundProduct);
        setSelectedImage(foundProduct.image);
        
        const related = mockProducts
          .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
          .slice(0, 4);
        setRelatedProducts(related);
      }
      
      setLoading(false);
    };
    
    fetchProduct();
    window.scrollTo(0, 0);
  }, [id]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-corpus-blue/30 border-t-corpus-blue rounded-full animate-spin"></div>
      </div>
    );
  }
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-corpus-text-dark mb-4">Produto não encontrado</h2>
          <p className="text-corpus-text-dark/70 mb-6">O produto que você está procurando não está disponível.</p>
          <Link to="/products">
            <AnimatedButton variant="primary">
              Ver Todos os Produtos
            </AnimatedButton>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-transition">
      <Navbar />
      
      <div className="bg-corpus-silver/10 pt-32 pb-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-corpus-text-dark/60">
            <Link to="/" className="hover:text-corpus-blue transition-colors">
              Início
            </Link>
            <ChevronRight size={16} className="mx-2" />
            <Link to="/products" className="hover:text-corpus-blue transition-colors">
              Produtos
            </Link>
            <ChevronRight size={16} className="mx-2" />
            <Link to={`/products?category=${product.category}`} className="hover:text-corpus-blue transition-colors">
              {product.category}
            </Link>
            <ChevronRight size={16} className="mx-2" />
            <span className="font-medium text-corpus-text-dark truncate max-w-[200px]">
              {product.name}
            </span>
          </div>
        </div>
      </div>
      
      <section className="section-container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-xl overflow-hidden mb-4 aspect-square">
              <img 
                src={selectedImage} 
                alt={product.name} 
                className="w-full h-full object-contain p-4"
              />
            </div>
            
            {product.additionalImages && (
              <div className="grid grid-cols-4 gap-2">
                <div 
                  className={`aspect-square rounded-md overflow-hidden cursor-pointer ${
                    selectedImage === product.image ? 'ring-2 ring-corpus-blue' : 'opacity-70'
                  }`}
                  onClick={() => setSelectedImage(product.image)}
                >
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {product.additionalImages.map((img: string, index: number) => (
                  <div 
                    key={index}
                    className={`aspect-square rounded-md overflow-hidden cursor-pointer ${
                      selectedImage === img ? 'ring-2 ring-corpus-blue' : 'opacity-70'
                    }`}
                    onClick={() => setSelectedImage(img)}
                  >
                    <img 
                      src={img} 
                      alt={`${product.name} - Imagem ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
          
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
            
            <div className="mb-8">
              <h3 className="font-semibold text-corpus-text-dark mb-3">Especificações:</h3>
              <div className="space-y-2">
                {product.specs?.map((spec: any, index: number) => (
                  <div key={index} className="flex items-start">
                    <Check size={18} className="text-corpus-blue mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">{spec.name}:</span>{" "}
                      <span className="text-corpus-text-dark/80">{spec.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Link to="/cart">
                <AnimatedButton
                  variant="primary"
                  size="lg"
                  icon={<ShoppingCart size={20} />}
                  iconPosition="left"
                >
                  Adicionar ao Carrinho
                </AnimatedButton>
              </Link>
              
              <a href="mailto:contato@corpuscomercio.com.br?subject=Consulta sobre produto: Microscópio Digital Binocular">
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
        </div>
        
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <div className="flex overflow-x-auto scrollbar-hide">
              <button
                className={`px-6 py-3 font-medium text-lg ${
                  activeTab === "description"
                    ? "border-b-2 border-corpus-blue text-corpus-blue"
                    : "text-corpus-text-dark/70 hover:text-corpus-text-dark"
                }`}
                onClick={() => setActiveTab("description")}
              >
                Descrição Detalhada
              </button>
              
              <button
                className={`px-6 py-3 font-medium text-lg ${
                  activeTab === "specs"
                    ? "border-b-2 border-corpus-blue text-corpus-blue"
                    : "text-corpus-text-dark/70 hover:text-corpus-text-dark"
                }`}
                onClick={() => setActiveTab("specs")}
              >
                Especificações Técnicas
              </button>
            </div>
          </div>
          
          <div className="py-8">
            {activeTab === "description" && (
              <div className="prose prose-lg max-w-none text-corpus-text-dark/80" dangerouslySetInnerHTML={{ __html: product.details || "" }} />
            )}
            
            {activeTab === "specs" && (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody>
                    {product.specs?.map((spec: any, index: number) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-corpus-silver/10' : ''}>
                        <td className="py-3 px-4 font-semibold">{spec.name}</td>
                        <td className="py-3 px-4">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {relatedProducts.length > 0 && (
        <section className="section-container py-12 bg-corpus-silver/10">
          <h2 className="section-title">Produtos Relacionados</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>
      )}
      
      <div className="section-container py-12">
        <Link to="/products" className="inline-flex items-center text-corpus-blue hover:text-corpus-blue-dark transition-colors">
          <ArrowLeft size={20} className="mr-2" />
          <span>Voltar para Todos os Produtos</span>
        </Link>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
