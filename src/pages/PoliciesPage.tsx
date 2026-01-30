import React from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function PoliciesPage() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[250px] md:h-[350px] bg-[#df8098] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1705356151894-b1fd39861e3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2xpY2llcyUyMGRvY3VtZW50cyUyMGFncmVlbWVudCUyMGNvbnRyYWN0JTIwbWluaW1hbGlzdCUyMHBpbmt8ZW58MXx8fHwxNzY5NjkyNTYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Políticas Dulce Scrap"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-['Nunito'] font-bold text-white text-[40px] md:text-[56px] drop-shadow-lg">
            Políticas y Términos
          </h1>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar Navigation (Desktop) */}
          <div className="hidden md:block w-1/4 sticky top-24 h-fit">
            <nav className="space-y-2 border-l-4 border-[#df8098] pl-4">
              <button onClick={() => scrollToSection('devolucion')} className="block text-left font-['Nunito'] font-bold text-[#ec268f] hover:text-[#df8098] transition-colors py-1">Políticas de devolución</button>
              <button onClick={() => scrollToSection('envios')} className="block text-left font-['Nunito'] font-bold text-[#ec268f] hover:text-[#df8098] transition-colors py-1">Políticas de envíos</button>
              <button onClick={() => scrollToSection('privacidad')} className="block text-left font-['Nunito'] font-bold text-[#ec268f] hover:text-[#df8098] transition-colors py-1">Políticas de privacidad</button>
              <button onClick={() => scrollToSection('servicio')} className="block text-left font-['Nunito'] font-bold text-[#ec268f] hover:text-[#df8098] transition-colors py-1">Políticas de servicio</button>
              <button onClick={() => scrollToSection('terminos')} className="block text-left font-['Nunito'] font-bold text-[#ec268f] hover:text-[#df8098] transition-colors py-1">Términos y condiciones</button>
            </nav>
          </div>

          {/* Content */}
          <div className="w-full md:w-3/4 space-y-16">
            
            <section id="devolucion" className="scroll-mt-24">
              <h2 className="font-['Nunito'] font-bold text-[28px] text-[#ec268f] mb-4 border-b-2 border-[#df8098]/30 pb-2">
                Políticas de Devolución
              </h2>
              <div className="font-['Inter'] text-gray-700 leading-relaxed space-y-4">
                <p>
                  En Dulce Scrap, nos esforzamos por garantizar la satisfacción total de nuestros clientes. Debido a la naturaleza personalizada de nuestros productos (toppers, troquelados, papelería personalizada), <strong>no aceptamos devoluciones de productos personalizados</strong> una vez que el diseño ha sido aprobado y producido, a menos que exista un defecto de fabricación o un error por nuestra parte.
                </p>
                <p>
                  Para productos no personalizados (suministros generales), aceptamos devoluciones dentro de los 5 días hábiles siguientes a la recepción del pedido, siempre que el producto esté en su empaque original, sellado y en perfectas condiciones. El cliente es responsable de los costos de envío de la devolución.
                </p>
                <p>
                  Si recibes un producto dañado o incorrecto, por favor contáctanos inmediatamente a <span className="font-bold text-[#ec268f]">dulcescrapcol@gmail.com</span> con fotos del producto y el empaque para gestionar un reemplazo o reembolso.
                </p>
              </div>
            </section>

            <section id="envios" className="scroll-mt-24">
              <h2 className="font-['Nunito'] font-bold text-[28px] text-[#ec268f] mb-4 border-b-2 border-[#df8098]/30 pb-2">
                Políticas de Envíos
              </h2>
              <div className="font-['Inter'] text-gray-700 leading-relaxed space-y-4">
                <p>
                  Realizamos envíos a toda Colombia. Los tiempos de procesamiento para productos personalizados varían entre 3 a 7 días hábiles dependiendo de la complejidad del pedido y el volumen de trabajo.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Envíos Nacionales:</strong> Se realizan a través de transportadoras certificadas (Interrapidísimo, Servientrega, Envía). El tiempo de tránsito suele ser de 2 a 5 días hábiles dependiendo del destino.</li>
                  <li><strong>Envíos Locales (Barranquilla):</strong> Ofrecemos servicio de mensajería local o recogida en nuestro taller.</li>
                </ul>
                <p>
                  Una vez despachado el pedido, recibirás un número de guía para rastrear tu paquete. Dulce Scrap no se hace responsable por retrasos ocasionados por la transportadora, pero te ayudaremos a gestionar cualquier novedad.
                </p>
              </div>
            </section>

            <section id="privacidad" className="scroll-mt-24">
              <h2 className="font-['Nunito'] font-bold text-[28px] text-[#ec268f] mb-4 border-b-2 border-[#df8098]/30 pb-2">
                Políticas de Privacidad
              </h2>
              <div className="font-['Inter'] text-gray-700 leading-relaxed space-y-4">
                <p>
                  Respetamos tu privacidad y nos comprometemos a proteger tus datos personales. La información que recopilamos (nombre, dirección, correo electrónico, teléfono) se utiliza únicamente para procesar tus pedidos, mejorar tu experiencia de compra y comunicarnos contigo sobre el estado de tus compras.
                </p>
                <p>
                  No compartimos, vendemos ni alquilamos tu información personal a terceros con fines comerciales. Tus datos de pago son procesados de forma segura a través de pasarelas de pago certificadas y no almacenamos información sensible de tarjetas de crédito.
                </p>
              </div>
            </section>

            <section id="servicio" className="scroll-mt-24">
              <h2 className="font-['Nunito'] font-bold text-[28px] text-[#ec268f] mb-4 border-b-2 border-[#df8098]/30 pb-2">
                Políticas de Servicio
              </h2>
              <div className="font-['Inter'] text-gray-700 leading-relaxed space-y-4">
                <p>
                  Nuestro horario de atención es de Lunes a Sábado de 9:00 a.m. a 6:00 p.m. Las consultas recibidas fuera de este horario serán atendidas el siguiente día hábil.
                </p>
                <p>
                  Para trabajos personalizados, se requiere un anticipo del 50% para iniciar el diseño y producción, y el saldo restante debe cancelarse antes del envío o entrega.
                </p>
                <p>
                  Nos reservamos el derecho de rechazar pedidos que contengan material ofensivo, discriminatorio o que infrinja derechos de autor de terceros.
                </p>
              </div>
            </section>

            <section id="terminos" className="scroll-mt-24">
              <h2 className="font-['Nunito'] font-bold text-[28px] text-[#ec268f] mb-4 border-b-2 border-[#df8098]/30 pb-2">
                Términos y Condiciones
              </h2>
              <div className="font-['Inter'] text-gray-700 leading-relaxed space-y-4">
                <p>
                  Al utilizar este sitio web y realizar compras en Dulce Scrap, aceptas los términos y condiciones aquí descritos.
                </p>
                <p>
                  <strong>Precios:</strong> Todos los precios están en pesos colombianos (COP). Nos reservamos el derecho de modificar los precios en cualquier momento sin previo aviso, sin embargo, se respetarán los precios de los pedidos ya confirmados.
                </p>
                <p>
                  <strong>Propiedad Intelectual:</strong> Todo el contenido de este sitio (imágenes, textos, logos, diseños) es propiedad de Dulce Scrap y está protegido por las leyes de propiedad intelectual.
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
