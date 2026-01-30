import React from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function AboutPage() {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] md:h-[400px] bg-[#df8098] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-50">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1705356151894-b1fd39861e3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2xpY2llcyUyMGRvY3VtZW50cyUyMGFncmVlbWVudCUyMGNvbnRyYWN0JTIwbWluaW1hbGlzdCUyMHBpbmt8ZW58MXx8fHwxNzY5NjkyNTYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Políticas Dulce Scrap"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-['Nunito'] font-bold text-white text-[48px] md:text-[64px] drop-shadow-lg">
            Sobre Nosotros
          </h1>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        {/* Servicio Section */}
        <section>
          <h2 className="font-['Nunito'] font-bold text-[48px] text-[#ec268f] mb-12 text-center decoration-wavy decoration-[#df8098]">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="font-['Nunito'] font-bold text-[28px] text-[#df8098]">
                Productos de Scrapbooking
              </h3>
              <p className="font-['Inter'] text-[18px] text-gray-700 leading-relaxed">
                Ofrecemos una variedad de suministros de scrapbooking, incluyendo papeles, adornos y kits personalizados para crear recuerdos duraderos.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-['Nunito'] font-bold text-[28px] text-[#df8098]">
                Papelería Personalizada
              </h3>
              <p className="font-['Inter'] text-[18px] text-gray-700 leading-relaxed">
                Proporcionamos soluciones de papelería hechas a medida, desde invitaciones y menús hasta tarjetas de agradecimiento, todas diseñadas para complementar la temática del evento de nuestros clientes.
              </p>
            </div>
          </div>
        </section>

        {/* Mision & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Misión */}
          <div className="bg-[#fff0f5] p-8 rounded-[30px] shadow-sm hover:shadow-md transition-shadow">
            <h2 className="font-['Nunito'] font-bold text-[36px] text-[#ec268f] mb-6 text-center">
              Misión
            </h2>
            <p className="font-['Inter'] text-[18px] text-gray-700 leading-relaxed text-center">
              Enriquecer los momentos especiales de nuestros clientes a través de productos de scrapbooking y decoración que son tan únicos como sus celebraciones.
            </p>
          </div>

          {/* Visión */}
          <div className="bg-[#fff0f5] p-8 rounded-[30px] shadow-sm hover:shadow-md transition-shadow">
            <h2 className="font-['Nunito'] font-bold text-[36px] text-[#ec268f] mb-6 text-center">
              Visión
            </h2>
            <p className="font-['Inter'] text-[18px] text-gray-700 leading-relaxed text-center">
              Ser reconocidos en Barranquilla y sus alrededores como líderes en creatividad y personalización en el sector de eventos, expandiendo nuestro alcance a un mercado más amplio a través de nuestro servicio excepcional.
            </p>
          </div>
        </div>       
      </div>
    </div>
  );
}
