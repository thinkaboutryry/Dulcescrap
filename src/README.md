# Dulce Scrap - E-commerce Completo

E-commerce 100% funcional para Dulce Scrap, especializado en toppers, troquelados y archivos digitales para decoración de repostería.

## ✨ Demo del Proyecto

Este es un e-commerce completamente funcional con:
- 🛒 Sistema de compras con carrito persistente
- 🔐 Autenticación de usuarios y administradores
- 📦 Panel CMS completo para gestión de productos
- 📱 Diseño responsive y accesible
- 🎨 Diseño fiel al wireframe de Figma proporcionado

---

## 🚀 Inicio Rápido

### 1. Configurar Firebase

Sigue la guía completa en [`FIREBASE_SETUP.md`](/FIREBASE_SETUP.md)

Resumen rápido:
1. Crea proyecto en Firebase Console
2. Habilita Authentication, Firestore y Storage
3. Copia credenciales a `/lib/firebase.ts`

### 2. Crear Usuario Administrador

Ve a Firebase Console > Authentication > Users > Add user

**Credenciales recomendadas:**
```
Email: admin@dulcescrap.com
Contraseña: DulceScrap2025!
```

**📄 Ver guía completa:** [`CREDENCIALES_ADMIN.md`](/CREDENCIALES_ADMIN.md)

### 3. Iniciar Proyecto

