import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { ShoppingCart, Search, User, Menu, X } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import imgS11 from 'figma:asset/a9db1ffa88623b8aba0e2eca9480d9fc9b0fc9c0.png';
import { Button } from './ui/button';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { itemCount } = useCart();
  const { user, isAdmin } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { path: '/', label: 'Inicio' },
    { path: '/toppers', label: 'Toppers' },
    { path: '/troquelados', label: 'Troquelados' },
    { path: '/archivos', label: 'Archivos' },
    { path: '/mayoristas', label: 'Mayoristas' },
    { path: '/contacto', label: 'Contacto' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/busqueda?q=${encodeURIComponent(searchQuery)}`);
      setMobileMenuOpen(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <nav className="bg-[#f5f5f5] fixed w-full top-0 z-50 shadow-sm h-auto lg:h-[220px]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-full relative">
        
        {/* Mobile Header Layout */}
        <div className="lg:hidden flex items-center justify-between h-[100px]">
          <Link to="/" className="flex-shrink-0">
            <img src={imgS11} alt="Dulce Scrap" className="w-[80px] h-[80px] object-contain" />
          </Link>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-[#ec268f]">
            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex h-full">
            {/* Logo Section */}
            <div className="flex-shrink-0 pt-6">
                <Link to="/">
                    <img src={imgS11} alt="Dulce Scrap" className="w-[136px] h-[136px] object-contain" />
                </Link>
            </div>

            {/* Right Content Section */}
            <div className="flex-1 flex flex-col pt-[63px] pl-12">
                {/* Top Row: Search + Actions */}
                <div className="flex items-center gap-8 mb-8">
                    {/* Search Bar */}
                    <div className="flex-1 max-w-[943px]">
                        <div className="bg-[#efcbd4] rounded-full h-[57px] flex items-center px-6 transition-all focus-within:ring-2 focus-within:ring-[#ec268f]/50">
                            <Search 
                              onClick={handleSearch}
                              className="text-[#ec268f] w-8 h-8 mr-4 cursor-pointer hover:scale-110 transition-transform" 
                            />
                            <input 
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Buscar..." 
                                className="bg-transparent w-full outline-none text-[#ec268f] placeholder-[#ec268f]/70 font-['Inter'] text-lg font-medium"
                            />
                        </div>
                    </div>

                    {/* User & Cart Icons */}
                    <div className="flex items-center gap-6 ml-auto mr-8">
                        <Link to={isAdmin ? '/admin' : '/login'} title={isAdmin ? 'Panel Admin' : 'Iniciar sesión'}>
                            <User className="text-[#ec268f] w-[42px] h-[42px] stroke-[1.5px] hover:scale-110 transition-transform" />
                        </Link>
                        
                        <Link to="/carrito" className="relative group">
                            <ShoppingCart className="text-[#ec268f] w-[42px] h-[42px] stroke-[1.5px] group-hover:scale-110 transition-transform" />
                            {itemCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-[#ec268f] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-[#f5f5f5]">
                                    {itemCount}
                                </span>
                            )}
                        </Link>
                    </div>
                </div>

                {/* Bottom Row: Navigation */}
                <div className="w-full max-w-[943px] flex items-center justify-center gap-[30px]">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`font-['Inter'] font-medium text-[16px] tracking-[-0.48px] transition-colors ${
                                isActive(link.path) || (link.path === '/contacto' && location.pathname === '/contacto')
                                    ? 'text-[#ec268f]'
                                    : 'text-black opacity-90 hover:text-[#ec268f] hover:opacity-100'
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    
                    {/* Ofertas Button */}
                    <Link to="/ofertas">
                        <div className="bg-[#ec268f] text-white px-6 py-2 rounded-full font-['Inter'] font-medium text-[16px] hover:bg-[#d01e7a] transition-colors shadow-md">
                            Ofertas
                        </div>
                    </Link>
                </div>
            </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-[100px] left-0 w-full bg-[#f5f5f5] shadow-lg p-4 flex flex-col gap-4 border-t border-gray-200">
             <div className="bg-[#efcbd4] rounded-full h-[50px] flex items-center px-4">
                <Search 
                  onClick={handleSearch}
                  className="text-[#ec268f] w-5 h-5 mr-3" 
                />
                <input 
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Buscar..." 
                    className="bg-transparent w-full outline-none text-[#ec268f] placeholder-[#ec268f]/70 font-['Inter']"
                />
             </div>
             
             {navLinks.map((link) => (
                <Link
                   key={link.path}
                   to={link.path}
                   onClick={() => setMobileMenuOpen(false)}
                   className={`block py-2 px-4 rounded-lg font-['Inter'] font-medium text-[16px] ${
                      isActive(link.path) ? 'bg-[#ec268f] text-white' : 'text-black'
                   }`}
                >
                   {link.label}
                </Link>
             ))}
             
             <Link
                to="/ofertas"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 px-4 rounded-lg font-['Inter'] font-medium text-[16px] bg-[#ec268f] text-white text-center"
             >
                Ofertas
             </Link>

             <div className="flex justify-around pt-4 border-t border-gray-200">
                <Link to={isAdmin ? '/admin' : '/login'} onClick={() => setMobileMenuOpen(false)} className="flex flex-col items-center text-[#ec268f]">
                   <User size={24} />
                   <span className="text-xs mt-1">{isAdmin ? 'Admin' : 'Login'}</span>
                </Link>
                <Link to="/carrito" onClick={() => setMobileMenuOpen(false)} className="flex flex-col items-center text-[#ec268f] relative">
                   <ShoppingCart size={24} />
                   <span className="text-xs mt-1">Carrito</span>
                   {itemCount > 0 && (
                      <span className="absolute top-0 right-2 bg-[#ec268f] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center border border-[#f5f5f5]">
                         {itemCount}
                      </span>
                   )}
                </Link>
             </div>
          </div>
        )}
      </div>
    </nav>
  );
}