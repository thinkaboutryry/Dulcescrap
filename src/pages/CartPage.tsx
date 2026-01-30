// Página del Carrito de Compras
import { Link } from 'react-router';
import { useCart } from '../contexts/CartContext';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, total, itemCount } = useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-12">
        <div className="text-center py-20">
          <div className="text-[100px] mb-6">🛒</div>
          <h2 className="font-['Nunito'] font-bold text-[32px] text-gray-700 mb-4">
            Tu carrito está vacío
          </h2>
          <p className="font-['Inter'] text-[18px] text-gray-500 mb-8">
            ¡Agrega algunos productos increíbles a tu carrito!
          </p>
          <Link
            to="/"
            className="inline-block bg-[#ec268f] hover:bg-[#d61f7a] text-white font-['Nunito'] font-semibold text-[18px] px-8 py-4 rounded-[30px] transition-colors"
          >
            Continuar Comprando
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-['Nunito'] font-bold text-[36px] sm:text-[48px] text-[#ec268f] mb-2">
          Mi Carrito
        </h1>
        <p className="font-['Inter'] text-[18px] text-gray-600">
          {itemCount} {itemCount === 1 ? 'producto' : 'productos'} en tu carrito
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div
              key={item.product.id}
              className="bg-white rounded-[18px] p-6 shadow-lg flex flex-col sm:flex-row gap-6"
            >
              {/* Product Image */}
              <div className="w-full sm:w-[150px] h-[150px] bg-[#f0cad5] rounded-[12px] overflow-hidden flex-shrink-0">
                {item.product.images && item.product.images[0] ? (
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-[#ec268f]">
                    <span className="text-[48px]">📷</span>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="flex-1">
                <Link to={`/producto/${item.product.id}`}>
                  <h3 className="font-['Nunito'] font-bold text-[22px] text-black hover:text-[#ec268f] transition-colors mb-2">
                    {item.product.name}
                  </h3>
                </Link>
                <p className="font-['Inter'] text-[14px] text-gray-600 mb-4 line-clamp-2">
                  {item.product.description}
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(item.product.id!, item.quantity - 1)}
                      className="bg-[#f0cad5] hover:bg-[#efcbd4] text-[#ec268f] rounded-full p-2 transition-colors"
                      aria-label="Disminuir cantidad"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="font-['Nunito'] font-bold text-[18px] text-black w-12 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.product.id!, item.quantity + 1)}
                      className="bg-[#f0cad5] hover:bg-[#efcbd4] text-[#ec268f] rounded-full p-2 transition-colors"
                      aria-label="Aumentar cantidad"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-4">
                    <span className="font-['Nunito'] font-bold text-[24px] text-[#ec268f]">
                      ${(item.product.price * item.quantity).toLocaleString('es-CO')}
                    </span>
                    <button
                      onClick={() => removeFromCart(item.product.id!)}
                      className="text-red-500 hover:text-red-700 transition-colors"
                      aria-label="Eliminar producto"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-[18px] p-6 shadow-lg sticky top-24">
            <h2 className="font-['Nunito'] font-bold text-[24px] text-black mb-6">
              Resumen del Pedido
            </h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between font-['Inter'] text-[16px]">
                <span className="text-gray-600">Subtotal:</span>
                <span className="font-semibold text-black">
                  ${total.toLocaleString('es-CO')}
                </span>
              </div>
              <div className="flex justify-between font-['Inter'] text-[16px]">
                <span className="text-gray-600">Envío:</span>
                <span className="font-semibold text-black">A calcular</span>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between font-['Nunito'] text-[20px]">
                  <span className="font-bold text-black">Total:</span>
                  <span className="font-bold text-[#ec268f]">
                    ${total.toLocaleString('es-CO')}
                  </span>
                </div>
              </div>
            </div>

            <Link
              to="/checkout"
              className="block w-full bg-[#ec268f] hover:bg-[#d61f7a] text-white text-center font-['Nunito'] font-semibold text-[18px] py-4 rounded-[30px] transition-colors mb-3"
            >
              Proceder al Pago
            </Link>

            <Link
              to="/"
              className="block w-full border-2 border-[#ec268f] text-[#ec268f] hover:bg-[#f0cad5] text-center font-['Nunito'] font-semibold text-[18px] py-4 rounded-[30px] transition-colors"
            >
              Continuar Comprando
            </Link>

            {/* Trust Badges */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-600">
                  <div className="text-[#ec268f]">✓</div>
                  <span className="font-['Inter'] text-[14px]">Envío seguro</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <div className="text-[#ec268f]">✓</div>
                  <span className="font-['Inter'] text-[14px]">Garantía de calidad</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <div className="text-[#ec268f]">✓</div>
                  <span className="font-['Inter'] text-[14px]">Pago seguro</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