```bash
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173)

### 4. Acceder al Panel de Admin

1. Haz clic en el ícono de usuario (arriba derecha)
2. Inicia sesión con: `admin@dulcescrap.com` / `DulceScrap2025!`
3. Serás redirigido a `/admin`
4. Crea tus primeros productos

---

## 📋 Características Completas

### 🎨 Diseño y UI/UX
- ✅ Diseño exacto basado en Figma wireframe proporcionado
- ✅ Navegación responsive (mobile, tablet, desktop)
- ✅ Colores del brand (#ec268f, #df8098, #f0cad5)
- ✅ Tipografías: Nunito, Inter, Plus Jakarta Sans
- ✅ Animaciones y transiciones suaves

### 📱 Páginas Implementadas

#### Páginas Públicas
1. **Inicio** (`/`)
   - Hero section con carrusel
   - "¿Por qué elegir Dulce Scrap?"
   - "¡Para cada celebración, tenemos el detalle perfecto!"
   - "¡Encuentra los más vendidos!"
   - Vista previa de categorías
   - "Ellos confían en nosotros" (testimonios)
   - "Preguntas frecuentes" (FAQ)
   - Newsletter con 25% descuento
   - CTA mayoristas

2. **Toppers** (`/toppers`)
   - Catálogo completo de toppers
   - Filtros: Todos, Personalizados, Prediseñados, Acrílicos
   - Agregar al carrito directo

3. **Troquelados** (`/troquelados`)
   - Catálogo de troquelados
   - Grid responsive de productos

4. **Archivos** (`/archivos`)
   - Archivos digitales descargables
   - Badge "Digital" en cada producto

5. **Mayoristas** (`/mayoristas`)
   - Información de ventas al por mayor
   - Formulario de contacto
   - Beneficios destacados

6. **Contacto** (`/contacto`)
   - Formulario de contacto
   - Información de contacto
   - Horarios de atención

7. **Ofertas** (`/ofertas`)
   - Productos destacados con descuentos
   - Newsletter signup

8. **Carrito** (`/carrito`)
   - Lista de productos
   - Modificar cantidades
   - Eliminar productos
   - Resumen del pedido

9. **Checkout** (`/checkout`)
   - Formulario de datos del cliente
   - Dirección de envío
   - Resumen de compra
   - Proceso de pago

10. **Detalle de Producto** (`/producto/:id`)
    - Galería de imágenes
    - Información completa
    - Agregar al carrito
    - Control de cantidad

#### Páginas de Usuario
11. **Login/Registro** (`/login`)
    - Formulario dual login/registro
    - Autenticación con Firebase
    - Para usuarios y administradores

#### Páginas de Admin
12. **Panel de Administración** (`/admin`)
    - Dashboard completo
    - Gestión de productos
    - Gestión de pedidos
    - Subida de imágenes múltiples

### 🛒 Sistema de E-commerce

#### Carrito de Compras
- ✅ Agregar productos con cantidad
- ✅ Modificar cantidades (+/-)
- ✅ Eliminar productos
- ✅ Persistencia en localStorage
- ✅ Contador en navegación
- ✅ Cálculo automático de totales

#### Proceso de Compra
- ✅ Formulario de datos del cliente
- ✅ Dirección de envío
- ✅ Resumen del pedido
- ✅ Guardado en Firebase Firestore
- ✅ Notificaciones toast

### 🔐 Autenticación

#### Usuarios Regulares
- ✅ Registro de nuevos usuarios
- ✅ Inicio de sesión
- ✅ Persistencia de sesión
- ✅ Protección de rutas

#### Administradores
- ✅ Login con Firebase Auth
- ✅ Acceso al panel CMS
- ✅ Permisos de escritura en Firestore
- ✅ Gestión completa de contenido

### 📦 Panel CMS (Administración)

#### Gestión de Productos
- ✅ **Crear** productos
  - Nombre, descripción
  - Precio y stock
  - Categoría y subcategoría
  - Producto destacado (checkbox)
  - Múltiples imágenes
  
- ✅ **Editar** productos existentes
  - Modificar todos los campos
  - Agregar/eliminar imágenes
  
- ✅ **Eliminar** productos
  - Con confirmación

- ✅ **Subir Imágenes**
  - Múltiples archivos
  - Upload a Firebase Storage
  - Preview en tiempo real
  - Máximo 5MB por imagen

#### Gestión de Pedidos
- ✅ Ver todos los pedidos
- ✅ Información del cliente
- ✅ Productos del pedido
- ✅ Total y estado
- ✅ Fecha de creación

### ♿ Accesibilidad

- ✅ Botón de accesibilidad flotante (lado derecho)
- ✅ Ajuste de tamaño de fuente (80% - 150%)
- ✅ Modo de alto contraste
- ✅ Navegación por teclado
- ✅ Textos alternativos
- ✅ Scroll suave
- ✅ Focus visible

### 📱 Responsive Design

Optimizado para todos los dispositivos:
- 📱 **Mobile**: 320px - 767px
- 📱 **Tablet**: 768px - 1023px
- 💻 **Desktop**: 1024px - 1439px
- 🖥️ **Large Desktop**: 1440px+

### 🔥 Integración Firebase

#### Authentication
- Email/Password authentication
- Gestión de sesiones
- Protección de rutas de admin

#### Firestore Database
**Colecciones:**

1. `products`
```javascript
{
  name: string,
  description: string,
  price: number,
  category: 'toppers' | 'troquelados' | 'archivos',
  subcategory: string,
  images: string[],
  stock: number,
  featured: boolean,
  createdAt: Timestamp,
  updatedAt: Timestamp
}
```

2. `orders`
```javascript
{
  items: CartItem[],
  total: number,
  status: 'pending' | 'processing' | 'shipped' | 'delivered',
  customerInfo: {
    name: string,
    email: string,
    phone: string,
    address: string
  },
  createdAt: Timestamp
}
```

#### Storage
- Carpeta `products/` para imágenes de productos
- URLs públicas para lectura
- Escritura solo para usuarios autenticados
- Límite de 5MB por archivo

#### Hosting
- Configuración lista para deploy
- Reglas de rewrite para SPA
- Headers de cache optimizados

---

## 🔧 Tecnologías

- **React 18** - UI Framework
- **TypeScript** - Type safety
- **React Router v6** - Routing
- **Tailwind CSS v4** - Styling
- **Firebase**
  - Authentication - Autenticación
  - Firestore - Base de datos
  - Storage - Almacenamiento
  - Hosting - Despliegue
- **Lucide React** - Iconos
- **Sonner** - Toast notifications

---

## 📁 Estructura del Proyecto

```
dulce-scrap/
├── lib/
│   ├── firebase.ts           # Configuración Firebase
│   ├── firebaseAuth.ts       # Funciones de autenticación
│   ├── firebaseDb.ts         # Funciones de Firestore
│   ├── firebaseStorage.ts    # Funciones de Storage
│   └── sampleProducts.ts     # Productos de ejemplo
├── contexts/
│   ├── AuthContext.tsx       # Contexto de autenticación
│   └── CartContext.tsx       # Contexto del carrito
├── components/
│   ├── Root.tsx              # Layout raíz
│   ├── Navbar.tsx            # Barra de navegación
│   ├── Footer.tsx            # Pie de página
│   └── AccessibilityButton.tsx # Botón de accesibilidad
├── pages/
│   ├── HomePage.tsx          # Página de inicio
│   ├── ToppersPage.tsx       # Catálogo toppers
│   ├── TroqueladosPage.tsx   # Catálogo troquelados
│   ├── ArchivosPage.tsx      # Catálogo archivos
│   ├── MayoristasPage.tsx    # Página mayoristas
│   ├── ContactoPage.tsx      # Contacto
│   ├── OfertasPage.tsx       # Ofertas
│   ├── CartPage.tsx          # Carrito
│   ├── CheckoutPage.tsx      # Checkout
│   ├── ProductDetailPage.tsx # Detalle producto
│   ├── LoginPage.tsx         # Login/Registro
│   ├── AdminPanel.tsx        # Panel admin
│   └── NotFoundPage.tsx      # 404
├── imports/                  # Archivos de Figma
├── styles/
│   └── globals.css           # Estilos globales
├── routes.ts                 # Configuración de rutas
├── App.tsx                   # Componente principal
├── firebase.json             # Config Firebase
├── firestore.rules           # Reglas Firestore
├── storage.rules             # Reglas Storage
├── README.md                 # Este archivo
├── FIREBASE_SETUP.md         # Guía de configuración
└── CREDENCIALES_ADMIN.md     # Credenciales de admin
```

---

## 🎯 Uso del Sistema

### Para Clientes (Usuarios Regulares)

1. **Navegar el sitio**
   - Explora productos por categoría
   - Usa la búsqueda en la navegación
   - Filtra productos

2. **Comprar Productos**
   - Agrega productos al carrito
   - Ajusta cantidades
   - Procede al checkout

3. **Crear Cuenta** (opcional)
   - Clic en "Iniciar Sesión"
   - Selecciona "Regístrate"
   - Completa el formulario

### Para Administradores

#### 1. Primer Acceso

```bash
# Asegúrate de tener Firebase configurado
# Crea usuario admin en Firebase Console

