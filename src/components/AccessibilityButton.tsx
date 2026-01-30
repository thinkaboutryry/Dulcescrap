// Botón de accesibilidad
import { useState } from 'react';
import svgPaths from '../imports/svg-1s3ckorkmt';

export default function AccessibilityButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);

  const increaseFontSize = () => {
    const newSize = Math.min(fontSize + 10, 150);
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}%`;
  };

  const decreaseFontSize = () => {
    const newSize = Math.max(fontSize - 10, 80);
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}%`;
  };

  const resetFontSize = () => {
    setFontSize(100);
    document.documentElement.style.fontSize = '100%';
  };

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
    if (!highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  };

  return (
    <>
      {/* Botón Principal */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-0 top-[144px] bg-[#ec268f] hover:bg-[#d61f7a] transition-colors rounded-bl-[8px] rounded-tl-[8px] size-[51px] flex items-center justify-center z-50 shadow-lg"
        aria-label="Abrir opciones de accesibilidad"
      >
        <div className="size-[38px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
            <path d={svgPaths.p7fb9bc0} fill="white" />
          </svg>
        </div>
      </button>

      {/* Panel de Opciones */}
      {isOpen && (
        <div className="fixed right-0 top-[200px] bg-white rounded-l-[12px] shadow-2xl p-6 z-50 w-[280px] border-2 border-[#ec268f]">
          <h3 className="font-['Nunito'] font-bold text-[18px] text-[#ec268f] mb-4">
            Opciones de Accesibilidad
          </h3>

          {/* Tamaño de Fuente */}
          <div className="mb-6">
            <p className="font-['Inter'] font-medium text-[14px] mb-2">Tamaño de Fuente</p>
            <div className="flex gap-2">
              <button
                onClick={decreaseFontSize}
                className="flex-1 bg-[#f0cad5] hover:bg-[#efcbd4] text-[#ec268f] font-bold py-2 px-3 rounded-lg transition-colors"
              >
                A-
              </button>
              <button
                onClick={resetFontSize}
                className="flex-1 bg-[#f0cad5] hover:bg-[#efcbd4] text-[#ec268f] font-bold py-2 px-3 rounded-lg transition-colors"
              >
                100%
              </button>
              <button
                onClick={increaseFontSize}
                className="flex-1 bg-[#f0cad5] hover:bg-[#efcbd4] text-[#ec268f] font-bold py-2 px-3 rounded-lg transition-colors"
              >
                A+
              </button>
            </div>
          </div>

          {/* Alto Contraste */}
          <div className="mb-4">
            <button
              onClick={toggleHighContrast}
              className={`w-full py-3 px-4 rounded-lg font-['Inter'] font-medium transition-colors ${
                highContrast
                  ? 'bg-[#ec268f] text-white'
                  : 'bg-[#f0cad5] text-[#ec268f] hover:bg-[#efcbd4]'
              }`}
            >
              {highContrast ? 'Desactivar' : 'Activar'} Alto Contraste
            </button>
          </div>

          {/* Cerrar */}
          <button
            onClick={() => setIsOpen(false)}
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Cerrar
          </button>
        </div>
      )}
    </>
  );
}
