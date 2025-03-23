
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Search, Filter, ChevronDown } from "lucide-react";

// Mock data - in a real app, this would come from an API
const mockProducts = [
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
  },
  {
    id: "5",
    name: "pHmetro Digital Portátil",
    description: "Medidor de pH digital com display LCD, calibração automática e compensação de temperatura.",
    price: 799.90,
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    category: "Instrumentos de Medição",
    isNew: false,
    isFeatured: false
  },
  {
    id: "6",
    name: "Kit de Reagentes para Análise de Água",
    description: "Conjunto completo de reagentes para análise de pH, cloro, dureza e outros parâmetros da água.",
    price: 349.90,
    image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    category: "Reagentes e Químicos",
    isNew: false,
    isFeatured: false
  },
  {
    id: "7",
    name: "Balança Analítica de Precisão",
    description: "Balança analítica com precisão de 0,0001g, capacidade de 220g e calibração automática.",
    price: 4299.90,
    image: "https://images.unsplash.com/photo-1606206522398-de3bd04d1798?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    category: "Instrumentos de Medição",
    isNew: true,
    isFeatured: false
  },
  {
    id: "8",
    name: "Estufa de Secagem e Esterilização",
    description: "Estufa com controle digital de temperatura, circulação de ar forçada e capacidade de 100 litros.",
    price: 3799.90,
    image: "https://images.unsplash.com/photo-1581093458791-8a1ccc88b29b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    category: "Equipamentos Laboratoriais",
    isNew: false,
    isFeatured: false
  }
];

const Products = () => {
  const location = useLocation();
  const [products, setProducts] = useState(mockProducts);
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("relevance");
  
  // Get unique categories
  const categories = ["all", ...new Set(mockProducts.map(p => p.category))];
  
  // Handle filter and search
  useEffect(() => {
    // Check if we're on a category-specific route
    const path = location.pathname;
    let categoryFromPath = "all";
    
    if (path.includes("/products/lab-equipment")) {
      categoryFromPath = "Equipamentos Laboratoriais";
    } else if (path.includes("/products/reagents")) {
      categoryFromPath = "Reagentes e Químicos";
    } else if (path.includes("/products/glassware")) {
      categoryFromPath = "Vidraria";
    } else if (path.includes("/products/measurement")) {
      categoryFromPath = "Instrumentos de Medição";
    }
    
    setSelectedCategory(categoryFromPath);
  }, [location]);
  
  // Filter products based on search term and category
  useEffect(() => {
    let result = [...products];
    
    // Filter by category
    if (selectedCategory !== "all") {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(term) || 
        product.description.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term)
      );
    }
    
    // Sort products
    if (sortBy === "price-asc") {
      result.sort((a, b) => (a.price || 0) - (b.price || 0));
    } else if (sortBy === "price-desc") {
      result.sort((a, b) => (b.price || 0) - (a.price || 0));
    } else if (sortBy === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }
    
    setFilteredProducts(result);
  }, [searchTerm, selectedCategory, products, sortBy]);
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-transition">
      <Navbar />
      
      {/* Header */}
      <section className="pt-36 pb-12 bg-corpus-silver/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-corpus-text-dark mb-4">
              {selectedCategory === "all" ? "Nossos Produtos" : selectedCategory}
            </h1>
            <p className="text-lg text-corpus-text-dark/80">
              Explore nossa linha completa de produtos para laboratório, todos selecionados com rigor para garantir a mais alta qualidade.
            </p>
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section className="section-container py-12">
        {/* Search and Filters */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {/* Search */}
            <div className="flex-grow">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar produtos..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corpus-blue/50"
                />
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            
            {/* Filters toggle (mobile) */}
            <div className="md:hidden">
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg flex items-center justify-between text-corpus-text-dark"
              >
                <span className="flex items-center">
                  <Filter size={20} className="mr-2" />
                  Filtros
                </span>
                <ChevronDown size={20} className={`transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </button>
            </div>
            
            {/* Sort */}
            <div className="md:w-64">
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corpus-blue/50 appearance-none"
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%23999999\' stroke-width=\'2\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1rem' }}
              >
                <option value="relevance">Relevância</option>
                <option value="price-asc">Preço: Menor para Maior</option>
                <option value="price-desc">Preço: Maior para Menor</option>
                <option value="name">Nome</option>
              </select>
            </div>
          </div>
          
          {/* Filter options */}
          <div className={`${showFilters || !window.matchMedia("(max-width: 768px)").matches ? 'block' : 'hidden'} md:block`}>
            <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-corpus-text-dark mb-4">Categorias</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-corpus-blue text-white'
                        : 'bg-corpus-blue/10 text-corpus-text-dark hover:bg-corpus-blue/20'
                    }`}
                  >
                    {category === "all" ? "Todas" : category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-corpus-text-dark/70">Nenhum produto encontrado.</p>
            <p className="text-corpus-text-dark/50 mt-2">Tente ajustar os filtros ou buscar por outro termo.</p>
          </div>
        )}
      </section>
      
      <Footer />
    </div>
  );
};

export default Products;
