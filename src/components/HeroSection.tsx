
import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedButton from './AnimatedButton';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      heroRef.current.style.setProperty('--mouse-x', `${x}`);
      heroRef.current.style.setProperty('--mouse-y', `${y}`);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex items-center bg-gradient-to-br from-white via-white to-corpus-silver/30 overflow-hidden"
      style={{ 
        '--mouse-x': '0.5', 
        '--mouse-y': '0.5' 
      } as React.CSSProperties}
    >
      {/* Background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-10 -top-10 w-96 h-96 rounded-full bg-corpus-blue/5 filter blur-3xl transform translate-x-1/3 -translate-y-1/3 animate-float"></div>
        <div className="absolute -left-20 bottom-0 w-80 h-80 rounded-full bg-corpus-blue-light/5 filter blur-3xl translate-y-1/3 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute right-1/4 bottom-1/4 w-64 h-64 rounded-full bg-corpus-silver/10 filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-block">
              <span className="bg-corpus-blue/10 text-corpus-blue px-4 py-1 rounded-full text-sm font-medium">
                Soluções Completas para Laboratório
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-corpus-text-dark leading-tight">
              Equipamentos de 
              <span className="relative z-10 px-2 md:whitespace-nowrap">
                <span className="absolute bottom-2 left-0 w-full h-4 bg-corpus-blue-light/20 -z-10"></span>
                Alta Qualidade
              </span>
            </h1>
            
            <p className="text-xl text-corpus-text-dark/80 max-w-lg">
              Oferecemos uma linha completa de equipamentos, reagentes e consumíveis para seu laboratório com os melhores preços do mercado.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
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
            
            <div className="pt-10 grid grid-cols-3 gap-4">
              <div className="text-center p-3">
                <div className="text-corpus-blue font-bold text-3xl mb-1">10+</div>
                <div className="text-corpus-text-dark/70 text-sm">Anos de Experiência</div>
              </div>
              <div className="text-center p-3 border-l border-r border-gray-200">
                <div className="text-corpus-blue font-bold text-3xl mb-1">500+</div>
                <div className="text-corpus-text-dark/70 text-sm">Produtos</div>
              </div>
              <div className="text-center p-3">
                <div className="text-corpus-blue font-bold text-3xl mb-1">99%</div>
                <div className="text-corpus-text-dark/70 text-sm">Clientes Satisfeitos</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative h-80 md:h-[500px] lg:h-[600px] animate-scale-in" style={{ perspective: '1000px' }}>
            <div 
              className="absolute inset-0 rounded-2xl overflow-hidden transform"
              style={{ 
                transform: `
                  rotateY(calc((var(--mouse-x) - 0.5) * 10deg))
                  rotateX(calc((var(--mouse-y) - 0.5) * -10deg))
                `,
                transformStyle: 'preserve-3d',
                transition: 'transform 0.1s ease-out'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-corpus-blue-light/20 to-corpus-blue/40 opacity-75 mix-blend-overlay"></div>
              <img 
                src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" 
                alt="Equipamento Laboratorial"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-xl font-bold">Microscópios de Última Geração</h3>
                <p className="opacity-80">Precisão e qualidade para suas análises</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse-gentle">
        <span className="text-corpus-text-dark/60 text-sm mb-2">Role para ver mais</span>
        <div className="w-6 h-10 border-2 border-corpus-text-dark/30 rounded-full flex justify-center items-start p-1">
          <div className="w-1.5 h-1.5 bg-corpus-blue rounded-full animate-float"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
