
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const location = useLocation();
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  
  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Sobre', path: '/about' },
    { name: 'Produtos', path: '/products', hasSubmenu: true },
    { name: 'Contato', path: '/contact' },
  ];
  
  const productCategories = [
    { name: 'Equipamentos Laboratoriais', path: '/products/lab-equipment' },
    { name: 'Reagentes e Químicos', path: '/products/reagents' },
    { name: 'Vidraria', path: '/products/glassware' },
    { name: 'Instrumentos de Medição', path: '/products/measurement' },
    { name: 'Todos os Produtos', path: '/products' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="relative w-40 sm:w-48 transition-all duration-300 hover:opacity-90">
            <img 
              src="/lovable-uploads/f94493f5-1d0a-43d5-9855-74ac13b1f619.png" 
              alt="Corpus Comércio" 
              className="object-contain h-10 sm:h-12" 
            />
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <div key={link.path} className="relative group">
              {link.hasSubmenu ? (
                <button 
                  className="flex items-center space-x-1 text-corpus-text-dark hover:text-corpus-blue transition-colors"
                  onClick={() => setProductsOpen(!productsOpen)}
                >
                  <span>{link.name}</span>
                  <ChevronDown size={16} className={`transition-transform duration-300 ${productsOpen ? 'rotate-180' : ''}`} />
                </button>
              ) : (
                <Link
                  to={link.path}
                  className={`text-corpus-text-dark hover:text-corpus-blue transition-colors ${
                    location.pathname === link.path ? 'font-semibold text-corpus-blue' : ''
                  }`}
                >
                  {link.name}
                </Link>
              )}
              
              {/* Submenu for Products */}
              {link.hasSubmenu && (
                <div 
                  className={`absolute left-0 top-full mt-2 w-64 bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${
                    productsOpen 
                      ? 'opacity-100 visible translate-y-0' 
                      : 'opacity-0 invisible -translate-y-2'
                  }`}
                >
                  <div className="py-2">
                    {productCategories.map((category) => (
                      <Link
                        key={category.path}
                        to={category.path}
                        className="block px-4 py-2 text-corpus-text-dark hover:bg-corpus-blue hover:text-white transition-colors"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          
          <Link 
            to="/contact" 
            className="bg-corpus-blue text-white px-6 py-2 rounded-md hover:bg-corpus-blue-dark transition-colors shadow-sm hover:shadow"
          >
            Orçamento
          </Link>
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <div className="flex items-center lg:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-corpus-text-dark p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white z-40 lg:hidden transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '61px' }}
      >
        <nav className="flex flex-col h-full p-8">
          {navLinks.map((link) => (
            <div key={link.path} className="py-3 border-b border-gray-100">
              {link.hasSubmenu ? (
                <>
                  <button 
                    className="flex items-center justify-between w-full text-lg text-corpus-text-dark"
                    onClick={() => setProductsOpen(!productsOpen)}
                  >
                    <span>{link.name}</span>
                    <ChevronDown size={18} className={`transition-transform duration-300 ${productsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {productsOpen && (
                    <div className="mt-2 ml-4 space-y-2">
                      {productCategories.map((category) => (
                        <Link
                          key={category.path}
                          to={category.path}
                          className="block py-2 text-corpus-text-dark/80 hover:text-corpus-blue transition-colors"
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={link.path}
                  className={`block text-lg ${
                    location.pathname === link.path 
                      ? 'font-semibold text-corpus-blue' 
                      : 'text-corpus-text-dark'
                  }`}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          
          <div className="mt-8">
            <Link 
              to="/contact" 
              className="w-full block text-center bg-corpus-blue text-white px-6 py-3 rounded-md hover:bg-corpus-blue-dark transition-colors"
            >
              Solicitar Orçamento
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
