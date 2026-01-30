import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { getMockProducts, Product } from '../lib/mockProducts';
import { useCart } from '../contexts/CartContext';
import { ShoppingCart, Download } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { SectionTitle } from '../components/ui/SectionTitle';

export default function ArchivosPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const timer = setTimeout(() => {
      const data = getMockProducts('archivos');
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
      <div className="text-center mb-4">
        <h1 className="font-['Nunito'] font-bold text-[48px] text-black inline-flex items-baseline gap-2 relative">
          Archivos 
          <span className="relative">
            Digitales
            <span className="absolute left-0 bottom-2 w-full h-[8px] bg-[#ec268f] rounded-full -z-10"></span>
          </span>
        </h1>
      </div>
      <div className="text-center mb-12">
        <p className="font-['Inter'] font-medium text-[18px] sm:text-[24px] text-black max-w-[800px] mx-auto leading-relaxed">
          Descarga diseños listos para imprimir y crear tus propios toppers y decoraciones
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
            No hay archivos disponibles en este momento.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-[18px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
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
                  {/* Digital Badge */}
                  <div className="absolute top-4 right-4 bg-[#ec268f] text-white px-3 py-1 rounded-full font-['Nunito'] font-semibold text-[12px] flex items-center gap-1 shadow-md">
                    <Download size={14} />
                    Digital
                  </div>
                </div>
              </Link>

              <div className="p-4">
                <Link to={`/producto/${product.id}`}>
                  <h3 className="font-['Nunito'] font-bold text-[20px] text-black mb-2 hover:text-[#ec268f] transition-colors line-clamp-2 min-h-[60px]">
                    {product.name}
                  </h3>
                </Link>
                <p className="font-['Inter'] text-[14px] text-gray-600 mb-3 line-clamp-2 min-h-[42px]">
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