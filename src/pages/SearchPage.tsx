import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router';
import { getMockProducts, Product } from '../lib/mockProducts';
import { useCart } from '../contexts/CartContext';
import { ShoppingCart } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { SectionTitle } from '../components/ui/SectionTitle';

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      if (query.trim()) {
        const allProducts = getMockProducts();
        const searchTerm = query.toLowerCase();
        const filtered = allProducts.filter(p => 
          p.name.toLowerCase().includes(searchTerm) || 
          p.description.toLowerCase().includes(searchTerm) ||
          p.category.toLowerCase().includes(searchTerm) ||
          (p.subcategory && p.subcategory.toLowerCase().includes(searchTerm))
        );
        setProducts(filtered);
      } else {
        setProducts([]);
      }
      setLoading(false);
    }, 300); // Small delay for UX
    return () => clearTimeout(timer);
  }, [query]);

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast.success('Producto agregado al carrito', {
      description: product.name
    });
  };

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-12">
      <SectionTitle title="Resultados de búsqueda" highlightedWord="búsqueda" />
      
      <div className="text-center mb-12 -mt-4">
        {query ? (
          <p className="font-['Inter'] font-medium text-[18px] sm:text-[24px] text-black">
            Resultados para: <span className="text-[#ec268f] font-bold">"{query}"</span>
          </p>
        ) : (
          <p className="font-['Inter'] font-medium text-[18px] sm:text-[24px] text-black">
            Ingresa un término para buscar
          </p>
        )}
      </div>

      {loading ? (
        <div className="text-center py-20">
          <div className="inline-block size-12 border-4 border-[#ec268f] border-t-transparent rounded-full animate-spin" />
        </div>
      ) : products.length === 0 ? (
        <div className="text-center py-20">
          <p className="font-['Inter'] text-[20px] text-gray-600">
            {query ? 'No se encontraron productos que coincidan con tu búsqueda.' : 'Empieza a escribir en la barra de búsqueda.'}
          </p>
          <div className="mt-8">
            <Link to="/toppers" className="bg-[#ec268f] text-white px-6 py-3 rounded-full font-bold hover:bg-[#d61f7a] transition-colors">
              Ver todos los productos
            </Link>
          </div>
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
                  {/* Oferta Tag if needed */}
                  {product.onSale && (
                    <div className="absolute top-4 right-4 bg-[#ec268f] text-white px-3 py-1 rounded-full font-['Nunito'] font-semibold text-[14px]">
                      Oferta
                    </div>
                  )}
                </div>
              </Link>

              <div className="p-4">
                <Link to={`/producto/${product.id}`}>
                  <h3 className="font-['Nunito'] font-bold text-[18px] text-black mb-2 hover:text-[#ec268f] transition-colors line-clamp-2 min-h-[54px]">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex flex-col">
                    {product.originalPrice && product.onSale && (
                      <span className="text-xs text-gray-400 line-through">
                        ${product.originalPrice.toLocaleString('es-CO')}
                      </span>
                    )}
                    <span className="font-['Nunito'] font-bold text-[22px] text-[#ec268f]">
                      ${product.price.toLocaleString('es-CO')}
                    </span>
                  </div>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-[#ec268f] hover:bg-[#d61f7a] text-white rounded-full size-[40px] flex items-center justify-center transition-colors shadow-md"
                    aria-label="Agregar al carrito"
                  >
                    <ShoppingCart size={18} className="text-white" strokeWidth={2} />
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