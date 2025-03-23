
import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedButton from "@/components/AnimatedButton";
import { ArrowRight, Beaker, Award, TrendingUp, HeartHandshake } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-transition">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Featured Products */}
      <FeaturedProducts />
      
      {/* Categories Section */}
      <section className="section-container bg-corpus-silver/20 py-24">
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="inline-block bg-corpus-blue/10 text-corpus-blue px-4 py-1 rounded-full text-sm font-medium mb-4">
            Categorias
          </span>
          <h2 className="section-title">Explore Nossos Produtos</h2>
          <p className="section-subtitle">
            Encontre tudo o que seu laboratório precisa, dividido por categorias para facilitar sua busca.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Equipamentos",
              description: "Microscópios, centrífugas, autoclaves e muito mais",
              image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
              link: "/products/lab-equipment"
            },
            {
              title: "Reagentes",
              description: "Químicos de alta pureza para todos os tipos de análises",
              image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
              link: "/products/reagents"
            },
            {
              title: "Vidraria",
              description: "Béqueres, provetas, pipetas e tubos de ensaio",
              image: "https://images.unsplash.com/photo-1617302466582-64f73a3ca83d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
              link: "/products/glassware"
            },
            {
              title: "Medição",
              description: "pHmetros, termômetros, balanças de precisão",
              image: "https://images.unsplash.com/photo-1606206522398-de3bd04d1798?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
              link: "/products/measurement"
            }
          ].map((category, index) => (
            <div key={index} className="glass-card overflow-hidden group">
              <div className="relative h-60 overflow-hidden">
                <div className="absolute inset-0 bg-corpus-blue/30 transition-opacity group-hover:opacity-0"></div>
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold drop-shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                    {category.title}
                  </h3>
                </div>
              </div>
              <div className="p-5">
                <p className="text-corpus-text-dark/80 mb-4">
                  {category.description}
                </p>
                <Link to={category.link}>
                  <AnimatedButton
                    variant="primary"
                    size="sm"
                    icon={<ArrowRight size={16} />}
                    iconPosition="right"
                    className="w-full"
                  >
                    Explorar
                  </AnimatedButton>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="section-container py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block bg-corpus-blue/10 text-corpus-blue px-4 py-1 rounded-full text-sm font-medium">
              Por Que Nos Escolher
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-corpus-text-dark">
              Compromisso com Qualidade e Excelência
            </h2>
            <p className="text-lg text-corpus-text-dark/80">
              Na Corpus Comércio, temos o compromisso de fornecer soluções laboratoriais de alta qualidade. Nossos produtos são cuidadosamente selecionados de fabricantes de confiança e passam por rigorosos testes para garantir o melhor desempenho.
            </p>
            
            <div className="space-y-4 pt-4">
              {[
                {
                  icon: <Beaker size={24} className="text-corpus-blue" />,
                  title: "Produtos de Qualidade",
                  description: "Fornecemos apenas produtos que atendem aos mais altos padrões de qualidade."
                },
                {
                  icon: <TrendingUp size={24} className="text-corpus-blue" />,
                  title: "Tecnologia Avançada",
                  description: "Mantemos nossa linha de produtos atualizada com as mais recentes inovações."
                },
                {
                  icon: <HeartHandshake size={24} className="text-corpus-blue" />,
                  title: "Suporte Técnico",
                  description: "Nossa equipe está sempre disponível para ajudar com dúvidas e assistência técnica."
                },
                {
                  icon: <Award size={24} className="text-corpus-blue" />,
                  title: "Garantia de Satisfação",
                  description: "Garantimos a qualidade de nossos produtos e a satisfação dos nossos clientes."
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-corpus-blue/5 transition-colors">
                  <div className="p-3 bg-corpus-blue/10 rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-corpus-text-dark">{item.title}</h3>
                    <p className="text-corpus-text-dark/70">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="pt-6">
              <Link to="/about">
                <AnimatedButton
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight size={20} />}
                  iconPosition="right"
                >
                  Saiba Mais Sobre Nós
                </AnimatedButton>
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
              <img 
                src="https://images.unsplash.com/photo-1584697964358-3e14ca57658b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" 
                alt="Laboratório moderno"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -bottom-8 -left-8 w-64 bg-white rounded-xl p-6 shadow-glass">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-xs text-corpus-blue-light">Experiência</span>
                  <h4 className="text-lg font-bold text-corpus-text-dark">Mais de 10 anos</h4>
                </div>
                <div className="p-3 bg-corpus-blue/10 rounded-full">
                  <Award size={24} className="text-corpus-blue" />
                </div>
              </div>
              <div className="h-2 bg-gray-200 rounded-full mb-1">
                <div className="h-full w-[95%] bg-corpus-blue rounded-full"></div>
              </div>
              <p className="text-xs text-corpus-text-dark/60">Satisfação dos clientes</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-corpus-blue py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para Equipar seu Laboratório?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg">
            Entre em contato conosco hoje mesmo para obter orçamentos personalizados
            e encontrar as melhores soluções para suas necessidades.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/products">
              <AnimatedButton
                variant="secondary"
                size="lg"
              >
                Ver Produtos
              </AnimatedButton>
            </Link>
            <Link to="/contact">
              <AnimatedButton
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-corpus-blue"
              >
                Solicitar Orçamento
              </AnimatedButton>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
