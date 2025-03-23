
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-corpus-blue text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="inline-block mb-4">
              <img 
                src="/lovable-uploads/f94493f5-1d0a-43d5-9855-74ac13b1f619.png" 
                alt="Corpus Comércio" 
                className="h-12 object-contain"
              />
            </Link>
            <p className="text-white/80 max-w-xs">
              Fornecendo equipamentos e soluções para laboratórios com excelência e qualidade desde 1995.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="inline-flex items-center text-white/80 hover:text-white transition-colors">
                  <ArrowRight size={14} className="mr-2" />
                  Início
                </Link>
              </li>
              <li>
                <Link to="/about" className="inline-flex items-center text-white/80 hover:text-white transition-colors">
                  <ArrowRight size={14} className="mr-2" />
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/products" className="inline-flex items-center text-white/80 hover:text-white transition-colors">
                  <ArrowRight size={14} className="mr-2" />
                  Produtos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="inline-flex items-center text-white/80 hover:text-white transition-colors">
                  <ArrowRight size={14} className="mr-2" />
                  Contato
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="inline-flex items-center text-white/80 hover:text-white transition-colors">
                  <ArrowRight size={14} className="mr-2" />
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Categorias</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products/lab-equipment" className="inline-flex items-center text-white/80 hover:text-white transition-colors">
                  <ArrowRight size={14} className="mr-2" />
                  Equipamentos Laboratoriais
                </Link>
              </li>
              <li>
                <Link to="/products/reagents" className="inline-flex items-center text-white/80 hover:text-white transition-colors">
                  <ArrowRight size={14} className="mr-2" />
                  Reagentes e Químicos
                </Link>
              </li>
              <li>
                <Link to="/products/glassware" className="inline-flex items-center text-white/80 hover:text-white transition-colors">
                  <ArrowRight size={14} className="mr-2" />
                  Vidraria
                </Link>
              </li>
              <li>
                <Link to="/products/measurement" className="inline-flex items-center text-white/80 hover:text-white transition-colors">
                  <ArrowRight size={14} className="mr-2" />
                  Instrumentos de Medição
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 flex-shrink-0 text-corpus-blue-light" />
                <span className="text-white/80">
                  Av. Exemplo, 1234<br />
                  São Paulo, SP, 01234-567
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 flex-shrink-0 text-corpus-blue-light" />
                <a href="tel:+551112345678" className="text-white/80 hover:text-white transition-colors">
                  (11) 1234-5678
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 flex-shrink-0 text-corpus-blue-light" />
                <a href="mailto:contato@corpuscomercio.com.br" className="text-white/80 hover:text-white transition-colors">
                  contato@corpuscomercio.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
          <p>© {new Date().getFullYear()} Corpus Comércio. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
