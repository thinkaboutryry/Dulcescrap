// Página de Checkout
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useCart } from '../contexts/CartContext';
import { createOrder } from '../lib/firebaseDb';
import { toast } from 'sonner@2.0.3';
import { CreditCard, MapPin, User } from 'lucide-react';

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    direccion: '',
    ciudad: '',
    departamento: '',
    codigoPostal: '',
    notas: ''
  });

  if (items.length === 0) {
    navigate('/carrito');
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const order = {
      items: items.map(item => ({
        productId: item.product.id!,
        quantity: item.quantity,
        product: item.product
      })),
      total,
      status: 'pending' as const,
      customerInfo: {
        name: formData.nombre,
        email: formData.email,
        phone: formData.telefono,
        address: `${formData.direccion}, ${formData.ciudad}, ${formData.departamento}, ${formData.codigoPostal}`
      }
    };

    const result = await createOrder(order);

    if (result.success) {
      toast.success('¡Pedido realizado con éxito!', {
        description: 'Nos pondremos en contacto contigo pronto'
      });
      clearCart();
      navigate('/');
    } else {
      toast.error('Error al procesar el pedido', {
        description: 'Por favor intenta nuevamente'
      });
    }

    setLoading(false);
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-8 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-['Nunito'] font-bold text-[36px] sm:text-[48px] text-[#ec268f] mb-2">
          Finalizar Compra
        </h1>
        <p className="font-['Inter'] text-[18px] text-gray-600">
          Completa tus datos para procesar tu pedido
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Información Personal */}
            <div className="bg-white rounded-[18px] p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#ec268f] rounded-full p-3">
                  <User size={24} className="text-white" />
                </div>
                <h2 className="font-['Nunito'] font-bold text-[24px] text-black">
                  Información Personal
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block font-['Inter'] font-medium text-[16px] text-black mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    className="w-full px-4 py-3 bg-[#f5f5f5] border border-[#efcbd4] rounded-[12px] font-['Inter'] text-[16px] focus:outline-none focus:border-[#ec268f] transition-colors"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label className="block font-['Inter'] font-medium text-[16px] text-black mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-[#f5f5f5] border border-[#efcbd4] rounded-[12px] font-['Inter'] text-[16px] focus:outline-none focus:border-[#ec268f] transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block font-['Inter'] font-medium text-[16px] text-black mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    className="w-full px-4 py-3 bg-[#f5f5f5] border border-[#efcbd4] rounded-[12px] font-['Inter'] text-[16px] focus:outline-none focus:border-[#ec268f] transition-colors"
                    placeholder="+57 300 123 4567"
                  />
                </div>
              </div>
            </div>

            {/* Dirección de Envío */}
            <div className="bg-white rounded-[18px] p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#ec268f] rounded-full p-3">
                  <MapPin size={24} className="text-white" />
                </div>
                <h2 className="font-['Nunito'] font-bold text-[24px] text-black">
                  Dirección de Envío
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block font-['Inter'] font-medium text-[16px] text-black mb-2">
                    Dirección *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.direccion}
                    onChange={(e) => setFormData({ ...formData, direccion: e.target.value })}
                    className="w-full px-4 py-3 bg-[#f5f5f5] border border-[#efcbd4] rounded-[12px] font-['Inter'] text-[16px] focus:outline-none focus:border-[#ec268f] transition-colors"
                    placeholder="Calle, número, apartamento"
                  />
                </div>

                <div>
                  <label className="block font-['Inter'] font-medium text-[16px] text-black mb-2">
                    Ciudad *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.ciudad}
                    onChange={(e) => setFormData({ ...formData, ciudad: e.target.value })}
                    className="w-full px-4 py-3 bg-[#f5f5f5] border border-[#efcbd4] rounded-[12px] font-['Inter'] text-[16px] focus:outline-none focus:border-[#ec268f] transition-colors"
                    placeholder="Tu ciudad"
                  />
                </div>

                <div>
                  <label className="block font-['Inter'] font-medium text-[16px] text-black mb-2">
                    Departamento *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.departamento}
                    onChange={(e) => setFormData({ ...formData, departamento: e.target.value })}
                    className="w-full px-4 py-3 bg-[#f5f5f5] border border-[#efcbd4] rounded-[12px] font-['Inter'] text-[16px] focus:outline-none focus:border-[#ec268f] transition-colors"
                    placeholder="Departamento"
                  />
                </div>

                <div>
                  <label className="block font-['Inter'] font-medium text-[16px] text-black mb-2">
                    Código Postal
                  </label>
                  <input
                    type="text"
                    value={formData.codigoPostal}
                    onChange={(e) => setFormData({ ...formData, codigoPostal: e.target.value })}
                    className="w-full px-4 py-3 bg-[#f5f5f5] border border-[#efcbd4] rounded-[12px] font-['Inter'] text-[16px] focus:outline-none focus:border-[#ec268f] transition-colors"
                    placeholder="110111"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block font-['Inter'] font-medium text-[16px] text-black mb-2">
                    Notas del pedido (opcional)
                  </label>
                  <textarea
                    value={formData.notas}
                    onChange={(e) => setFormData({ ...formData, notas: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 bg-[#f5f5f5] border border-[#efcbd4] rounded-[12px] font-['Inter'] text-[16px] focus:outline-none focus:border-[#ec268f] transition-colors resize-none"
                    placeholder="Instrucciones especiales para la entrega..."
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-[18px] p-6 shadow-lg sticky top-24">
              <h2 className="font-['Nunito'] font-bold text-[24px] text-black mb-6">
                Resumen del Pedido
              </h2>

              {/* Items */}
              <div className="space-y-3 mb-6 max-h-[300px] overflow-y-auto">
                {items.map((item) => (
                  <div key={item.product.id} className="flex gap-3">
                    <div className="w-16 h-16 bg-[#f0cad5] rounded-[8px] overflow-hidden flex-shrink-0">
                      {item.product.images && item.product.images[0] ? (
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-[#ec268f]">
                          📷
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="font-['Nunito'] font-semibold text-[14px] text-black line-clamp-1">
                        {item.product.name}
                      </p>
                      <p className="font-['Inter'] text-[12px] text-gray-600">
                        Cantidad: {item.quantity}
                      </p>
                      <p className="font-['Nunito'] font-semibold text-[14px] text-[#ec268f]">
                        ${(item.product.price * item.quantity).toLocaleString('es-CO')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="space-y-3 mb-6 pt-6 border-t border-gray-200">
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
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between font-['Nunito'] text-[20px]">
                    <span className="font-bold text-black">Total:</span>
                    <span className="font-bold text-[#ec268f]">
                      ${total.toLocaleString('es-CO')}
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#ec268f] hover:bg-[#d61f7a] disabled:bg-gray-400 text-white font-['Nunito'] font-semibold text-[18px] py-4 rounded-[30px] transition-colors flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="size-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Procesando...
                  </>
                ) : (
                  <>
                    <CreditCard size={20} />
                    Realizar Pedido
                  </>
                )}
              </button>

              <p className="text-center font-['Inter'] text-[12px] text-gray-500 mt-4">
                Al realizar el pedido, aceptas nuestros términos y condiciones
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
