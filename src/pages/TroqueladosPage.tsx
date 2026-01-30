import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { getMockProducts, Product } from '../lib/mockProducts';
import { useCart } from '../contexts/CartContext';
import { ShoppingCart } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { SectionTitle } from '../components/ui/SectionTitle';

export default function TroqueladosPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      const data = getMockProducts('troquelados');
      setProducts(data);
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast.success('Producto agregado al carrito', {
      description: product.name
    });
  };

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-12">
      {/* Header */}
      <SectionTitle title="Troquelados" highlightedWord="Troquelados" />
      <div className="text-center mb-12 -mt-4">
        <p className="font-['Inter'] font-medium text-[18px] sm:text-[24px] text-black max-w-[800px] mx-auto">
          Figuras troqueladas perfectas para decorar tus proyectos de scrapbooking y repostería
        </p>
      </div>

      {/* Products Grid */}
      {loading ? (
        <div className="text-center py-20">
          <div className="inline-block size-12 border-4 border-[#ec268f] border-t-transparent rounded-full animate-spin" />
        </div>
      ) : products.length === 0 ? (
        <div className="text-center py-20">
          <p className="font-['Inter'] text-[20px] text-gray-600">
            No hay productos disponibles en este momento.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-[18px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow w-full max-w-[350px]"
            >
              <Link to={`/producto/${product.id}`}>
                <div className="aspect-square bg-[#f0cad5] relative overflow-hidden">
                  {product.images && product.images[0] ? (
                    <img 
                      src={product.images[0]} 
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[#ec268f]">
                      <span className="text-[48px]">📷</span>
                    </div>
                  )}
                </div>
              </Link>

              <div className="p-5">
                <Link to={`/producto/${product.id}`}>
                  <h3 className="font-['Nunito'] font-bold text-[20px] text-black mb-2 hover:text-[#ec268f] transition-colors leading-tight">
                    {product.name}
                  </h3>
                </Link>
                <p className="font-['Inter'] text-[14px] text-gray-600 mb-4 line-clamp-2 min-h-[42px]">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-['Nunito'] font-bold text-[24px] text-[#ec268f]">
                    ${product.price.toLocaleString('es-CO')}
                  </span>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-[#ec268f] hover:bg-[#d61f7a] text-white rounded-full size-[44px] flex items-center justify-center transition-colors shadow-md"
                    aria-label="Agregar al carrito"
                  >
                    <ShoppingCart size={20} className="text-white" strokeWidth={2} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}