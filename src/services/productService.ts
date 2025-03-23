
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number | null;
  image: string;
  category: string;
  isNew?: boolean;
  isFeatured?: boolean;
  details?: string;
  specs?: Array<{ name: string; value: string }>;
  additionalImages?: string[];
}

// Mock product data
const mockProducts: Product[] = [
  {
    id: "1",
    name: "Microscópio Digital Binocular",
    description: "Microscópio de alta resolução com ampliação de até 1000x, ideal para laboratórios e instituições de ensino.",
    price: 3599.90,
    image: "https://images.unsplash.com/photo-1516571748831-5d81767b788d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    category: "Equipamentos Laboratoriais",
    isNew: true,
    isFeatured: true,
    details: `
    <p>O Microscópio Digital Binocular é um equipamento de alta precisão projetado para fornecer imagens claras e nítidas, perfeito para uso em laboratórios de pesquisa, universidades e escolas.</p>
    
    <h3>Características principais:</h3>
    <ul>
      <li>Ampliação de 40x a 1000x</li>
      <li>Oculares WF10x/18mm</li>
      <li>Objetivas acromáticas (4x, 10x, 40x, 100x)</li>
      <li>Iluminação LED ajustável</li>
      <li>Condensador Abbe N.A. 1.25 com diafragma íris</li>
      <li>Platina mecânica com movimento X-Y</li>
      <li>Cabeçote binocular inclinado a 30°</li>
      <li>Sistema de focalização coaxial</li>
    </ul>
    
    <h3>Especificações técnicas:</h3>
    <ul>
      <li>Tensão: 110V/220V (bivolt)</li>
      <li>Potência: 20W</li>
      <li>Dimensões: 350 x 230 x 380 mm</li>
      <li>Peso: 5,7 kg</li>
      <li>Garantia: 12 meses</li>
    </ul>
    
    <p>Ideal para análises detalhadas em biologia, medicina, ciência forense e diversas áreas de pesquisa científica.</p>
    `,
    specs: [
      { name: "Ampliação", value: "40x - 1000x" },
      { name: "Tipo", value: "Binocular" },
      { name: "Iluminação", value: "LED ajustável" },
      { name: "Alimentação", value: "110V/220V" },
      { name: "Garantia", value: "12 meses" }
    ],
    additionalImages: [
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80",
      "https://images.unsplash.com/photo-1576086135878-01dea3e32d1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80",
      "https://images.unsplash.com/photo-1551884831-bbf3cdc6469e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80"
    ]
  },
];

export const getProductById = (id: string): Product | undefined => {
  return mockProducts.find(p => p.id === id);
};

export const getRelatedProducts = (categoryName: string, currentProductId: string): Product[] => {
  return mockProducts.filter(p => p.category === categoryName && p.id !== currentProductId).slice(0, 4);
};
