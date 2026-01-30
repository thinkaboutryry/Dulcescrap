// Página 404
import { Link } from 'react-router';

export default function NotFoundPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-[120px] mb-6">🔍</div>
        <h1 className="font-['Nunito'] font-bold text-[60px] sm:text-[80px] text-[#ec268f] mb-4">
          404
        </h1>
        <h2 className="font-['Nunito'] font-bold text-[32px] text-black mb-4">
          Página no encontrada
        </h2>
        <p className="font-['Inter'] text-[18px] text-gray-600 mb-8 max-w-[500px] mx-auto">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>
        <Link
          to="/"
          className="inline-block bg-[#ec268f] hover:bg-[#d61f7a] text-white font-['Nunito'] font-semibold text-[18px] px-8 py-4 rounded-[30px] transition-colors"
        >
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
}
