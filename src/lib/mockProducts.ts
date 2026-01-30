// Productos de ejemplo con imágenes reales
import { Product } from './firebaseDb';

// Images (Consolidated)
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

// Updated Images per instructions
import imgBautizo from "figma:asset/e9102ddeb96253486a4257c3d8448dc9748cf8d2.png"; // Updated
import imgGraduacion from "figma:asset/1eef010ea9707ac9242dbd86ae9b5048f3682da1.png"; // Updated

// New Images for Troquelados & Archivos
import imgFloresCarnaval from "figma:asset/41930e1a10e0b756738dfaf3253185856538502a.png";
import imgFloresElegantes from "figma:asset/b957c4ed90dbf9e5d552bdb5cab16552e0d12e7b.png";
import imgMariposas from "figma:asset/e734f4154e16c2de33f1966b8e5ddac75c60a21f.png";
import imgArchivoArtes from "figma:asset/3f3fbfde15a24ea8856df242c9b5a363b0869ee7.png";
import imgArchivoHotwheels from "figma:asset/19ed5134d088bf4abf9f848345d8d96e582a4592.png";
import imgArchivoGrado from "figma:asset/81807ee03e79098a3ca7e85894fc70a7786b31af.png";

export const mockProducts: Product[] = [
  // --- TOPPERS (12) ---
  {
    id: 'capybara',
    name: 'Topper Personalizado Capybara',
    price: 45000,
    originalPrice: 55000,
    description: 'Divertido topper personalizado con temática de Capybara. Incluye nombre y edad del cumpleañero. Ideal para fiestas temáticas y amantes de los animales. Materiales de alta calidad y acabado impecable.',
    images: [imgCapybara],
    category: 'toppers',
    subcategory: 'personalizados',
    stock: 10,
    featured: true,
    onSale: true, // 1
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'primavera',
    name: 'Topper Personalizado Primavera',
    price: 25000,
    description: 'Topper delicado con diseño primaveral. Perfecto para celebraciones al aire libre o temáticas florales. Personalízalo con el nombre que desees. Colores vivos y duraderos.',
    images: [imgPrimavera],
    category: 'toppers',
    subcategory: 'personalizados',
    stock: 15,
    featured: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'thundercats',
    name: 'Topper Personalizado Thundercats',
    price: 35000,
    originalPrice: 42000,
    description: '¡Thundercats, oooooh! Topper lleno de acción para los fans de esta serie clásica. Personalizado con nombre y edad. Detalles en capas para efecto 3D.',
    images: [imgThundercats],
    category: 'toppers',
    subcategory: 'personalizados',
    stock: 8,
    featured: true,
    onSale: true, // 2
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'bluey',
    name: 'Topper Personalizado Bluey Arcoíris',
    price: 28000,
    description: 'Hermoso topper personalizado con diseño de Bluey. Incluye el nombre del cumpleañero y edad. Fabricado en cartulina de 300gr con acabado brillante. Perfecto para tortas de 15cm a 25cm de diámetro. Disponible en múltiples colores pastel.',
    images: [imgBluey],
    category: 'toppers',
    subcategory: 'personalizados',
    stock: 12,
    featured: false,
    onSale: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'merlina',
    name: 'Topper Personalizado de Merlina',
    price: 35000,
    description: 'Topper personalizado de la exitosa serie de Merlina. Acabado metalizado brillante que da un toque especial a cualquier torta. Cartulina metalizada de 300gr. Tamaño: 15cm de ancho. Listo para usar, no requiere personalización.',
    images: [imgMerlina],
    category: 'toppers',
    subcategory: 'personalizados',
    stock: 10,
    featured: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'simpsons',
    name: 'Topper Personalizado Los Simpsons',
    price: 30000,
    description: 'Topper personalizado de Los Simpsons. Diseño caricaturesco que combina la serie animada con la cerveza de tu preferencia.',
    images: [imgSimpsons],
    category: 'toppers',
    subcategory: 'personalizados',
    stock: 10,
    featured: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'encanto',
    name: 'Topper Personalizado de Encanto',
    price: 35000,
    description: 'Topper personalizado de la exitosa película animada de Encanto. Acabado metalizado brillante que da un toque especial a cualquier torta. Cartulina metalizada de 300gr. Tamaño: 15cm de ancho. Listo para usar, no requiere personalización.',
    images: [imgEncanto],
    category: 'toppers',
    subcategory: 'personalizados',
    stock: 10,
    featured: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'hello28',
    name: 'Topper Prediseñado Hello 28',
    price: 30000,
    description: 'Topper prediseñado para dar la bienvenida a un nuevo año. Diseño elegante y romántico en cartulina premium. Incluye fecha del evento. Acabado mate o brillante según preferencia. Ideal para tortas de boda de cualquier tamaño.',
    images: [imgHello28],
    category: 'toppers',
    subcategory: 'prediseñados',
    stock: 20,
    featured: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'bautizo',
    name: 'Topper Prediseñado Bautizo',
    price: 30000,
    description: 'Topper con diseño innovador de bautizo en 3D. Perfecto para celebraciones juveniles y adultos. Material resistente y duradero. Incluye palito de soporte. Fácil de colocar en cualquier torta.',
    images: [imgBautizo],
    category: 'toppers',
    subcategory: 'prediseñados',
    stock: 15,
    featured: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'graduacion',
    name: 'Topper Prediseñado Graduación',
    price: 30000,
    originalPrice: 38000,
    description: 'Topper con diseño en capas perfecto para las diferentes celebraciones de grado. Personalizable con nombre y año. Disponible en dorado, plateado y colores institucionales.',
    images: [imgGraduacion],
    category: 'toppers',
    subcategory: 'prediseñados',
    stock: 15,
    featured: false,
    onSale: true, // 3
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'happy-birthday',
    name: 'Topper Acrilico Happy Birthday',
    price: 20000,
    description: 'Adorable topper en acrílico de feliz cumpleaños. Diseño tierno con detalles de animalitos o nubes. Cartulina de alta calidad 300gr. Disponible en rosa, azul o neutro. Perfecto para celebrar la llegada del nuevo integrante.',
    images: [imgHappyBirthday],
    category: 'toppers',
    subcategory: 'acrilicos',
    stock: 25,
    featured: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'iniciales',
    name: 'Topper Acrilico Iniciales',
    price: 20000,
    description: 'Adorable topper en acrílico con las iniciales de las parejas. Diseño tierno con detalles de animalitos o nubes. Cartulina de alta calidad 300gr. Disponible en rosa, azul o neutro. Perfecto para celebrar la llegada del nuevo integrante.',
    images: [imgIniciales],
    category: 'toppers',
    subcategory: 'acrilicos',
    stock: 25,
    featured: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },

  // --- TROQUELADOS ---
  {
    id: 'flores-carnaval',
    name: 'Flores troqueladas para el Carnaval',
    price: 25000,
    originalPrice: 32000,
    description: 'Disfruta de este set de flores troqueladas de diferentes colores para disfrutar los carnavales.',
    images: [imgFloresCarnaval],
    category: 'troquelados',
    subcategory: '',
    stock: 50,
    featured: true,
    onSale: true, // 4
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'flores-elegantes',
    name: 'Flores troqueladas elegantes',
    price: 25000,
    description: 'Set de flores pequeñas, medianas y grandes acompañadas de hojas troqueladas perfectas para celebraciones especiales.',
    images: [imgFloresElegantes],
    category: 'troquelados',
    subcategory: '',
    stock: 40,
    featured: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'mariposas-set',
    name: 'Set de mariposas troqueladas',
    price: 15000,
    description: 'Te ofrecemos este set de mariposas troqueladas perfectas para decorar tus postres y tortas.',
    images: [imgMariposas],
    category: 'troquelados',
    subcategory: '',
    stock: 60,
    featured: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },

  // --- ARCHIVOS DIGITALES ---
  {
    id: 'archivo-capybara',
    name: 'Archivo digital Topper Capybara',
    price: 25000,
    description: 'Divertido topper personalizado con temática de Capybara. Incluye nombre y edad del cumpleañero. Ideal para fiestas temáticas y amantes de los animales. Materiales de alta calidad y acabado impecable.',
    images: [imgCapybara],
    category: 'archivos',
    subcategory: '',
    stock: 999,
    featured: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'archivo-mujer',
    name: 'Archivo digital Topper Mujer',
    price: 15000,
    description: 'Topper delicado con diseño del día de la mujer. Perfecto para celebraciones al aire libre o temáticas florales. Personalízalo con el nombre que desees. Colores vivos y duraderos.',
    images: [imgPrimavera],
    category: 'archivos',
    subcategory: '',
    stock: 999,
    featured: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'archivo-thundercats',
    name: 'Archivo digital Topper Thundercats',
    price: 25000,
    description: '¡Thundercats, oooooh! Topper lleno de acción para los fans de esta serie clásica. Personalizado con nombre y edad. Detalles en capas para efecto 3D.',
    images: [imgThundercats],
    category: 'archivos',
    subcategory: '',
    stock: 999,
    featured: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'archivo-artes',
    name: 'Archivo digital Kit de artes plásticas',
    price: 28000,
    description: 'Hermoso topper personalizado con diseño de artes plásticas. Incluye el nombre del cumpleañero y edad. Fabricado en cartulina de 300gr con acabado brillante. Perfecto para tortas de 15cm a 25cm de diámetro. Disponible en múltiples colores pastel.',
    images: [imgArchivoArtes],
    category: 'archivos',
    subcategory: '',
    stock: 999,
    featured: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'archivo-hotwheels',
    name: 'Archivo digital Topper Hotweels',
    price: 20000,
    description: 'Archivo de set de Hotweels perfecto para los niños de la cada. Diseño elegante y romántico en cartulina premium. Incluye fecha del evento. Acabado mate o brillante según preferencia. Ideal para tortas de boda de cualquier tamaño.',
    images: [imgArchivoHotwheels],
    category: 'archivos',
    subcategory: '',
    stock: 999,
    featured: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'archivo-grado',
    name: 'Archivo digital Topper Mi Grado',
    price: 30000,
    description: 'Adorable topper con motivo de graduación de contadores y administradores de empresasDiseño tierno con detalles de animalitos o nubes. Cartulina de alta calidad 300gr. Disponible en rosa, azul o neutro. Perfecto para celebrar la llegada del nuevo integrante.',
    images: [imgArchivoGrado],
    category: 'archivos',
    subcategory: '',
    stock: 999,
    featured: false,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

// Función para obtener productos mock
export const getMockProducts = (category?: string): Product[] => {
  if (category) {
    return mockProducts.filter(p => p.category === category);
  }
  return mockProducts;
};

// Función para obtener un producto por ID
export const getMockProductById = (id: string): Product | undefined => {
  return mockProducts.find(p => p.id === id);
};

// Función para obtener productos destacados
export const getMockFeaturedProducts = (): Product[] => {
  return mockProducts.filter(p => p.featured);
};

// Función para obtener ofertas
export const getMockOnSaleProducts = (): Product[] => {
  return mockProducts.filter(p => p.onSale);
};