
import { Check } from 'lucide-react';

interface Specification {
  name: string;
  value: string;
}

interface ProductSpecificationsProps {
  specs: Specification[];
}

const ProductSpecifications = ({ specs }: ProductSpecificationsProps) => {
  if (!specs || specs.length === 0) return null;
  
  return (
    <div className="mb-8">
      <h3 className="font-semibold text-corpus-text-dark mb-3">Especificações:</h3>
      <div className="space-y-2">
        {specs.map((spec, index) => (
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
  );
};

export default ProductSpecifications;
