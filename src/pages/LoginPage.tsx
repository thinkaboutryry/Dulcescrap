// Página de Login/Registro para Usuarios y Administradores
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { loginUser, registerUser } from '../lib/firebaseAuth';
import { useAuth } from '../contexts/AuthContext';
import { toast } from 'sonner@2.0.3';
import { Lock, Mail, User as UserIcon } from 'lucide-react';

export default function LoginPage() {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, isAdmin } = useAuth();

  // Si ya está autenticado
  if (user) {
    if (isAdmin) {
      navigate('/admin');
      return null;
    } else {
      // Redirigir a la página de donde vino o al home
      const from = (location.state as any)?.from?.pathname || '/';
      navigate(from);
      return null;
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isRegister && password !== confirmPassword) {
      toast.error('Las contraseñas no coinciden');
      return;
    }

    setLoading(true);

    let result;
    if (isRegister) {
      result = await registerUser(email, password);
      if (result.success) {
        toast.success('¡Cuenta creada exitosamente!', {
          description: 'Bienvenido a Dulce Scrap'
        });
        navigate('/');
      } else {
        toast.error('Error al crear cuenta', {
          description: 'Intenta con otro correo electrónico'
        });
      }
    } else {
      result = await loginUser(email, password);
      if (result.success) {
        toast.success('¡Bienvenido!', {
          description: 'Inicio de sesión exitoso'
        });
        // Redirigir según el rol
        const from = (location.state as any)?.from?.pathname || '/';
        navigate(from);
      } else {
        toast.error('Error de autenticación', {
          description: 'Verifica tus credenciales e intenta nuevamente'
        });
      }
    }

    setLoading(false);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-[500px] w-full">
        <div className="bg-white rounded-[24px] shadow-xl p-8 sm:p-12">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-block bg-[#ec268f] rounded-full p-4 mb-4">
              <UserIcon size={32} className="text-white" />
            </div>
            <h1 className="font-['Nunito'] font-bold text-[32px] text-[#ec268f] mb-2">
              {isRegister ? 'Crear Cuenta' : 'Iniciar Sesión'}
            </h1>
            <p className="font-['Inter'] text-[16px] text-gray-600">
              {isRegister 
                ? 'Regístrate para disfrutar de todas nuestras ofertas' 
                : 'Ingresa a tu cuenta de Dulce Scrap'
              }
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block font-['Inter'] font-medium text-[16px] text-black mb-2">
                Email
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <Mail size={20} />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-[#f5f5f5] border border-[#efcbd4] rounded-[12px] font-['Inter'] text-[16px] focus:outline-none focus:border-[#ec268f] transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block font-['Inter'] font-medium text-[16px] text-black mb-2">
                Contraseña
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <Lock size={20} />
                </div>
                <input
                  type="password"
                  required
                  minLength={6}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-[#f5f5f5] border border-[#efcbd4] rounded-[12px] font-['Inter'] text-[16px] focus:outline-none focus:border-[#ec268f] transition-colors"
                  placeholder="••••••••"
                />
              </div>
              {isRegister && (
                <p className="text-[12px] text-gray-500 mt-1">
                  Mínimo 6 caracteres
                </p>
              )}
            </div>

            {isRegister && (
              <div>
                <label className="block font-['Inter'] font-medium text-[16px] text-black mb-2">
                  Confirmar Contraseña
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <Lock size={20} />
                  </div>
                  <input
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-[#f5f5f5] border border-[#efcbd4] rounded-[12px] font-['Inter'] text-[16px] focus:outline-none focus:border-[#ec268f] transition-colors"
                    placeholder="••••••••"
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#ec268f] hover:bg-[#d61f7a] disabled:bg-gray-400 text-white font-['Nunito'] font-semibold text-[18px] py-4 rounded-[30px] transition-colors"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="size-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  {isRegister ? 'Creando cuenta...' : 'Iniciando sesión...'}
                </span>
              ) : (
                isRegister ? 'Crear Cuenta' : 'Iniciar Sesión'
              )}
            </button>
          </form>

          {/* Toggle */}
          <div className="mt-6 text-center">
            <button
              onClick={() => setIsRegister(!isRegister)}
              className="font-['Inter'] text-[14px] text-[#ec268f] hover:underline"
            >
              {isRegister 
                ? '¿Ya tienes cuenta? Inicia sesión' 
                : '¿No tienes cuenta? Regístrate'
              }
            </button>
          </div>

          {/* Admin Info */}
          {!isRegister && (
            <div className="mt-8 p-4 bg-[#f0cad5] rounded-[12px]">
              <p className="font-['Inter'] text-[14px] text-gray-700 text-center">
                <strong>Administradores:</strong><br />
                Usa las credenciales configuradas en Firebase Authentication
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