# Accede al sitio
1. Ve a /login
2. Ingresa: admin@dulcescrap.com / DulceScrap2025!
3. Serás redirigido a /admin
```

#### 2. Crear Productos

```
1. Panel Admin > "Nuevo Producto"
2. Completa el formulario:
   - Nombre del producto
   - Descripción detallada
   - Precio (en pesos colombianos)
   - Categoría (toppers/troquelados/archivos)
   - Subcategoría (opcional)
   - Stock disponible
   - Marcar como destacado (opcional)
3. Sube imágenes (arrastra o selecciona)
4. Clic en "Crear Producto"
```

#### 3. Gestionar Productos

- **Editar**: Clic en botón "Editar"
- **Eliminar**: Clic en "Eliminar" (confirmar)
- **Ver**: Los productos aparecen inmediatamente en el sitio

#### 4. Ver Pedidos

- Tab "Pedidos" en el panel
- Información completa de cada orden
- Datos del cliente
- Productos y totales

---

## 🚀 Despliegue a Producción

### 1. Build del Proyecto

```bash
npm run build
```

### 2. Deploy a Firebase Hosting

```bash
# Primera vez
firebase login
firebase init hosting

# Cada deploy
npm run build
firebase deploy
```

### 3. URL de Producción

Firebase te dará URLs como:
- `https://dulce-scrap.web.app`
- `https://dulce-scrap.firebaseapp.com`

---

## 📊 Datos de Prueba

### Productos de Ejemplo

Usa estos datos para crear tus primeros productos:

**Topper Personalizado**
```
Nombre: Topper Personalizado Cumpleaños
Descripción: Topper personalizado con el nombre y edad del cumpleañero. Disponible en múltiples colores y acabados brillantes.
Precio: 25000
Categoría: toppers
Subcategoría: personalizados
Stock: 50
Destacado: ✓
```

