
import { useState } from 'react';

interface ProductImageGalleryProps {
  mainImage: string;
  additionalImages?: string[];
  productName: string;
}

const ProductImageGallery = ({ mainImage, additionalImages, productName }: ProductImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(mainImage);

  return (
    <div>
      <div className="bg-white rounded-xl overflow-hidden mb-4 aspect-square">
        <img 
          src={selectedImage} 
          alt={productName} 
          className="w-full h-full object-contain p-4"
        />
      </div>
      
      {additionalImages && (
        <div className="grid grid-cols-4 gap-2">
          <div 
            className={`aspect-square rounded-md overflow-hidden cursor-pointer ${
              selectedImage === mainImage ? 'ring-2 ring-corpus-blue' : 'opacity-70'
            }`}
            onClick={() => setSelectedImage(mainImage)}
          >
            <img 
              src={mainImage} 
              alt={productName} 
              className="w-full h-full object-cover"
            />
          </div>
          
          {additionalImages.map((img: string, index: number) => (
            <div 
              key={index}
              className={`aspect-square rounded-md overflow-hidden cursor-pointer ${
                selectedImage === img ? 'ring-2 ring-corpus-blue' : 'opacity-70'
              }`}
              onClick={() => setSelectedImage(img)}
            >
              <img 
                src={img} 
                alt={`${productName} - Imagem ${index + 1}`} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductImageGallery;
