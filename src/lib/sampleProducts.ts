// Productos de ejemplo para inicializar la tienda
// Estos se pueden agregar manualmente desde el panel de admin

export const sampleProducts = [
  // TOPPERS
  {
    name: 'Topper Personalizado Cumpleaños',
    description: 'Topper personalizado con el nombre y edad del cumpleañero. Disponible en múltiples colores y acabados brillantes.',
    price: 25000,
    category: 'toppers' as const,
    subcategory: 'personalizados',
    stock: 50,
    featured: true,
    images: [] // Agregar URLs desde Firebase Storage
  },
  {
    name: 'Topper Feliz Cumpleaños Elegante',
    description: 'Topper prediseñado con mensaje "Feliz Cumpleaños" en letra cursiva elegante. Perfecto para cualquier celebración.',
    price: 20000,
    category: 'toppers' as const,
    subcategory: 'prediseñados',
    stock: 100,
    featured: true,
    images: []
  },
  {
    name: 'Topper Acrílico Transparente',
    description: 'Topper en acrílico de 3mm con acabado transparente. Diseño moderno y minimalista.',
    price: 35000,
    category: 'toppers' as const,
    subcategory: 'acrilicos',
    stock: 30,
    featured: true,
    images: []
  },
  {
    name: 'Topper Unicornio Personalizado',
    description: 'Hermoso topper de unicornio con nombre personalizado. Ideal para fiestas infantiles.',
    price: 28000,
    category: 'toppers' as const,
    subcategory: 'personalizados',
    stock: 40,
    featured: false,
    images: []
  },
  {
    name: 'Topper Love Acrílico Dorado',
    description: 'Topper "LOVE" en acrílico con acabado dorado. Perfecto para bodas y aniversarios.',
    price: 40000,
    category: 'toppers' as const,
    subcategory: 'acrilicos',
    stock: 25,
    featured: false,
    images: []
  },

  // TROQUELADOS
  {
    name: 'Set Troquelados Mariposas',
    description: 'Set de 50 mariposas troqueladas en diferentes tamaños. Ideales para decoración de eventos.',
    price: 15000,
    category: 'troquelados' as const,
    subcategory: '',
    stock: 80,
    featured: false,
    images: []
  },
  {
    name: 'Troquelados Estrellas Doradas',
    description: 'Pack de 100 estrellas troqueladas con acabado dorado brillante. Perfectas para cumpleaños.',
    price: 12000,
    category: 'troquelados' as const,
    subcategory: '',
    stock: 120,
    featured: false,
    images: []
  },
  {
    name: 'Troquelados Flores Pastel',
    description: 'Colección de flores troqueladas en colores pastel. Pack de 60 unidades variadas.',
    price: 18000,
    category: 'troquelados' as const,
    subcategory: '',
    stock: 60,
    featured: false,
    images: []
  },

  // ARCHIVOS DIGITALES
  {
    name: 'Archivo Digital - Kit Cumpleaños Unicornio',
    description: 'Kit completo para imprimir: toppers, banderines, etiquetas y más. Formato PDF de alta calidad.',
    price: 8000,
    category: 'archivos' as const,
    subcategory: '',
    stock: 999,
    featured: false,
    images: []
  },
  {
    name: 'Archivo Digital - Toppers Personalizables',
    description: 'Plantilla editable en formato SVG para crear tus propios toppers personalizados.',
    price: 10000,
    category: 'archivos' as const,
    subcategory: '',
    stock: 999,
    featured: false,
    images: []
  },
  {
    name: 'Archivo Digital - Pack Boda Romántica',
    description: 'Set completo de diseños para bodas: invitaciones, etiquetas, toppers y más. Archivos listos para imprimir.',
    price: 15000,
    category: 'archivos' as const,
    subcategory: '',
    stock: 999,
    featured: false,
    images: []
  }
];

// Función helper para agregar productos de ejemplo
export const addSampleProductsInfo = `
Para agregar productos de ejemplo:

1. Inicia sesión en el panel de admin (/admin)
2. Haz clic en "Nuevo Producto"
3. Llena los datos del producto
4. Sube imágenes desde tu computadora
5. Marca como "Destacado" si quieres que aparezca en el home
6. Guarda el producto

Datos de ejemplo para copiar:

TOPPER PERSONALIZADO:
- Nombre: Topper Personalizado Cumpleaños
- Descripción: Topper personalizado con el nombre y edad del cumpleañero. Disponible en múltiples colores y acabados brillantes.
- Precio: 25000
- Categoría: toppers
- Subcategoría: personalizados
- Stock: 50
- Destacado: Sí

TOPPER PREDISEÑADO:
- Nombre: Topper Feliz Cumpleaños Elegante  
- Descripción: Topper prediseñado con mensaje "Feliz Cumpleaños" en letra cursiva elegante. Perfecto para cualquier celebración.
- Precio: 20000
- Categoría: toppers
- Subcategoría: prediseñados
- Stock: 100
- Destacado: Sí

TROQUELADO:
- Nombre: Set Troquelados Mariposas
- Descripción: Set de 50 mariposas troqueladas en diferentes tamaños. Ideales para decoración de eventos.
- Precio: 15000
- Categoría: troquelados
- Stock: 80

ARCHIVO DIGITAL:
- Nombre: Archivo Digital - Kit Cumpleaños Unicornio
- Descripción: Kit completo para imprimir: toppers, banderines, etiquetas y más. Formato PDF de alta calidad.
- Precio: 8000
- Categoría: archivos
- Stock: 999
`;
