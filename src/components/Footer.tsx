// Pie de página
import { Instagram, Mail } from 'lucide-react';
import { Link } from 'react-router';
import svgPaths from '../imports/svg-1s3ckorkmt';
import imgS11 from 'figma:asset/a9db1ffa88623b8aba0e2eca9480d9fc9b0fc9c0.png';

export default function Footer() {
  return (
    <footer className="bg-white text-black mt-0">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Columna 1: Logo y Redes Sociales */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="size-[93px] mb-4">
              <img src={imgS11} alt="Dulce Scrap Logo" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-['Nunito'] font-bold text-[24px] text-[#ec268f] mb-4 tracking-[-0.72px]">
              ¡Siguenos!
            </h3>
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://www.instagram.com/dulcescrapcol/"
                target="_blank"
                rel="noopener noreferrer"
                className="size-[39px] hover:opacity-80 transition-opacity"
              >
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 39">
                  <path d={svgPaths.p2df29500} fill="#DD8BA0" />
                </svg>
              </a>
              <a
                href="https://api.whatsapp.com/message/5I66EZQ5O322H1?autoload=1&app_absent=0&utm_source=ig"
                target="_blank"
                rel="noopener noreferrer"
                className="size-[39px] hover:opacity-80 transition-opacity"
              >
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 39">
                  <path d={svgPaths.p2e2d5080} fill="#DD8BA0" />
                </svg>
              </a>
              <a
                href="https://tiktok.com/@dulcescrap"
                target="_blank"
                rel="noopener noreferrer"
                className="size-[38px] hover:opacity-80 transition-opacity"
              >
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
                  <path d={svgPaths.p1871ab0} stroke="#DD8BA0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </a>
              
            </div>
          </div>

          {/* Columna 2: Dulce Scrap */}
          <div className="text-center lg:text-left">
            <h3 className="font-['Nunito'] font-bold text-[24px] text-[#ec268f] mb-6 tracking-[-0.72px]">
              Dulce Scrap
            </h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="font-['Inter'] font-medium text-[16px] text-black hover:text-[#ec268f] transition-colors tracking-[-0.48px]">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/mayoristas" className="font-['Inter'] font-medium text-[16px] text-black hover:text-[#ec268f] transition-colors tracking-[-0.48px]">
                  Mayoristas
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="font-['Inter'] font-medium text-[16px] text-black hover:text-[#ec268f] transition-colors tracking-[-0.48px]">
                  Contáctanos
                </Link>
              </li>
              <li>
                <Link to="/sobre-nosotros" className="font-['Inter'] font-medium text-[16px] text-black hover:text-[#ec268f] transition-colors tracking-[-0.48px]">
                  Sobre nosotros
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Catálogo */}
          <div className="text-center lg:text-left">
            <h3 className="font-['Nunito'] font-bold text-[24px] text-[#ec268f] mb-6 tracking-[-0.72px]">
              Catálogo
            </h3>
            <ul className="space-y-4">
              <li>
                <Link to="/toppers" className="font-['Inter'] font-medium text-[16px] text-black hover:text-[#ec268f] transition-colors tracking-[-0.48px]">
                  Toppers
                </Link>
              </li>
              <li>
                <Link to="/troquelados" className="font-['Inter'] font-medium text-[16px] text-black hover:text-[#ec268f] transition-colors tracking-[-0.48px]">
                  Troquelados
                </Link>
              </li>
              <li>
                <Link to="/archivos" className="font-['Inter'] font-medium text-[16px] text-black hover:text-[#ec268f] transition-colors tracking-[-0.48px]">
                  Archivos
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 4: Políticas */}
          <div className="text-center lg:text-left">
            <h3 className="font-['Nunito'] font-bold text-[24px] text-[#ec268f] mb-6 tracking-[-0.72px]">
              Políticas
            </h3>
            <ul className="space-y-4">
              <li>
                <Link to="/politicas" className="font-['Inter'] font-medium text-[16px] text-black hover:text-[#ec268f] transition-colors tracking-[-0.48px]">
                  Políticas de devolución
                </Link>
              </li>
              <li>
                <Link to="/politicas" className="font-['Inter'] font-medium text-[16px] text-black hover:text-[#ec268f] transition-colors tracking-[-0.48px]">
                  Políticas de envíos
                </Link>
              </li>
              <li>
                <Link to="/politicas" className="font-['Inter'] font-medium text-[16px] text-black hover:text-[#ec268f] transition-colors tracking-[-0.48px]">
                  Políticas de privacidad
                </Link>
              </li>
              <li>
                <Link to="/politicas" className="font-['Inter'] font-medium text-[16px] text-black hover:text-[#ec268f] transition-colors tracking-[-0.48px]">
                  Políticas de servicio
                </Link>
              </li>
              <li>
                <Link to="/politicas" className="font-['Inter'] font-medium text-[16px] text-black hover:text-[#ec268f] transition-colors tracking-[-0.48px]">
                  Términos y condiciones
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 5: Información de Contacto */}
          <div className="text-center lg:text-left">
            <h3 className="font-['Nunito'] font-bold text-[24px] text-[#ec268f] mb-6 tracking-[-0.72px]">
              ¿Deseas más información?
            </h3>
            <div className="mb-8">
              <Link to="/contacto" className="font-['Inter'] font-medium text-[16px] text-black hover:text-[#ec268f] transition-colors tracking-[-0.48px] break-all">
                dulcescrapcol@gmail.com
              </Link>
            </div>
            
            <h3 className="font-['Nunito'] font-bold text-[24px] text-[#ec268f] mb-6 tracking-[-0.72px]">
              Horarios de atención
            </h3>
            <div>
              <p className="font-['Inter'] font-medium text-[16px] text-black tracking-[-0.48px]">
                Lunes a Viernes de 9 a.m. - 6 p.m.
                Sábados de 10 a.m.  2 p.m.
                Domingos cerrado
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#df8098] h-[57px] flex items-center justify-center w-full px-4">
        <p className="font-['Inter'] font-medium text-[14px] md:text-[20px] text-white tracking-[-0.6px] text-center">
          © Derechos reservados Dulce Scrap. Realizada por <a href="https://www.instagram.com/ryderjbarrios_/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-white/90">Ryder Barrios</a>
        </p>
      </div>
    </footer>
  );
}