import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { getMockOnSaleProducts, Product } from '../lib/mockProducts';
import { useCart } from '../contexts/CartContext';
import { ShoppingCart, Percent } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { SectionTitle } from '../components/ui/SectionTitle';

export default function OfertasPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Get all on sale products (filtered to 4 in mockProducts)
      const data = getMockOnSaleProducts();
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

  const calculateDiscount = (price: number, originalPrice?: number) => {
    if (!originalPrice || originalPrice <= price) return 0;
    return Math.round(((originalPrice - price) / originalPrice) * 100);
  };

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-12">
      {/* CTA Section - Restaurado */}
      <div className="bg-gradient-to-r from-[#ec268f] to-[#ff8bb8] rounded-[24px] p-8 sm:p-12 mb-16 text-white relative overflow-hidden shadow-xl">
        <div className="relative z-10 max-w-2xl">
          <h1 className="font-['Nunito'] font-bold text-[36px] sm:text-[48px] leading-tight mb-4">
            ¡Ofertas Imperdibles!
          </h1>
          <p className="font-['Inter'] text-[18px] sm:text-[20px] mb-8 opacity-90">
            Descubre nuestros descuentos especiales en toppers y troquelados. 
            ¡Personaliza tus celebraciones al mejor precio!
          </p>
          <button className="bg-white text-[#ec268f] font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all text-[18px]">
            Ver ofertas
          </button>
        </div>
        
        {/* Decorative Circles */}
        <div className="absolute top-[-50px] right-[-50px] size-[200px] rounded-full bg-white opacity-10" />
        <div className="absolute bottom-[-30px] right-[100px] size-[100px] rounded-full bg-white opacity-10" />
        <div className="absolute top-[20%] right-[20%] size-[50px] rounded-full bg-white opacity-20" />
      </div>

      <SectionTitle title="Ofertas" highlightedWord="Ofertas" />

      {/* Products Grid - Layout: 4 columns for 4 items */}
      {loading ? (
        <div className="text-center py-20">
          <div className="inline-block size-12 border-4 border-[#ec268f] border-t-transparent rounded-full animate-spin" />
        </div>
      ) : products.length === 0 ? (
        <div className="text-center py-20">
          <p className="font-['Inter'] text-[20px] text-gray-600">
            No hay ofertas disponibles por el momento.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {products.map((product) => {
            const discount = calculateDiscount(product.price, product.originalPrice);
            
            return (
              <div 
                key={product.id}
                className="bg-white rounded-[18px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow w-full max-w-[320px] flex flex-col"
              >
                <Link to={`/producto/${product.id}`} className="relative group">
                  <div className="aspect-square bg-[#f0cad5] relative overflow-hidden">
                    {product.images && product.images[0] ? (
                      <img 
                        src={product.images[0]} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[#ec268f]">
                        <span className="text-[48px]">📷</span>
                      </div>
                    )}
                    
                    {/* Discount Badge */}
                    {discount > 0 ? (
                      <div className="absolute top-4 right-4 bg-[#ec268f] text-white px-3 py-1 rounded-full font-['Nunito'] font-bold text-[14px] shadow-md flex items-center gap-1">
                        <Percent size={12} strokeWidth={3} />
                        {discount}% OFF
                      </div>
                    ) : (
                      <div className="absolute top-4 right-4 bg-[#ec268f] text-white px-3 py-1 rounded-full font-['Nunito'] font-semibold text-[14px]">
                        Oferta
                      </div>
                    )}
                  </div>
                </Link>

                <div className="p-4 flex flex-col flex-grow">
                  <Link to={`/producto/${product.id}`}>
                    <h3 className="font-['Nunito'] font-bold text-[18px] text-black mb-2 hover:text-[#ec268f] transition-colors line-clamp-2 h-[54px]">
                      {product.name}
                    </h3>
                  </Link>
                  
                  <div className="mt-auto pt-2 flex items-end justify-between">
                    <div>
                      {product.originalPrice && (
                        <span className="block font-['Inter'] text-[14px] text-gray-400 line-through mb-0.5">
                          ${product.originalPrice.toLocaleString('es-CO')}
                        </span>
                      )}
                      <span className="block font-['Nunito'] font-bold text-[22px] text-[#ec268f]">
                        ${product.price.toLocaleString('es-CO')}
                      </span>
                    </div>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="bg-[#ec268f] hover:bg-[#d61f7a] text-white rounded-full size-[40px] flex items-center justify-center transition-colors shadow-md transform active:scale-95"
                      aria-label="Agregar al carrito"
                    >
                      <ShoppingCart size={18} className="text-white" strokeWidth={2} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}