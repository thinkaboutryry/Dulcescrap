// Página de Toppers
import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Product } from '../lib/firebaseDb';
import { useCart } from '../contexts/CartContext';
import { ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { SectionTitle } from '../components/ui/SectionTitle';

// Import assets
import imgCapybara from "figma:asset/982dbf05379c2a10ff3e8a3e393907a78646fe64.png";
import imgPrimavera from "figma:asset/d89335d6d7a34f078e3b1c55f52d78388522a299.png";
import imgThundercats from "figma:asset/3a95f413563d9e62640de4e04e889e705502173b.png";
import imgBluey from "figma:asset/ebc2950a31f67b576db2987612fe82464c7044f8.png";
import imgHello28 from "figma:asset/b3304e87dd3e1bee1c1de9b13376c71fef927052.png";
import imgSimpsons from "figma:asset/f3f76e04c8470545bced985086cf1b59b8b9ea60.png";
import imgHappyBirthday from "figma:asset/e1a90b21d5857f2e1184389dbc678520d3d11edb.png";
import imgIniciales from "figma:asset/0e0c9947d7ed1112e92b376a2ebac6305c89ae20.png";
import imgMerlina from "figma:asset/78850263f33f9241d6b3e62e1f0f8c37f27a2d0b.png";
import imgEncanto from "figma:asset/fce1afebe574cc4548324f3d62c05fd1df6caa3a.png";
import imgBautizo from "figma:asset/e9102ddeb96253486a4257c3d8448dc9748cf8d2.png";
import imgGraduacion from "figma:asset/1eef010ea9707ac9242dbd86ae9b5048f3682da1.png";

// Data
export const TOPPERS_DATA: Product[] = [
  // Personalizados
  {
    id: 'capybara',
    name: 'Topper Personalizado Capybara',
    price: 45000,
    description: 'Divertido topper personalizado con temática de Capybara. Incluye nombre y edad del cumpleañero. Ideal para fiestas temáticas y amantes de los animales. Materiales de alta calidad y acabado impecable.',
    images: [imgCapybara],
    category: 'personalizados',
    stock: 10,
    featured: true
  },
  {
    id: 'primavera',
    name: 'Topper Personalizado Primavera',
    price: 25000,
    description: 'Topper delicado con diseño primaveral. Perfecto para celebraciones al aire libre o temáticas florales. Personalízalo con el nombre que desees. Colores vivos y duraderos.',
    images: [imgPrimavera],
    category: 'personalizados',
    stock: 15,
    featured: true
  },
  {
    id: 'thundercats',
    name: 'Topper Personalizado Thundercats',
    price: 35000,
    description: '¡Thundercats, oooooh! Topper lleno de acción para los fans de esta serie clásica. Personalizado con nombre y edad. Detalles en capas para efecto 3D.',
    images: [imgThundercats],
    category: 'personalizados',
    stock: 8,
    featured: true
  },
  {
    id: 'bluey',
    name: 'Topper Personalizado Bluey Arcoíris',
    price: 28000,
    description: 'Hermoso topper personalizado con diseño de Bluey. Incluye el nombre del cumpleañero y edad. Fabricado en cartulina de 300gr con acabado brillante. Perfecto para tortas de 15cm a 25cm de diámetro. Disponible en múltiples colores pastel.',
    images: [imgBluey],
    category: 'personalizados',
    stock: 12
  },
  {
    id: 'merlina',
    name: 'Topper Personalizado de Merlina',
    price: 35000,
    description: 'Topper personalizado de la exitosa serie de Merlina. Acabado metalizado brillante que da un toque especial a cualquier torta. Cartulina metalizada de 300gr. Tamaño: 15cm de ancho. Listo para usar, no requiere personalización.',
    images: [imgMerlina],
    category: 'personalizados',
    stock: 10
  },
  {
    id: 'simpsons',
    name: 'Topper Personalizado Los Simpsons',
    price: 30000,
    description: 'Topper personalizado de Los Simpsons. Diseño caricaturesco que combina la serie animada con la cerveza de tu preferencia.',
    images: [imgSimpsons],
    category: 'personalizados',
    stock: 10
  },
  {
    id: 'encanto',
    name: 'Topper Personalizado de Encanto',
    price: 35000,
    description: 'Topper personalizado de la exitosa película animada de Encanto. Acabado metalizado brillante que da un toque especial a cualquier torta. Cartulina metalizada de 300gr. Tamaño: 15cm de ancho. Listo para usar, no requiere personalización.',
    images: [imgEncanto],
    category: 'personalizados',
    stock: 10
  },
  // Prediseñados
  {
    id: 'hello28',
    name: 'Topper Prediseñado Hello 28',
    price: 30000,
    description: 'Topper prediseñado para dar la bienvenida a un nuevo año. Diseño elegante y romántico en cartulina premium. Incluye fecha del evento. Acabado mate o brillante según preferencia. Ideal para tortas de boda de cualquier tamaño.',
    images: [imgHello28],
    category: 'prediseñados',
    stock: 20
  },
  {
    id: 'bautizo',
    name: 'Topper Prediseñado Bautizo',
    price: 30000,
    description: 'Topper con diseño innovador de bautizo en 3D. Perfecto para celebraciones juveniles y adultos. Material resistente y duradero. Incluye palito de soporte. Fácil de colocar en cualquier torta.',
    images: [imgBautizo],
    category: 'prediseñados',
    stock: 15
  },
  {
    id: 'graduacion',
    name: 'Topper Prediseñado Graduación',
    price: 30000,
    description: 'Topper con diseño en capas perfecto para las diferentes celebraciones de grado. Personalizable con nombre y año. Disponible en dorado, plateado y colores institucionales.',
    images: [imgGraduacion],
    category: 'prediseñados',
    stock: 15
  },
  // Acrílicos
  {
    id: 'happy-birthday',
    name: 'Topper Acrilico Happy Birthday',
    price: 20000,
    description: 'Adorable topper en acrílico de feliz cumpleaños. Diseño tierno con detalles de animalitos o nubes. Cartulina de alta calidad 300gr. Disponible en rosa, azul o neutro. Perfecto para celebrar la llegada del nuevo integrante.',
    images: [imgHappyBirthday],
    category: 'acrilicos',
    stock: 25
  },
  {
    id: 'iniciales',
    name: 'Topper Acrilico Iniciales',
    price: 20000,
    description: 'Adorable topper en acrílico con las iniciales de las parejas. Diseño tierno con detalles de animalitos o nubes. Cartulina de alta calidad 300gr. Disponible en rosa, azul o neutro. Perfecto para celebrar la llegada del nuevo integrante.',
    images: [imgIniciales],
    category: 'acrilicos',
    stock: 25
  }
];

export default function ToppersPage() {
  const [filter, setFilter] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const { addToCart } = useCart();

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let products = TOPPERS_DATA;
    if (filter !== 'all') {
      products = TOPPERS_DATA.filter(p => p.category === filter);
    }
    setFilteredProducts(products);
    setCurrentPage(1); // Reset page on filter change
  }, [filter]);

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast.success('Producto agregado al carrito', {
      description: product.name
    });
  };

  // Pagination Logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-12">
      {/* Header */}
      <SectionTitle title="Toppers" highlightedWord="Toppers" />
      <div className="text-center mb-12 -mt-4">
        <p className="font-['Inter'] font-medium text-[18px] sm:text-[24px] text-black max-w-[800px] mx-auto">
          Dale el toque perfecto a tus tortas con nuestros toppers únicos y personalizados
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {[
          { value: 'all', label: 'Todos' },
          { value: 'personalizados', label: 'Personalizados' },
          { value: 'prediseñados', label: 'Prediseñados' },
          { value: 'acrilicos', label: 'Acrílicos' }
        ].map((filterOption) => (
          <button
            key={filterOption.value}
            onClick={() => setFilter(filterOption.value)}
            className={`px-6 py-3 rounded-[30px] font-['Nunito'] font-medium text-[18px] transition-colors border-[3px] ${
              filter === filterOption.value
                ? 'bg-[#ec268f] text-white border-[#ec268f]'
                : 'bg-transparent text-[#ec268f] border-[#ec268f] hover:bg-[#efcbd4]'
            }`}
          >
            {filterOption.label}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      {loading ? (
        <div className="text-center py-20">
          <div className="inline-block size-12 border-4 border-[#ec268f] border-t-transparent rounded-full animate-spin" />
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="text-center py-20">
          <p className="font-['Inter'] text-[20px] text-gray-600">
            No hay productos disponibles en este momento.
          </p>
          <p className="font-['Inter'] text-[16px] text-gray-500 mt-2">
            ¡Vuelve pronto para ver nuestras novedades!
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {paginatedProducts.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-[18px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <Link to={`/producto/${product.id}`}>
                  <div className="aspect-square bg-[#f0cad5] relative overflow-hidden">
                    {product.images && product.images[0] ? (
                      <img 
                        src={product.images[0]} 
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
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

                <div className="p-4">
                  <Link to={`/producto/${product.id}`}>
                    <h3 className="font-['Nunito'] font-bold text-[20px] text-black mb-2 hover:text-[#ec268f] transition-colors line-clamp-2 min-h-[60px]">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="font-['Inter'] text-[14px] text-gray-600 mb-3 line-clamp-2 min-h-[42px]">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-['Nunito'] font-bold text-[24px] text-[#ec268f]">
                      ${product.price.toLocaleString('es-CO')}
                    </span>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="bg-[#ec268f] hover:bg-[#d61f7a] text-white rounded-full size-[44px] flex items-center justify-center transition-colors shadow-md"
                      aria-label="Agregar al carrito"
                    >
                      <ShoppingCart size={20} className="text-white" strokeWidth={2} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-12">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="size-10 flex items-center justify-center rounded-full border-2 border-[#ec268f] text-[#ec268f] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#f0cad5] transition-colors"
                aria-label="Página anterior"
              >
                <ChevronLeft size={20} strokeWidth={2.5} />
              </button>
              
              <div className="flex gap-2">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`size-10 flex items-center justify-center rounded-full font-['Nunito'] font-bold text-[16px] transition-colors ${
                      currentPage === i + 1
                        ? 'bg-[#ec268f] text-white'
                        : 'text-[#ec268f] hover:bg-[#f0cad5]'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="size-10 flex items-center justify-center rounded-full border-2 border-[#ec268f] text-[#ec268f] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#f0cad5] transition-colors"
                aria-label="Siguiente página"
              >
                <ChevronRight size={20} strokeWidth={2.5} />
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}