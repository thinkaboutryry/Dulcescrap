// Página de Mayoristas
import { useState } from 'react';
import { Mail, Instagram } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Button } from '../components/ui/Button';
import svgPathsFrame52 from '../imports/svg-kn694660yv';
import svgPathsFooter from '../imports/svg-1s3ckorkmt';

export default function MayoristasPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Aquí se integraría con Firebase para guardar la solicitud
    toast.success('Solicitud enviada', {
      description: 'Nos pondremos en contacto contigo pronto'
    });
    
    setFormData({
      nombre: '',
      empresa: '',
      email: '',
      telefono: '',
      mensaje: ''
    });
  };

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-12">
      {/* Header */}
      <SectionTitle title="¿Quieres ser mayorista?" highlightedWord="mayorista?" />
      <div className="text-center mb-16 -mt-4">
        <p className="font-['Inter'] font-medium text-[18px] sm:text-[24px] text-black max-w-[1057px] mx-auto leading-relaxed">
          En Dulce Scrap ofrecemos ventas al por mayor para distribuidores y emprendedores,<br />
          ¡Benefíciate de descuentos y atención exclusiva para compras grandes!
        </p>
      </div>

      {/* Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 gap-y-16 mb-24 mt-12">
        {[
          {
            title: 'Descuentos especiales',
            description: 'Hasta 40% de descuento en compras al por mayor.',
            icon: (
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 71.8366 71.8345">
                <g>
                  <path d={svgPathsFrame52.p2e023f00} stroke="#EC268F" strokeWidth="7.18263" />
                  <path d={svgPathsFrame52.p26e72a00} stroke="#EC268F" strokeLinejoin="round" strokeWidth="10.7739" />
                  <path d={svgPathsFrame52.p1f033ddc} stroke="#EC268F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7.18263" />
                </g>
              </svg>
            ),
            iconSize: "w-[65px] h-[65px]"
          },
          {
            title: 'Atención personalizada',
            description: 'Un asesor dedicado para tus pedidos.',
            icon: (
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67.6596 60.8937">
                <g>
                  <path d={svgPathsFrame52.pe6761a0} stroke="#EC268F" strokeLinecap="round" strokeWidth="6.76596" />
                  <path d={svgPathsFrame52.p385f0180} stroke="#EC268F" strokeLinecap="round" strokeWidth="6.76596" />
                </g>
              </svg>
            ),
            iconSize: "w-[60px] h-[54px]"
          },
          {
            title: 'Envíos prioritarios',
            description: 'Despachos rápidos y seguimiento preferencial.',
            icon: (
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80.6251 64.5">
                <g>
                  <path d={svgPathsFrame52.p30c6ea00} fill="#EC268F" />
                  <path d={svgPathsFrame52.p1871df0} fill="#EC268F" />
                </g>
              </svg>
            ),
            iconSize: "w-[80px] h-[64px]"
          }
        ].map((benefit, index) => (
          <div key={index} className="bg-[#f0cad5] rounded-[18px] pb-8 pt-[90px] px-4 text-center relative mt-16">
            {/* Floating Icon Circle */}
            <div className="absolute -top-[63px] left-1/2 -translate-x-1/2 size-[126px]">
               <div className="absolute inset-0 bg-[#df8098] rounded-full" />
               <div className="absolute top-[4px] left-[5px] bg-[#f6f9fc] rounded-full size-[117px] flex items-center justify-center overflow-hidden">
                  <div className={benefit.iconSize}>
                    {benefit.icon}
                  </div>
               </div>
            </div>
            
            <div className="inline-block bg-[#ec268f] rounded-[18px] px-8 py-2 mb-6">
              <h3 className="font-['Nunito'] font-bold text-[20px] text-white leading-tight">
                {benefit.title}
              </h3>
            </div>
            <p className="font-['Inter'] text-[15px] text-black px-4">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>

      {/* Contact Section Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
        
        {/* Contact Form (Left - 2 Cols) */}
        <div className="lg:col-span-2 bg-white rounded-[24px] shadow-lg p-8 sm:p-12 h-fit">
          <h2 className="font-['Nunito'] font-bold text-[32px] text-[#ec268f] mb-8 text-center">
            Solicita Información
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                  Empresa
                </label>
                <input
                  type="text"
                  value={formData.empresa}
                  onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                  className="w-full px-4 py-3 bg-[#f5f5f5] border border-[#efcbd4] rounded-[12px] font-['Inter'] text-[16px] focus:outline-none focus:border-[#ec268f] transition-colors"
                  placeholder="Nombre de tu empresa"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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

            <div>
              <label className="block font-['Inter'] font-medium text-[16px] text-black mb-2">
                Mensaje
              </label>
              <textarea
                value={formData.mensaje}
                onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 bg-[#f5f5f5] border border-[#efcbd4] rounded-[12px] font-['Inter'] text-[16px] focus:outline-none focus:border-[#ec268f] transition-colors resize-none"
                placeholder="Cuéntanos sobre tu negocio y necesidades..."
              />
            </div>

            <Button type="submit" variant="primary" className="w-full">
              Enviar Solicitud
            </Button>
          </form>
        </div>

        {/* Contact Options (Right - 1 Col) */}
        <div className="flex flex-col gap-6 lg:col-span-1">
          <a
            href="mailto:mayoristas@dulcescrap.com"
            className="bg-[#df8098] hover:bg-[#d61f7a] text-white rounded-[18px] p-6 flex flex-col items-center text-center transition-colors flex-1 justify-center"
          >
            <Mail size={48} className="mb-3" />
            <h3 className="font-['Nunito'] font-bold text-[20px] mb-2">Email</h3>
            <p className="font-['Inter'] text-[14px]">dulcescrapcol@gmail.com</p>
          </a>

          <a
            href="https://instagram.com/dulcescrapcol"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#df8098] hover:bg-[#d61f7a] text-white rounded-[18px] p-6 flex flex-col items-center text-center transition-colors flex-1 justify-center"
          >
            <Instagram size={48} className="mb-3" />
            <h3 className="font-['Nunito'] font-bold text-[20px] mb-2">Instagram</h3>
            <p className="font-['Inter'] text-[14px]">@dulcescrapcol</p>
          </a>

          <a
            href="https://wa.me/573506678104"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#df8098] hover:bg-[#d61f7a] text-white rounded-[18px] p-6 flex flex-col items-center text-center transition-colors flex-1 justify-center"
          >
            <svg className="block size-[48px] mb-3" fill="none" preserveAspectRatio="none" viewBox="0 0 39 39">
              <path d={svgPathsFooter.p2e2d5080} fill="white" />
            </svg>
            <h3 className="font-['Nunito'] font-bold text-[20px] mb-2">WhatsApp</h3>
            <p className="font-['Inter'] text-[14px]">Chatea con nosotros</p>
          </a>
        </div>
      </div>
    </div>
  );
}
