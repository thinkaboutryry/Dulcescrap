// HomePage FUNCIONAL con diseño exacto de Figma
import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { CelebrationSection } from '../components/CelebrationSection';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Button } from '../components/ui/Button';
import { getMockProducts, getMockFeaturedProducts } from '../lib/mockProducts';
import { getProducts, Product } from '../lib/firebaseDb';
import { useCart } from '../contexts/CartContext';
import { toast } from 'sonner@2.0.3';
import { ChevronDown, ChevronUp, ShoppingCart, ArrowRight } from 'lucide-react';

// Importar imágenes de Figma
import svgPaths from '../imports/svg-ls6khf6lao';
import imgS11 from 'figma:asset/a9db1ffa88623b8aba0e2eca9480d9fc9b0fc9c0.png';
import imgImage1 from 'figma:asset/6374f0a779173652b01c9ee28c503a46f71d5fa3.png';
import imgImage2 from 'figma:asset/f90f3284001d1173fb05151b5fd682c0139dfd0f.png';
import imgImagenDeWhatsApp20250412ALas214452716Bf89A from 'figma:asset/ebc2950a31f67b576db2987612fe82464c7044f8.png';
import imgImagenDeWhatsApp20250412ALas214456C5Dcf5D31 from 'figma:asset/b3304e87dd3e1bee1c1de9b13376c71fef927052.png';
import imgImage from 'figma:asset/e1a90b21d5857f2e1184389dbc678520d3d11edb.png';
import imgImage3 from 'figma:asset/6b1e827e334c5291e7a4dd629da4be5d707e0214.png';
import imgImage4 from 'figma:asset/bee1f59170d06b816a94d60ba63324d0ad1f034c.png';
import imgEllipse176 from 'figma:asset/55e96cac5ba7e1c6a9c9ac136dbf3e234c5be5dd.png';
import imgImagenDeWhatsApp20250412ALas21444966919Efb from 'figma:asset/982dbf05379c2a10ff3e8a3e393907a78646fe64.png';
import imgImagenDeWhatsApp20250412ALas2144543Ef0463B from 'figma:asset/d89335d6d7a34f078e3b1c55f52d78388522a299.png';
import imgImagenDeWhatsApp20250412ALas2144503Fb2092C from 'figma:asset/3a95f413563d9e62640de4e04e889e705502173b.png';
import svgPathsFrame31 from '../imports/svg-ovpo90ni2a';
import img31 from "figma:asset/9eb1138c0eaf90b81b925cc64891d7a1b45bf45b.png";
import img41 from "figma:asset/48002899851c98c287f43dc8dec57508fea7e76b.png";
import img61 from "figma:asset/e3d16abbf683b9654e50f98bb4a2c84aa2727f9d.png";
import img71 from "figma:asset/0c17a2955dc4df0598f118aeccad036d0804cffe.png";
import svgPathsNewsletter from '../imports/svg-ropwk45vrw';
import svgPathsFrame46 from '../imports/svg-f238osurpu';
import svgPathsFrame46 from '../imports/svg-f238osurpu';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [bestSellers, setBestSellers] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const { addToCart } = useCart();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Maria Camila',
      image: imgEllipse176,
      rating: 5.0,
      comment: '"Con Dulce Scrap encontré el topper perfecto para mi pastel de cumpleaños. Atención personalizada y diseños únicos que superaron mis expectativas."'
    },
    {
      name: 'Laura',
      image: 'https://images.unsplash.com/photo-1545311630-51ea4a4c84de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFuJTIwaGFwcHl8ZW58MXx8fHwxNzY5NjA3ODIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 5.0,
      comment: '"Me encantaron los recordatorios para el bautizo de mi hijo. Todo llegó a tiempo y la calidad del papel es increíble. ¡Recomendadísimos!"'
    },
    {
      name: 'Carolina',
      image: 'https://images.unsplash.com/photo-1594318223885-20dc4b889f9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFuJTIwc21pbGluZ3xlbnwxfHx8fDE3Njk1ODA5NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 5.0,
      comment: '"La atención es maravillosa y los tiempos de entrega exactos. Pedí un kit de fiesta completo y todo combinaba perfectamente. Gracias por hacer mi evento especial."'
    },
    {
      name: 'Valentina',
      image: 'https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2OTYxMDY4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 5.0,
      comment: '"Los archivos digitales son súper fáciles de usar y editar. Compré el kit de unicornio y pude imprimir todo en casa sin problemas. ¡Gran idea!"'
    },
    {
      name: 'Sofia',
      image: 'https://images.unsplash.com/photo-1609091289242-735df7a2207a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFuJTIwY2FzdWFsfGVufDF8fHx8MTc2OTY4NzY4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 5.0,
      comment: '"Pedí unos troquelados para mi emprendimiento y quedaron hermosos. Definitivamente volveré a pedir, la calidad y el servicio son excelentes."'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const slides = [
    {
      image: imgImage1,
      title: '¡Decora tus tortas con estilo!',
      link: '/toppers'
    },
    {
      image: imgImage2,
      title: '¡Descubre todos nuestros toppers!',
      link: '/toppers'
    }
  ];

  useEffect(() => {
    loadProducts();
    
    // Auto-rotate carousel
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const loadProducts = async () => {
    setLoading(true);
    const result = await getProducts();
    if (result.success && result.products.length > 0) {
      const featured = result.products.filter(p => p.featured).slice(0, 3);
      const sellers = result.products.slice(0, 3);
      setFeaturedProducts(featured);
      setBestSellers(sellers);
    } else {
      const mockFeatured = getMockFeaturedProducts().slice(0, 3);
      const mockBestSellers = getMockProducts().slice(0, 3);
      setFeaturedProducts(mockFeatured);
      setBestSellers(mockBestSellers);
    }
    setLoading(false);
  };

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast.success('Producto agregado al carrito', {
      description: product.name
    });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('¡Suscrito exitosamente!', {
      description: 'Revisa tu correo para tu código de descuento'
    });
    setNewsletterEmail('');
  };

  const faqs = [
    {
      question: '¿Cómo puedo personalizar mi topper?',
      answer: 'Contáctanos a través de WhatsApp o el formulario de contacto con tu idea. Nuestro equipo te ayudará a crear el diseño perfecto para tu celebración.'
    },
    {
      question: '¿Cuánto tiempo tarda el envío?',
      answer: 'Los envíos nacionales tardan entre 3-5 días hábiles. Para pedidos personalizados, el tiempo de producción es de 5-7 días adicionales.'
    },
    {
      question: '¿Cómo puedo solicitar un pedido al mayoreo?',
      answer: (
        <span>
          Para conocer nuestros precios y condiciones especiales para distribuidores, visita nuestra{' '}
          <Link to="/mayoristas" className="text-[#ec268f] font-bold hover:underline">
            página de mayoristas
          </Link>
          .
        </span>
      )
    },
    {
      question: '¿Qué materiales utilizan?',
      answer: 'Utilizamos materiales de alta calidad: cartulina de 300gr, acrílico de 3mm, y acabados especiales según el diseño elegido.'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full bg-white overflow-x-hidden">
      {/* Banner Superior - Oferta */}
      <div className="bg-[#df8098] h-[57px] flex items-center justify-center">
        <p className="font-['Inter'] font-semibold text-[24px] text-center text-white tracking-[-0.72px]">
          ¡Oferta exclusiva! Envíos gratis en compras mayores a $50.000
        </p>
      </div>

      {/* Hero Carousel */}
      <section className="relative mx-[61px] mt-[68px]">
        <div className="bg-[#fedde4] rounded-[24px] overflow-hidden h-[544px] relative">
          {/* Slides */}
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="absolute inset-0">
                <img 
                  src={slide.image} 
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/70" />
              </div>

              <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
                <h1 className="font-['Nunito'] font-bold text-[48px] text-white mb-8 max-w-[726px] leading-tight tracking-[-1.44px]">
                  {slide.title}
                </h1>
                <Button 
                  to={slide.link}
                  variant="primary"
                >
                  Ver catálogo
                </Button>
              </div>
            </div>
          ))}

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-[33px] top-[241px] z-20 group transition-transform hover:scale-110"
            aria-label="Anterior"
          >
            <div className="size-[62px] relative">
              <div className="absolute inset-[18%_20%_20%_18%]">
                <svg className="block size-full" fill="none" viewBox="0 0 31 31">
                  <circle cx="15.5" cy="15.5" fill="white" r="15.5" className="group-hover:fill-[#f0f0f0] transition-colors" />
                </svg>
              </div>
              <div className="absolute inset-[8.33%]">
                <svg className="block size-full" fill="none" viewBox="0 0 41.6667 41.6667">
                  <path d={svgPaths.p1e3fe400} fill="#EC268F" className="group-hover:fill-[#d61f7a] transition-colors" />
                </svg>
              </div>
            </div>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-[33px] top-[241px] z-20 group transition-transform hover:scale-110"
            aria-label="Siguiente"
          >
            <div className="size-[62px] relative rotate-180">
              <div className="absolute inset-[18%_20%_20%_18%]">
                <svg className="block size-full" fill="none" viewBox="0 0 31 31">
                  <circle cx="15.5" cy="15.5" fill="white" r="15.5" className="group-hover:fill-[#f0f0f0] transition-colors" />
                </svg>
              </div>
              <div className="absolute inset-[8.33%]">
                <svg className="block size-full" fill="none" viewBox="0 0 41.6667 41.6667">
                  <path d={svgPaths.p1e3fe400} fill="#EC268F" className="group-hover:fill-[#d61f7a] transition-colors" />
                </svg>
              </div>
            </div>
          </button>

          {/* Dots */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`size-[10px] rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-[#ec268f] scale-110' : 'bg-[#d9d9d9] hover:bg-[#c0c0c0]'
                }`}
                aria-label={`Ir a slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ¿Por qué elegir Dulce Scrap? */}
      <section className="bg-[#df8098] rounded-[24px] my-16 py-16 px-8 relative overflow-hidden">
        <SectionTitle 
          title="¿Por qué elegir Dulce Scrap?" 
          highlightedWord="Dulce Scrap" 
          textColor="text-white"
        />
        
        <div className="text-center mb-6 -mt-4 relative z-10">
          <p className="font-['Inter'] font-medium text-[24px] text-white max-w-[1057px] mx-auto tracking-[-0.72px]">
            En Dulce Scrap creemos que cada celebración merece un toque único y especial. Nuestros toppers y troquelados no solo embellecen tus postres, sino que cuentan una historia de creatividad, dedicación y atención al detalle.
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="hidden lg:block absolute left-[15%] top-[45%] opacity-10 pointer-events-none">
          <div className="w-[94px] h-[94px] bg-white/20 rounded-full" />
        </div>
        <div className="hidden lg:block absolute right-[15%] top-[45%] opacity-10 pointer-events-none">
           <div className="w-[86px] h-[86px] bg-white/20 rounded-lg" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1200px] mx-auto relative z-10 pt-8">
          {[
            {
              icon: (
                <div className="w-[126px] h-[126px] relative">
                   <svg className="block w-full h-full" fill="none" viewBox="0 0 126 126">
                    <g id="Frame 40">
                      <rect fill="#DF8098" height="126" width="126" rx="63" />
                      <rect fill="#F6F9FC" height="117" width="117" rx="58.5" x="5" y="4" />
                      <path d={svgPathsFrame46.p285d5280} fill="#EC268F" />
                    </g>
                  </svg>
                </div>
              ),
              title: 'Diseño exclusivo',
              description: 'Cada creación es única, trabajamos en diseños personalizados que capturan la esencia en cada celebración.'
            },
            {
              icon: (
                <div className="w-[126px] h-[126px] relative">
                    <div className="absolute top-0 left-0 w-[126px] h-[126px] bg-[#df8098] rounded-full" />
                    <div className="absolute top-[4px] left-[5px] w-[117px] h-[117px] bg-[#f6f9fc] rounded-full" />
                    <div className="absolute top-[25.16px] left-[31px] w-[65.42px] h-[77.59px]">
                       <svg className="block w-full h-full" fill="none" viewBox="0 0 65.4243 77.5876">
                        <g>
                          <path d={svgPathsFrame46.pb6d31f0} fill="#EC268F" />
                          <path d={svgPathsFrame46.p2b070540} fill="#EC268F" />
                        </g>
                      </svg>
                    </div>
                </div>
              ),
              title: 'Calidad garantizada',
              description: 'Utilizamos materiales de la más alta calidad y técnicas precisas para asegurar productos duraderos e impecables.'
            },
            {
              icon: (
                <div className="w-[126px] h-[126px] relative">
                   <svg className="block w-full h-full" fill="none" viewBox="0 0 126 126">
                    <g id="Frame 41">
                      <rect fill="#DF8098" height="126" width="126" rx="63" />
                      <rect fill="#F6F9FC" height="117" width="117" rx="58.5" x="5" y="4" />
                      <path d={svgPathsFrame46.p84c77f0} fill="#EC268F" />
                    </g>
                  </svg>
                </div>
              ),
              title: 'Confianza asegurada',
              description: 'Con más de 10 años de trayectoria en el sector de la decoración para repostería y cientos de clientes satisfechos.'
            },
            {
              icon: (
                 <div className="w-[126px] h-[126px] relative flex items-center justify-center">
                    <div className="absolute w-[126px] h-[126px] bg-[#df8098] rounded-full" />
                    <div className="absolute w-[117px] h-[117px] bg-[#f6f9fc] rounded-full" />
                    <div className="relative w-[80.6px] h-[64.5px]">
                       <svg className="block w-full h-full" fill="none" viewBox="0 0 80.6251 64.5">
                        <g>
                           <path d={svgPathsFrame46.p30c6ea00} fill="#EC268F" />
                           <path d={svgPathsFrame46.p1871df0} fill="#EC268F" />
                        </g>
                      </svg>
                    </div>
                 </div>
              ),
              title: 'Envíos nacionales',
              description: 'Ofrecemos envíos rápidos y seguros en cada pedido, con el compromiso de llevar nuestra creatividad a todo el país.'
            }
          ].map((feature, index) => (
            <div key={index} className="relative flex flex-col items-center group">
              
              <div className="w-full max-w-[271px] relative pt-[63px] transition-transform duration-300 group-hover:-translate-y-2">
                 {/* Card Background */}
                 <div className="bg-[#f0cad5] rounded-[18px] h-[264px] w-full absolute bottom-0 left-0 -z-10 transition-shadow duration-300 group-hover:shadow-lg" />
                 
                 {/* Icon Wrapper - Absolute positioned to float on top */}
                 <div className="absolute left-1/2 -translate-x-1/2 top-0 z-10 transition-transform duration-300 group-hover:scale-105">
                    {feature.icon}
                 </div>

                 {/* Content Container */}
                 <div className="pt-[84px] pb-6 px-4 flex flex-col items-center h-full">
                    <div className="bg-[#ec268f] rounded-[18px] w-[215px] py-2 mb-4 flex items-center justify-center min-h-[39px] transition-colors duration-300 group-hover:bg-[#d61f7a]">
                      <h3 className="font-['Nunito'] font-semibold text-[20px] text-white text-center tracking-[-0.6px] leading-[1.2]">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="font-['Inter'] text-[15px] text-black text-center w-[215px] tracking-[-0.45px] leading-[1.5]">
                      {feature.description}
                    </p>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Para cada celebración - Featured Products */}
      <CelebrationSection />

      {/* TOPPERS Banner */}
      <section className="relative mx-[61px] my-16">
        <div className="rounded-[24px] overflow-hidden h-[544px] relative bg-[#fedde4]">
          <div className="absolute inset-0">
            <img 
              src={imgImage2} 
              alt="Toppers"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>

          <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
            
            <h3 className="font-['Nunito'] font-bold text-[48px] text-white mb-8 max-w-[726px] leading-tight tracking-[-1.44px]">
              ¡Descubre todos nuestros toppers!
            </h3>
            <Button 
              to="/toppers"
              variant="primary"
            >
              Ver catálogo
            </Button>
          </div>
        </div>
      </section>

      {/* Toppers Categories */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-[61px] my-16">
        {[
          {
            title: 'Personalizados',
            image: imgImagenDeWhatsApp20250412ALas214452716Bf89A,
            link: '/toppers'
          },
          {
            title: 'Prediseñados',
            image: imgImagenDeWhatsApp20250412ALas214456C5Dcf5D31,
            link: '/toppers'
          },
          {
            title: 'Acrílicos',
            image: imgImage,
            link: '/toppers'
          }
        ].map((category, index) => (
          <Link 
            key={index}
            to={category.link}
            className="bg-[#f0cad5] rounded-[24px] overflow-hidden h-[313px] relative group hover:scale-105 transition-all duration-300 hover:shadow-xl block"
          >
            <div className="absolute inset-0">
              <img 
                src={category.image} 
                alt={category.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 z-10">
              <div className="bg-[rgba(236,38,143,0.7)] group-hover:bg-[#ec268f] transition-colors duration-300 rounded-bl-[24px] rounded-br-[24px] w-full h-[57px] flex items-center justify-center">
                <p className="font-['Nunito'] font-bold text-[40px] text-white text-center tracking-[-2.4px] leading-[1]">
                  {category.title}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* Best Sellers */}
      <section className="py-16 px-8">
        <SectionTitle 
          title="¡Encuentra los más vendidos!" 
          highlightedWord="vendidos!" 
        />
        <div className="text-center mb-12 -mt-4">
          <p className="font-['Inter'] font-medium text-[24px] text-black max-w-[1057px] mx-auto tracking-[-0.72px]">
            Nuestros clientes han hablado ¡estos son los diseños favoritos de ellos!
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block size-12 border-4 border-[#ec268f] border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
            {bestSellers.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-[18px] overflow-hidden shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
              >
                <Link to={`/producto/${product.id}`} className="relative block">
                  <div className="aspect-square bg-[#f0cad5] relative overflow-hidden">
                    {product.images && product.images[0] ? (
                      <img 
                        src={product.images[0]} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[#ec268f]">
                        <span className="text-[48px]">📷</span>
                      </div>
                    )}
                    {product.featured && (
                      <div className="absolute top-4 right-4 bg-[#ec268f] text-white px-3 py-1 rounded-full font-['Nunito'] font-semibold text-[14px]">
                        Destacado
                      </div>
                    )}
                  </div>
                </Link>

                <div className="p-4 flex flex-col flex-1">
                  <Link to={`/producto/${product.id}`}>
                    <h3 className="font-['Nunito'] font-bold text-[20px] text-black leading-[30px] mb-2 hover:text-[#ec268f] transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="font-['Inter'] font-normal text-[14px] text-[#4a5565] leading-[21px] mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <p className="font-['Nunito'] font-bold text-[24px] text-[#ec268f]">
                      ${product.price.toLocaleString('es-CO')}
                    </p>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleAddToCart(product);
                      }}
                      className="bg-[#ec268f] hover:bg-[#d61f7a] text-white rounded-full size-[44px] flex items-center justify-center transition-transform hover:scale-105 shadow-md"
                      aria-label="Agregar al carrito"
                    >
                      <ShoppingCart size={20} className="text-white" strokeWidth={2} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Explora más creaciones */}
      <section className="bg-[#df8098] rounded-[24px] my-16 py-16 px-8">
        <SectionTitle 
          title="¡Explora más creaciones acá!" 
          highlightedWord="creaciones" 
          textColor="text-white"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1200px] mx-auto">
          {[
            {
              title: 'Troquelados',
              image: imgImage3,
              link: '/troquelados'
            },
            {
              title: 'Archivos',
              image: imgImage4,
              link: '/archivos'
            }
          ].map((item, index) => (
            <div key={index} className="relative rounded-[24px] overflow-hidden h-[320px] group hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="absolute inset-0">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-colors duration-300" />
              </div>

              <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
                <h3 className="font-['Nunito'] font-bold text-[40px] text-white mb-6 tracking-[-1.2px]">
                  {item.title}
                </h3>
                <Button 
                  to={item.link}
                  variant="primary"
                >
                  Explorar
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ellos confían en nosotros */}
      <section className="bg-white py-16">
        <SectionTitle 
          title="Ellos confían en nosotros" 
          highlightedWord="confían" 
        />
        
        <div className="bg-[#df8098] w-full h-[186px] my-12 overflow-hidden flex items-center">
          <div className="max-w-[1200px] mx-auto flex flex-wrap justify-center lg:justify-between items-center gap-8 px-8 w-full">
            {/* Dispropan */}
            <div className="relative w-[139px] h-[124px] opacity-90 hover:opacity-100 transition-opacity">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img 
                  src={img31} 
                  alt="Dispropan" 
                  className="absolute h-[238.19%] left-[-56.09%] max-w-none top-[-70.16%] w-[212.49%] brightness-0 invert" 
                />
              </div>
            </div>

            {/* Dulcerna */}
            <div className="relative w-[280px] h-[80px] opacity-90 hover:opacity-100 transition-opacity">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img 
                  src={img41} 
                  alt="Dulcerna" 
                  className="absolute h-[527.5%] left-[-28%] max-w-none top-[-207.5%] w-[150.71%] brightness-0 invert" 
                />
              </div>
            </div>

            {/* Chocolamu (SVG) */}
            <div className="relative w-[193px] h-[71px] opacity-90 hover:opacity-100 transition-opacity">
              <svg className="block size-full" fill="none" viewBox="0 0 192.732 70.8573">
                <g id="Group 1">
                  <path d={svgPathsFrame31.p17a92280} fill="#DF8098" />
                  <path d={svgPathsFrame31.pefc1000} fill="#DF8098" />
                  <path d={svgPathsFrame31.p311eb000} fill="white" />
                  <path d={svgPathsFrame31.p2a6fab00} fill="white" />
                  <path d={svgPathsFrame31.p2b8f7500} fill="white" />
                  <path d={svgPathsFrame31.p25474880} fill="white" />
                  <path d={svgPathsFrame31.pafa6a00} fill="white" />
                  <path d={svgPathsFrame31.pb02a900} fill="white" />
                  <path d={svgPathsFrame31.p1926c180} fill="white" />
                  <path d={svgPathsFrame31.p1f518b00} fill="white" />
                  <path d={svgPathsFrame31.p150670c0} fill="white" />
                  <path d={svgPathsFrame31.p332ed400} fill="white" />
                  <path d={svgPathsFrame31.p39893e00} fill="#DF8098" />
                  <path d={svgPathsFrame31.pbdc6600} fill="#DF8098" />
                  <path d={svgPathsFrame31.p17b5ce40} fill="#DF8098" />
                  <path d={svgPathsFrame31.p2f2b1300} fill="#DF8098" />
                  <path d={svgPathsFrame31.p154fda00} fill="#DF8098" />
                </g>
              </svg>
            </div>

            {/* Blue Bakery */}
            <div className="relative w-[123px] h-[126px] opacity-90 hover:opacity-100 transition-opacity">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img 
                  src={img71} 
                  alt="Blue Bakery" 
                  className="absolute h-[178.57%] left-[-42.28%] max-w-none top-[-38.49%] w-[182.93%] brightness-0 invert" 
                />
              </div>
            </div>

            {/* Dul-Zero */}
            <div className="relative w-[187px] h-[74px] opacity-90 hover:opacity-100 transition-opacity">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img 
                  src={img61} 
                  alt="Dul-Zero" 
                  className="absolute h-[371.62%] left-[-23.53%] max-w-none top-[-131.08%] w-[147.06%] brightness-0 invert" 
                />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button 
            to="/contacto" 
            variant="secondary" 
            className="rounded-full px-12 group"
          >
            ¡Cotiza hoy! <ArrowRight className="ml-2 bg-[#ec268f] text-white rounded-full p-1 size-6 group-hover:bg-white group-hover:text-[#ec268f] transition-colors" />
          </Button>
        </div>
      </section>

      {/* Testimonios */}
      <section className="bg-[#df8098] rounded-[24px] my-16 py-16 px-8 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-[253px] left-[60%] bg-[#dd8ba0] rounded-full size-[126px] hidden lg:block" />
        <div className="absolute top-[253px] left-[80%] bg-[#dd8ba0] rounded-full size-[126px] hidden lg:block" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 max-w-[1200px] mx-auto">
          {/* Left Side */}
          <div className="text-center lg:text-left">
            <h2 className="font-['Nunito'] font-bold text-[48px] text-white leading-[1.2] mb-2 tracking-[-1.44px]">
              ¡Esto opinan de nosotros!
            </h2>
            <div className="relative inline-block">
              <h2 className="font-['Nunito'] font-bold text-[48px] text-white leading-[1.2] tracking-[-1.44px] relative z-10">
                +200 Clientes satisfechos
              </h2>
              <div className="absolute bottom-2 left-0 right-0 h-[8px] bg-[#ec268f] rounded-full -z-0" />
            </div>
          </div>

          {/* Right Side - Review Card */}
          <div className="flex flex-col items-center">
            <div className="bg-[#fedde4] rounded-[24px] p-8 md:p-12 w-full max-w-[600px] shadow-lg relative min-h-[300px] flex flex-col justify-center transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between mb-6 gap-4">
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonials[currentTestimonial].image} 
                    alt={testimonials[currentTestimonial].name}
                    className="size-[85px] rounded-full object-cover border-4 border-white shadow-sm"
                  />
                  <div className="text-left">
                    <h4 className="font-['Nunito'] font-medium text-[24px] text-black">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <div className="flex gap-1 mt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="size-5" viewBox="0 0 19 18" fill="none">
                          <path d="M8.38585 0.690984C8.68521 -0.230327 9.98862 -0.230328 10.288 0.690982L11.8066 5.36474C11.9404 5.77677 12.3244 6.05573 12.7576 6.05573H17.6719C18.6406 6.05573 19.0434 7.29534 18.2597 7.86474L14.284 10.7533C13.9335 11.0079 13.7868 11.4593 13.9207 11.8713L15.4393 16.5451C15.7386 17.4664 14.6841 18.2325 13.9004 17.6631L9.9247 14.7746C9.57421 14.5199 9.09961 14.5199 8.74913 14.7746L4.77339 17.6631C3.98967 18.2325 2.93519 17.4664 3.23454 16.5451L4.75314 11.8713C4.88702 11.4593 4.74036 11.0079 4.38987 10.7533L0.414132 7.86475C-0.369582 7.29534 0.0331933 6.05573 1.00192 6.05573H5.9162C6.34943 6.05573 6.73338 5.77677 6.86726 5.36474L8.38585 0.690984Z" fill="#E9B328" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <span className="font-['Nunito'] font-medium text-[16px] text-black bg-white/50 px-3 py-1 rounded-full">{testimonials[currentTestimonial].rating.toFixed(1)}</span>
              </div>
              <p className="font-['Inter'] text-[16px] text-black leading-[30px] text-center sm:text-left animate-in fade-in zoom-in duration-300 key={currentTestimonial}">
                {testimonials[currentTestimonial].comment}
              </p>
            </div>

            <div className="flex gap-4 mt-8">
              <button 
                onClick={prevTestimonial}
                className="group transition-transform hover:scale-110"
                aria-label="Testimonio anterior"
              >
                <div className="size-[62px] relative">
                  <div className="absolute inset-[18%_20%_20%_18%]">
                    <svg className="block size-full" fill="none" viewBox="0 0 31 31">
                      <circle cx="15.5" cy="15.5" fill="white" r="15.5" className="group-hover:fill-[#f0f0f0] transition-colors" />
                    </svg>
                  </div>
                  <div className="absolute inset-[8.33%]">
                    <svg className="block size-full" fill="none" viewBox="0 0 41.6667 41.6667">
                      <path d={svgPaths.p1e3fe400} fill="#EC268F" className="group-hover:fill-[#d61f7a] transition-colors" />
                    </svg>
                  </div>
                </div>
              </button>
              
              <button 
                onClick={nextTestimonial}
                className="group transition-transform hover:scale-110"
                aria-label="Siguiente testimonio"
              >
                <div className="size-[62px] relative rotate-180">
                  <div className="absolute inset-[18%_20%_20%_18%]">
                    <svg className="block size-full" fill="none" viewBox="0 0 31 31">
                      <circle cx="15.5" cy="15.5" fill="white" r="15.5" className="group-hover:fill-[#f0f0f0] transition-colors" />
                    </svg>
                  </div>
                  <div className="absolute inset-[8.33%]">
                    <svg className="block size-full" fill="none" viewBox="0 0 41.6667 41.6667">
                      <path d={svgPaths.p1e3fe400} fill="#EC268F" className="group-hover:fill-[#d61f7a] transition-colors" />
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mayoristas */}
      <section className="relative w-full max-w-[1437px] mx-auto min-h-[600px] lg:h-[719px] bg-white rounded-[24px] my-16 overflow-hidden">
        {/* Decoración Flotante - Replicando Figma Frame34 */}
        
        {/* Top Right - Pink Darker */}
        <div className="absolute bg-[#f0cad5] inset-[0_7.01%_73.52%_75.97%] rounded-[24px]" />
        
        {/* Top Left - Pink Lighter */}
        <div className="absolute bg-[#fedde4] inset-[0.83%_71.11%_79.86%_0] rounded-[24px]" />
        
        {/* Bottom Left - Pink Darker */}
        <div className="absolute bg-[#f0cad5] inset-[71.31%_82.92%_0.14%_0] rounded-[24px]" />
        
        {/* Bottom Left - Pink Lighter (Smaller) */}
        <div className="absolute bg-[#fedde4] inset-[80.28%_65.97%_0_10%] rounded-[24px]" />
        
        {/* Bottom Center-Right - Pink Darker */}
        <div className="absolute bg-[#f0cad5] inset-[82.62%_11.25%_0_70.9%] rounded-[24px]" />
        
        {/* Bottom Right - Pink Lighter */}
        <div className="absolute bg-[#fedde4] inset-[72.14%_0_12.69%_93.19%] rounded-[24px]" />

        {/* Contenido Central */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
          <SectionTitle 
            title="¿Quieres ser mayorista?" 
            highlightedWord="mayorista?" 
            className="mb-8"
          />
          
          <div className="font-['Inter'] font-medium text-[20px] md:text-[24px] text-black max-w-[1057px] mx-auto mb-12 leading-[1.5] tracking-[-0.72px]">
            <p>En Dulce Scrap ofrecemos ventas al por mayor para distribuidores y emprendedores,</p>
            <p>¡Benefíciate de descuentos y atención exclusiva para compras grandes!</p>
          </div>
          
          <Button 
            to="/mayoristas"
            variant="secondary"
            className="border-[3px] px-12"
          >
            Contáctanos
          </Button>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-8 bg-white">
        <SectionTitle 
          title="Preguntas frecuentes" 
          highlightedWord="frecuentes" 
        />

        <div className="max-w-[800px] mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[#f0cad5] rounded-[18px] overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-[#efcbd4] transition-colors"
              >
                <h3 className="font-['Nunito'] font-semibold text-[20px] text-black pr-4">
                  {faq.question}
                </h3>
                {openFaq === index ? (
                  <ChevronUp size={24} className="text-[#ec268f] flex-shrink-0 transition-transform" />
                ) : (
                  <ChevronDown size={24} className="text-[#ec268f] flex-shrink-0 transition-transform" />
                )}
              </button>
              {openFaq === index && (
                <div className="px-6 pb-6 animate-in slide-in-from-top duration-300">
                  <p className="font-['Inter'] text-[16px] text-black leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative w-full mt-24">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-70px] left-0 w-full h-[72px] overflow-hidden">
            <svg className="block w-full h-full min-w-[1000px] -scale-y-100" fill="none" preserveAspectRatio="none" viewBox="0 0 1438 71.7739">
              <g>
                <path d={svgPathsNewsletter.p11ee8840} fill="#DF8098" />
                <path d={svgPathsNewsletter.p352f3200} fill="#DF8098" />
                <path d={svgPathsNewsletter.p3dcb4340} fill="#DF8098" />
                <path d={svgPathsNewsletter.p3f109600} fill="#DF8098" />
                <path d={svgPathsNewsletter.p2fe8180} fill="#DF8098" />
                <path d={svgPathsNewsletter.p1ec67d30} fill="#DF8098" />
                <path d={svgPathsNewsletter.p2b6b5d00} fill="#DF8098" />
                <path d={svgPathsNewsletter.p37caa810} fill="#DF8098" />
                <path d={svgPathsNewsletter.p6d06740} fill="#DF8098" />
                <path d={svgPathsNewsletter.p3dd4c9b0} fill="#DF8098" />
              </g>
            </svg>
          </div>
          <div className="absolute inset-0 bg-[#df8098]" />
        </div>

        <div className="relative z-10 py-16 px-8 max-w-[1000px] mx-auto text-center">
          <h2 className="font-['Nunito'] font-bold text-[32px] md:text-[40px] text-white mb-4 leading-tight">
            ¡Suscríbete a nuestro newsletter y obtén un 25% de descuento en tu primera compra!
          </h2>
          <p className="font-['Inter'] text-[18px] text-white mb-8 opacity-90">
            Recibe ofertas exclusivas, nuevos diseños y tips para decorar tus celebraciones
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-[600px] mx-auto">
            <input
              type="email"
              required
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="tu@email.com"
              className="flex-1 px-6 py-4 rounded-[30px] border-2 border-white bg-white/90 font-['Inter'] text-[16px] focus:outline-none focus:ring-2 focus:ring-white transition-all hover:bg-white text-[#ec268f] placeholder:text-[#ec268f]/60"
            />
            <button 
              type="submit"
              className="bg-white hover:bg-gray-100 text-[#ec268f] font-['Nunito'] font-bold text-[18px] px-8 py-4 rounded-[30px] transition-all hover:scale-105 shadow-lg whitespace-nowrap"
            >
              Suscribirme
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
