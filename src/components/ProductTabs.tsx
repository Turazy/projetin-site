
import { useState } from 'react';

interface Specification {
  name: string;
  value: string;
}

interface ProductTabsProps {
  details: string;
  specs: Specification[];
}

const ProductTabs = ({ details, specs }: ProductTabsProps) => {
  const [activeTab, setActiveTab] = useState("description");
  
  return (
    <div className="mt-16">
      <div className="border-b border-gray-200">
        <div className="flex overflow-x-auto scrollbar-hide">
          <button
            className={`px-6 py-3 font-medium text-lg ${
              activeTab === "description"
                ? "border-b-2 border-corpus-blue text-corpus-blue"
                : "text-corpus-text-dark/70 hover:text-corpus-text-dark"
            }`}
            onClick={() => setActiveTab("description")}
          >
            Descrição Detalhada
          </button>
          
          <button
            className={`px-6 py-3 font-medium text-lg ${
              activeTab === "specs"
                ? "border-b-2 border-corpus-blue text-corpus-blue"
                : "text-corpus-text-dark/70 hover:text-corpus-text-dark"
            }`}
            onClick={() => setActiveTab("specs")}
          >
            Especificações Técnicas
          </button>
        </div>
      </div>
      
      <div className="py-8">
        {activeTab === "description" && (
          <div className="prose prose-lg max-w-none text-corpus-text-dark/80" dangerouslySetInnerHTML={{ __html: details || "" }} />
        )}
        
        {activeTab === "specs" && (
          <div className="overflow-x-auto">
            <table className="w-full">
              <tbody>
                {specs?.map((spec, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-corpus-silver/10' : ''}>
                    <td className="py-3 px-4 font-semibold">{spec.name}</td>
                    <td className="py-3 px-4">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;
