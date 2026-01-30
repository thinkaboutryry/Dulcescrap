// Configuración de rutas
import { createBrowserRouter } from 'react-router';
import Root from './components/Root';
import HomePage from './pages/HomePage';
import ToppersPage from './pages/ToppersPage';
import TroqueladosPage from './pages/TroqueladosPage';
import ArchivosPage from './pages/ArchivosPage';
import MayoristasPage from './pages/MayoristasPage';
import ContactoPage from './pages/ContactoPage';
import SearchPage from './pages/SearchPage';
import OfertasPage from './pages/OfertasPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import AdminPanel from './pages/AdminPanel';
import LoginPage from './pages/LoginPage';
import ProductDetailPage from './pages/ProductDetailPage';
import NotFoundPage from './pages/NotFoundPage';
import AboutPage from './pages/AboutPage';
import PoliciesPage from './pages/PoliciesPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: 'sobre-nosotros', Component: AboutPage },
      { path: 'politicas', Component: PoliciesPage },
      { path: 'toppers', Component: ToppersPage },
      { path: 'troquelados', Component: TroqueladosPage },
      { path: 'archivos', Component: ArchivosPage },
      { path: 'mayoristas', Component: MayoristasPage },
      { path: 'contacto', Component: ContactoPage },
      { path: 'busqueda', Component: SearchPage },
      { path: 'ofertas', Component: OfertasPage },
      { path: 'carrito', Component: CartPage },
      { path: 'checkout', Component: CheckoutPage },
      { path: 'producto/:id', Component: ProductDetailPage },
      { path: 'login', Component: LoginPage },
      { path: 'admin', Component: AdminPanel },
      { path: '*', Component: NotFoundPage }
    ]
  }
]);
