// Página de Detalle del Producto
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
import { getProduct, Product } from '../lib/firebaseDb';
import { getMockProductById } from '../lib/mockProducts';
import { useCart } from '../contexts/CartContext';
import { toast } from 'sonner@2.0.3';
import { ShoppingCart, Plus, Minus, ArrowLeft } from 'lucide-react';

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    if (id) {
      loadProduct();
    }
  }, [id]);

  const loadProduct = async () => {
    setLoading(true);
    let currentProduct: Product | null = null;
    
    const result = await getProduct(id!);
    if (result.success && result.product) {
      currentProduct = result.product;
    } else {
      // Si no está en Firebase, buscar en productos de ejemplo
      const mockProduct = getMockProductById(id!);
      if (mockProduct) {
        currentProduct = mockProduct;
      }
    }
    
    setProduct(currentProduct);
    setLoading(false);
  };

  const handleAddToCart = (p: Product = product!) => {
    if (p) {
      addToCart(p, quantity);
      toast.success('Producto agregado al carrito', {
        description: `${quantity} ${quantity === 1 ? 'unidad' : 'unidades'} de ${p.name}`
      });
    }
  };

  if (loading) {
    return (
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-12">
        <div className="text-center py-20">
          <div className="inline-block size-12 border-4 border-[#ec268f] border-t-transparent rounded-full animate-spin" />
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-12">
        <div className="text-center py-20">
          <div className="text-[100px] mb-6">😕</div>
          <h2 className="font-['Nunito'] font-bold text-[32px] text-gray-700 mb-4">
            Producto no encontrado
          </h2>
          <Link
            to="/"
            className="inline-block bg-[#ec268f] hover:bg-[#d61f7a] text-white font-['Nunito'] font-semibold text-[18px] px-8 py-4 rounded-[30px] transition-colors"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-12">
      {/* Back Button */}
      <Link
        to={`/${product.category}`}
        className="inline-flex items-center gap-2 text-[#ec268f] hover:text-[#d61f7a] font-['Inter'] font-medium mb-8 transition-colors"
      >
        <ArrowLeft size={20} />
        Volver a {product.category}
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Product Image - Left Column */}
        <div className="flex flex-col gap-6">
          <div className="bg-[#f0cad5] rounded-[24px] overflow-hidden aspect-square flex items-center justify-center relative z-10">
            {product.images && product.images.length > 0 ? (
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-[#ec268f]">
                <span className="text-[100px]">📷</span>
              </div>
            )}
          </div>

          {/* Trust Badges */}
          <div className="bg-[#f0cad5] rounded-[18px] p-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="text-[#ec268f] text-[20px]">✓</div>
                <span className="font-['Inter'] text-[15px] text-black">
                  Garantía de calidad
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-[#ec268f] text-[20px]">✓</div>
                <span className="font-['Inter'] text-[15px] text-black">
                  Envío seguro a todo el país
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-[#ec268f] text-[20px]">✓</div>
                <span className="font-['Inter'] text-[15px] text-black">
                  Atención personalizada
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Info - Right Column */}
        <div>
          {product.featured && (
            <div className="inline-block bg-[#ec268f] text-white px-4 py-2 rounded-full font-['Nunito'] font-semibold text-[14px] mb-4">
              Destacado
            </div>
          )}

          <h1 className="font-['Nunito'] font-bold text-[36px] sm:text-[48px] text-black mb-4 leading-tight">
            {product.name}
          </h1>

          <div className="flex items-baseline gap-4 mb-6">
            {product.onSale && product.originalPrice ? (
               <div className="flex flex-col">
                  <span className="font-['Inter'] text-[20px] text-gray-400 line-through">
                    ${product.originalPrice.toLocaleString('es-CO')}
                  </span>
                  <span className="font-['Nunito'] font-bold text-[40px] sm:text-[48px] text-[#ec268f]">
                    ${product.price.toLocaleString('es-CO')}
                  </span>
               </div>
            ) : (
              <span className="font-['Nunito'] font-bold text-[40px] sm:text-[48px] text-[#ec268f]">
                ${product.price.toLocaleString('es-CO')}
              </span>
            )}
          </div>

          <div className="mb-8">
            <h2 className="font-['Nunito'] font-bold text-[20px] text-black mb-3">
              Descripción
            </h2>
            <p className="font-['Inter'] text-[16px] text-gray-700 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Category */}
          <div className="mb-6">
            <span className="font-['Inter'] text-[14px] text-gray-600">
              Categoría:{' '}
            </span>
            <Link
              to={`/${product.category}`}
              className="font-['Inter'] font-semibold text-[14px] text-[#ec268f] hover:text-[#d61f7a] transition-colors"
            >
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </Link>
          </div>

          {/* Stock */}
          <div className="mb-8">
            {product.stock > 0 ? (
              <div className="flex items-center gap-2">
                <div className="size-3 bg-green-500 rounded-full" />
                <span className="font-['Inter'] text-[16px] text-gray-700">
                  {product.stock} unidades disponibles
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <div className="size-3 bg-red-500 rounded-full" />
                <span className="font-['Inter'] text-[16px] text-red-600">
                  Agotado
                </span>
              </div>
            )}
          </div>

          {/* Quantity Selector */}
          <div className="mb-8">
            <label className="block font-['Nunito'] font-bold text-[18px] text-black mb-3">
              Cantidad
            </label>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="bg-[#f0cad5] hover:bg-[#efcbd4] text-[#ec268f] rounded-full p-3 transition-colors"
                aria-label="Disminuir cantidad"
              >
                <Minus size={20} />
              </button>
              <span className="font-['Nunito'] font-bold text-[24px] text-black w-16 text-center">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                disabled={quantity >= product.stock}
                className="bg-[#f0cad5] hover:bg-[#efcbd4] disabled:bg-gray-200 disabled:text-gray-400 text-[#ec268f] rounded-full p-3 transition-colors"
                aria-label="Aumentar cantidad"
              >
                <Plus size={20} />
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={() => handleAddToCart()}
            disabled={product.stock === 0}
            className="w-full bg-[#ec268f] hover:bg-[#d61f7a] disabled:bg-gray-400 text-white font-['Nunito'] font-semibold text-[20px] py-4 rounded-[30px] transition-colors flex items-center justify-center gap-3 mb-4"
          >
            <ShoppingCart size={24} />
            {product.stock > 0 ? 'Agregar al Carrito' : 'Agotado'}
          </button>
        </div>
      </div>
    </div>
  );
}