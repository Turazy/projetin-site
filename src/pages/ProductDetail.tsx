
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductBreadcrumb from "@/components/ProductBreadcrumb";
import ProductImageGallery from "@/components/ProductImageGallery";
import ProductDetails from "@/components/ProductDetails";
import ProductTabs from "@/components/ProductTabs";
import RelatedProducts from "@/components/RelatedProducts";
import { getProductById, getRelatedProducts, type Product } from "@/services/productService";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    const fetchProduct = () => {
      setLoading(true);
      
      if (id) {
        const foundProduct = getProductById(id);
        
        if (foundProduct) {
          setProduct(foundProduct);
          setRelatedProducts(getRelatedProducts(foundProduct.category, foundProduct.id));
        }
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
            <button className="bg-corpus-blue text-white px-4 py-2 rounded-md hover:bg-corpus-blue-dark transition-colors">
              Ver Todos os Produtos
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-transition">
      <Navbar />
      
      <ProductBreadcrumb category={product.category} productName={product.name} />
      
      <section className="section-container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ProductImageGallery 
            mainImage={product.image} 
            additionalImages={product.additionalImages} 
            productName={product.name} 
          />
          
          <ProductDetails product={product} />
        </div>
        
        {product.details && product.specs && (
          <ProductTabs details={product.details} specs={product.specs} />
        )}
      </section>
      
      <RelatedProducts products={relatedProducts} />
      
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
