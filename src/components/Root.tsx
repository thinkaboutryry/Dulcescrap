// Componente raíz con navegación
import { Outlet } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';
import AccessibilityButton from './AccessibilityButton';
import { AuthProvider } from '../contexts/AuthContext';
import { CartProvider } from '../contexts/CartContext';

export default function Root() {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen bg-[#f5f5f5]">
          <Navbar />
          <main className="pt-[100px] lg:pt-[220px]">
            <Outlet />
          </main>
          <Footer />
          <AccessibilityButton />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}
