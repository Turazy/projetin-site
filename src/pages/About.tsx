
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedButton from "@/components/AnimatedButton";
import { ArrowRight, Users, Building, Target, Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-transition">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-corpus-silver/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-corpus-text-dark mb-6">
              Sobre a Corpus Comércio
            </h1>
            <p className="text-xl text-corpus-text-dark/80 mb-10">
              Somos uma empresa especializada em fornecer equipamentos e soluções 
              laboratoriais de alta qualidade para diversos setores do mercado.
            </p>
            <img 
              src="/lovable-uploads/f94493f5-1d0a-43d5-9855-74ac13b1f619.png" 
              alt="Corpus Comércio Logo" 
              className="h-24 mx-auto mb-8" 
            />
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="section-container py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581093068332-3e4e7a27559d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" 
                  alt="Nossa História" 
                  className="w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-glass max-w-xs">
                <h3 className="text-corpus-blue font-semibold mb-2">Nossa Missão</h3>
                <p className="text-corpus-text-dark/80 text-sm">
                  Fornecer produtos e soluções laboratoriais de alta qualidade que contribuam para o avanço científico e tecnológico.
                </p>
              </div>
              <div className="absolute -top-6 -left-6 h-32 w-32 bg-corpus-blue rounded-full flex items-center justify-center text-white font-bold text-5xl z-10">
                10+
                <span className="absolute bottom-6 text-sm font-normal">Anos</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <span className="inline-block bg-corpus-blue/10 text-corpus-blue px-4 py-1 rounded-full text-sm font-medium">
              Nossa História
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-corpus-text-dark">
              Uma Trajetória de Excelência
            </h2>
            <p className="text-lg text-corpus-text-dark/80">
              A Corpus Comércio foi fundada com a missão de fornecer equipamentos e soluções de ponta para laboratórios e instituições de pesquisa. Desde o início, nos destacamos pelo compromisso com a qualidade e atendimento personalizado.
            </p>
            <p className="text-lg text-corpus-text-dark/80">
              Ao longo dos anos, expandimos nosso catálogo de produtos e nossa atuação no mercado, sempre com foco na satisfação do cliente e no fornecimento de soluções que atendam às mais diversas necessidades.
            </p>
            <p className="text-lg text-corpus-text-dark/80">
              Hoje, somos reconhecidos como um parceiro confiável para laboratórios em diversos setores, fornecendo equipamentos de alta qualidade e suporte técnico especializado.
            </p>
            
            <div className="pt-4">
              <Link to="/contact">
                <AnimatedButton
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight size={20} />}
                  iconPosition="right"
                >
                  Entre em Contato
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="bg-corpus-silver/20 py-20">
        <div className="section-container">
          <div className="flex flex-col items-center mb-16 text-center">
            <span className="inline-block bg-corpus-blue/10 text-corpus-blue px-4 py-1 rounded-full text-sm font-medium mb-4">
              Nossos Valores
            </span>
            <h2 className="section-title">O que nos guia</h2>
            <p className="section-subtitle">
              Nossos valores fundamentais definem quem somos e como operamos, guiando nossas decisões e interações diárias.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Target size={32} className="text-corpus-blue" />,
                title: "Excelência",
                description: "Buscamos a excelência em tudo o que fazemos, desde a seleção de produtos até o atendimento ao cliente."
              },
              {
                icon: <Users size={32} className="text-corpus-blue" />,
                title: "Compromisso",
                description: "Estamos comprometidos com o sucesso dos nossos clientes, fornecendo soluções que atendam às suas necessidades."
              },
              {
                icon: <Building size={32} className="text-corpus-blue" />,
                title: "Confiabilidade",
                description: "Construímos relacionamentos duradouros baseados na confiança e transparência com clientes e parceiros."
              }
            ].map((value, index) => (
              <div key={index} className="glass-card p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-corpus-blue/10 rounded-full">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-corpus-text-dark mb-4">{value.title}</h3>
                <p className="text-corpus-text-dark/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="section-container py-20">
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="inline-block bg-corpus-blue/10 text-corpus-blue px-4 py-1 rounded-full text-sm font-medium mb-4">
            Nossa Equipe
          </span>
          <h2 className="section-title">Profissionais Dedicados</h2>
          <p className="section-subtitle">
            Conheça os profissionais que fazem da Corpus Comércio uma empresa de excelência.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: "Ana Silva",
              role: "Diretora Executiva",
              image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80"
            },
            {
              name: "Carlos Mendes",
              role: "Gerente de Produtos",
              image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80"
            },
            {
              name: "Patrícia Oliveira",
              role: "Especialista Técnica",
              image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1288&q=80"
            },
            {
              name: "Roberto Santos",
              role: "Consultor de Vendas",
              image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80"
            }
          ].map((member, index) => (
            <div key={index} className="glass-card overflow-hidden group">
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-corpus-blue/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-corpus-text-dark mb-1">{member.name}</h3>
                <p className="text-corpus-blue">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="bg-corpus-blue py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Clock size={32} className="text-white/80" />,
                value: "10+",
                label: "Anos de Experiência"
              },
              {
                icon: <CheckCircle size={32} className="text-white/80" />,
                value: "500+",
                label: "Produtos"
              },
              {
                icon: <Building size={32} className="text-white/80" />,
                value: "1000+",
                label: "Clientes Atendidos"
              },
              {
                icon: <Users size={32} className="text-white/80" />,
                value: "20+",
                label: "Profissionais"
              }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <p className="text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-container py-20">
        <div className="bg-corpus-blue/5 rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold text-corpus-text-dark mb-6">
            Pronto para Conhecer Nossos Produtos?
          </h2>
          <p className="text-corpus-text-dark/80 max-w-2xl mx-auto mb-10">
            Explore nosso catálogo de produtos e descubra as melhores soluções para seu laboratório.
            Nossa equipe está pronta para ajudar você a encontrar o que precisa.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/products">
              <AnimatedButton
                variant="primary"
                size="lg"
                icon={<ArrowRight size={20} />}
                iconPosition="right"
              >
                Explorar Produtos
              </AnimatedButton>
            </Link>
            <Link to="/contact">
              <AnimatedButton
                variant="outline"
                size="lg"
              >
                Fale Conosco
              </AnimatedButton>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
