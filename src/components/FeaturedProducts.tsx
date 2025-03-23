
import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import AnimatedButton from './AnimatedButton';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock data
const featuredProducts = [
  {
    id: "1",
    name: "Microscópio Digital Binocular",
    description: "Microscópio de alta resolução com ampliação de até 1000x, ideal para laboratórios e instituições de ensino.",
    price: 3599.90,
    image: "https://images.unsplash.com/photo-1516571748831-5d81767b788d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    category: "Equipamentos Laboratoriais",
    isNew: true,
    isFeatured: true
  },
  {
    id: "2",
    name: "Kit de Vidraria para Laboratório",
    description: "Conjunto completo com béqueres, provetas, erlenmeyers e tubos de ensaio de alta qualidade.",
    price: 1249.90,
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    category: "Vidraria",
    isFeatured: true
  },
  {
    id: "3",
    name: "Centrífuga Digital Programável",
    description: "Centrífuga de alta velocidade com display digital e temporizador programável para diversos tipos de amostras.",
    price: 5899.90,
    image: "https://images.unsplash.com/photo-1581092921461-7317b2a01cb2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    category: "Equipamentos Laboratoriais",
    isFeatured: true
  },
  {
    id: "4",
    name: "Agitador Magnético com Aquecimento",
    description: "Agitador magnético com placa de aquecimento, controle digital de temperatura e velocidade ajustável.",
    price: 1899.90,
    image: "https://images.unsplash.com/photo-1614308457932-e16d85c5d053?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    category: "Equipamentos Laboratoriais",
    isNew: true,
    isFeatured: true
  }
];

const FeaturedProducts = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('featured-products');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);
  
  return (
    <section 
      id="featured-products" 
      className="section-container py-24"
    >
      <div className={`opacity-0 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'translate-y-10'}`}>
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="inline-block bg-corpus-blue/10 text-corpus-blue px-4 py-1 rounded-full text-sm font-medium mb-4">
            Produtos em Destaque
          </span>
          <h2 className="section-title">Soluções Laboratoriais de Qualidade</h2>
          <p className="section-subtitle">
            Conheça nossa seleção de produtos mais procurados, com tecnologia avançada e qualidade superior para seu laboratório.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id}
              className={`opacity-0 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-16">
          <Link to="/products">
            <AnimatedButton 
              variant="primary" 
              size="lg"
              icon={<ArrowRight size={20} />}
              iconPosition="right"
            >
              Ver Todos os Produtos
            </AnimatedButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
