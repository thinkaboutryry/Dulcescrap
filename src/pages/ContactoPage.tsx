// Página de Contacto
import { useState } from 'react';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Button } from '../components/ui/Button';
import svgPathsFooter from '../imports/svg-1s3ckorkmt';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Aquí se integraría con Firebase para guardar el mensaje
    toast.success('Mensaje enviado', {
      description: 'Nos pondremos en contacto contigo pronto'
    });
    
    setFormData({
      nombre: '',
      empresa: '',
      email: '',
      telefono: '',
      asunto: '',
      mensaje: ''
    });
  };

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-12">
      {/* Header */}
      <SectionTitle title="Contacto" highlightedWord="Contacto" />
      <div className="text-center mb-12 -mt-4">
        <p className="font-['Inter'] font-medium text-[18px] sm:text-[24px] text-black max-w-[800px] mx-auto">
          ¿Tienes alguna pregunta? Estamos aquí para ayudarte
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white rounded-[24px] shadow-lg p-8">
          <h2 className="font-['Nunito'] font-bold text-[28px] text-[#ec268f] mb-6">
            Envíanos un mensaje
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block font-['Inter'] font-medium text-[16px] text-black mb-2">
                Nombre Completo *
              </label>
              <input
                type="text"
                required
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                className="w-full px-4 py-3 bg-[#f5f5f5] border border-[#efcbd4] rounded-[12px] font-['Inter'] text-[16px] focus:outline-none focus:border-[#ec268f] transition-colors"
                placeholder="Tu nombre"
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
                Teléfono
              </label>
              <input
                type="tel"
                value={formData.telefono}
                onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                className="w-full px-4 py-3 bg-[#f5f5f5] border border-[#efcbd4] rounded-[12px] font-['Inter'] text-[16px] focus:outline-none focus:border-[#ec268f] transition-colors"
                placeholder="+57 300 123 4567"
              />
            </div>

            <div>
              <label className="block font-['Inter'] font-medium text-[16px] text-black mb-2">
                Asunto *
              </label>
              <input
                type="text"
                required
                value={formData.asunto}
                onChange={(e) => setFormData({ ...formData, asunto: e.target.value })}
                className="w-full px-4 py-3 bg-[#f5f5f5] border border-[#efcbd4] rounded-[12px] font-['Inter'] text-[16px] focus:outline-none focus:border-[#ec268f] transition-colors"
                placeholder="¿En qué podemos ayudarte?"
              />
            </div>

            <div>
              <label className="block font-['Inter'] font-medium text-[16px] text-black mb-2">
                Mensaje *
              </label>
              <textarea
                required
                value={formData.mensaje}
                onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 bg-[#f5f5f5] border border-[#efcbd4] rounded-[12px] font-['Inter'] text-[16px] focus:outline-none focus:border-[#ec268f] transition-colors resize-none"
                placeholder="Escribe tu mensaje aquí..."
              />
            </div>

            <Button type="submit" variant="primary" className="w-full">
              Enviar Mensaje
            </Button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <div className="bg-[#f0cad5] rounded-[24px] p-8">
            <h2 className="font-['Nunito'] font-bold text-[28px] text-[#ec268f] mb-8">
              Información de Contacto
            </h2>

            <div className="space-y-6">
              <a 
                href="mailto:dulcescrapcol@gmail.com"
                className="flex items-start gap-4 hover:opacity-80 transition-opacity"
              >
                <div className="bg-[#ec268f] rounded-full p-3 flex-shrink-0">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-['Nunito'] font-bold text-[18px] text-black mb-1">
                    Email
                  </h3>
                  <p className="font-['Inter'] text-[16px] text-gray-700">
                    dulcescrapcol@gmail.com
                  </p>
                </div>
              </a>

              <a 
                href="https://api.whatsapp.com/message/5I66EZQ5O322H1?autoload=1&app_absent=0&utm_source=ig"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 hover:opacity-80 transition-opacity"
              >
                <div className="bg-[#ec268f] rounded-full p-3 flex-shrink-0">
                  <svg className="size-[24px]" fill="none" viewBox="0 0 39 39">
                    <path d={svgPathsFooter.p2e2d5080} fill="white" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-['Nunito'] font-bold text-[18px] text-black mb-1">
                    WhatsApp
                  </h3>
                  <p className="font-['Inter'] text-[16px] text-gray-700">
                    Chatea con nosotros
                  </p>
                </div>
              </a>

              <a 
                href="https://www.instagram.com/dulcescrapcol/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 hover:opacity-80 transition-opacity"
              >
                <div className="bg-[#ec268f] rounded-full p-3 flex-shrink-0">
                  <Instagram size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-['Nunito'] font-bold text-[18px] text-black mb-1">
                    Instagram
                  </h3>
                  <p className="font-['Inter'] text-[16px] text-gray-700">
                    @dulcescrapcol
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="bg-[#ec268f] rounded-full p-3 flex-shrink-0">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-['Nunito'] font-bold text-[18px] text-black mb-1">
                    Ubicación
                  </h3>
                  <p className="font-['Inter'] text-[16px] text-gray-700">
                    Barranquilla, Colombia
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="bg-[#df8098] rounded-[24px] p-8 text-white">
            <h3 className="font-['Nunito'] font-bold text-[24px] mb-6">
              Horario de Atención
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between font-['Inter'] text-[16px]">
                <span>Lunes - Viernes:</span>
                <span className="font-semibold">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between font-['Inter'] text-[16px]">
                <span>Sábados:</span>
                <span className="font-semibold">10:00 AM - 2:00 PM</span>
              </div>
              <div className="flex justify-between font-['Inter'] text-[16px]">
                <span>Domingos:</span>
                <span className="font-semibold">Cerrado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