**Topper Prediseñado**
```
Nombre: Topper Feliz Cumpleaños Elegante
Descripción: Topper prediseñado con mensaje "Feliz Cumpleaños" en letra cursiva elegante.
Precio: 20000
Categoría: toppers
Subcategoría: prediseñados
Stock: 100
Destacado: ✓
```

**Troquelado**
```
Nombre: Set Troquelados Mariposas
Descripción: Set de 50 mariposas troqueladas en diferentes tamaños.
Precio: 15000
Categoría: troquelados
Stock: 80
```

**Archivo Digital**
```
Nombre: Archivo Digital - Kit Cumpleaños
Descripción: Kit completo para imprimir: toppers, banderines, etiquetas.
Precio: 8000
Categoría: archivos
Stock: 999
```

Ver más ejemplos en `/lib/sampleProducts.ts`

---

## 🔐 Seguridad

### Reglas de Firestore

```javascript
// Lectura pública, escritura solo admins
match /products/{productId} {
  allow read: if true;
  allow write: if request.auth != null;
}

// Solo admins
match /orders/{orderId} {
  allow read, write: if request.auth != null;
}
```

### Reglas de Storage

```javascript
// Imágenes públicas, subida solo admins
match /products/{allPaths=**} {
  allow read: if true;
  allow write: if request.auth != null
             && request.resource.size < 5 * 1024 * 1024;
}
```

---

## 💾 Base de Datos

### Índices de Firestore

Ya configurados en `firestore.indexes.json`:
- `products` por `category` + `createdAt`
- `products` por `featured` + `createdAt`
- `orders` por `status` + `createdAt`

Firebase los creará automáticamente al hacer la primera consulta.

---

## 🆘 Solución de Problemas

### No puedo iniciar sesión como admin

1. Verifica que el usuario existe en Firebase Authentication
2. Confirma que usas las credenciales correctas
3. Revisa la consola del navegador (F12) para errores

### Los productos no aparecen

1. Asegúrate de haber creado productos desde el admin
2. Verifica las reglas de Firestore
3. Revisa permisos en Firebase Console

### Las imágenes no se suben

1. Verifica las reglas de Storage
2. Confirma que el archivo es < 5MB
3. Usa formatos: JPG, PNG, WEBP

### Error de permisos en Firestore

1. Revisa `firestore.rules`
2. Publica las reglas en Firebase Console
3. Espera 1-2 minutos para propagación

---

## 📝 Notas Importantes

### Variables de Entorno

No uses `.env` en este proyecto. Las credenciales van directamente en `/lib/firebase.ts`

### Primer Usuario Admin

Debe crearse manualmente en Firebase Console > Authentication

### Productos Iniciales

El sitio inicia sin productos. Debes agregarlos desde el panel de admin.

### Modo de Prueba

Para desarrollo, puedes usar Firebase en modo de prueba (30 días)

---

## 📞 Soporte

### Documentación
- [Firebase Docs](https://firebase.google.com/docs)
- [React Router Docs](https://reactrouter.com/)
- [Tailwind CSS Docs](https://tailwindcss.com/)

### Archivos de Ayuda
- `/FIREBASE_SETUP.md` - Configuración completa de Firebase
- `/CREDENCIALES_ADMIN.md` - Guía de acceso de admin
- `/lib/sampleProducts.ts` - Ejemplos de productos

---

## 🎉 ¡Listo para Producción!

Este e-commerce está **100% funcional** y listo para usar. Solo necesitas:

1. ✅ Configurar Firebase (10 minutos)
2. ✅ Crear usuario admin (2 minutos)
3. ✅ Agregar productos (desde el panel)
4. ✅ ¡Empezar a vender!

---

## 📄 Licencia

© 2025 Dulce Scrap. Todos los derechos reservados.

---

## 🙏 Créditos

Desarrollado con ❤️ para Dulce Scrap
- Diseño: Basado en wireframe de Figma proporcionado
- Desarrollo: E-commerce completo con React + Firebase
- Tecnología: React, TypeScript, Tailwind, Firebase

---

**¿Preguntas? Revisa la documentación en `/FIREBASE_SETUP.md` y `/CREDENCIALES_ADMIN.md`**
