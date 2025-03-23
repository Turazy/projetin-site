
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface ProductBreadcrumbProps {
  category: string;
  productName: string;
}

const ProductBreadcrumb = ({ category, productName }: ProductBreadcrumbProps) => {
  return (
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
          <Link to={`/products?category=${category}`} className="hover:text-corpus-blue transition-colors">
            {category}
          </Link>
          <ChevronRight size={16} className="mx-2" />
          <span className="font-medium text-corpus-text-dark truncate max-w-[200px]">
            {productName}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductBreadcrumb;
