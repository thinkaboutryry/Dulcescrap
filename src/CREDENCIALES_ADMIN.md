# Credenciales de Administrador - Dulce Scrap

## 🔐 Configuración de Usuario Administrador

### Paso 1: Crear Usuario en Firebase Console

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Selecciona tu proyecto **dulce-scrap**
3. En el menú lateral, ve a **Authentication**
4. Haz clic en la pestaña **Users**
5. Haz clic en **"Add user"** (Agregar usuario)

### Paso 2: Credenciales Recomendadas

Usa estas credenciales para crear tu cuenta de administrador:

```
Email: admin@dulcescrap.com
Contraseña: DulceScrap2025!
```

O personaliza con tus propias credenciales:

```
Email: [tu-email]@dulcescrap.com
Contraseña: [tu-contraseña-segura]
```

**IMPORTANTE**: Guarda estas credenciales en un lugar seguro. Las necesitarás para acceder al panel de administración.

### Paso 3: Acceder al Panel de Admin

1. Ve a tu sitio web: `http://localhost:5173` (desarrollo) o tu dominio en producción
2. Haz clic en el botón de **Iniciar Sesión** en la navegación (ícono de usuario)
3. Ingresa el email y contraseña que creaste
4. Serás redirigido automáticamente al **Panel de Admin** (`/admin`)

## 🎯 Funcionalidades del Panel de Admin

Una vez dentro del panel de administración, podrás:

### ✅ Gestión de Productos
- **Crear** nuevos productos con múltiples imágenes
- **Editar** productos existentes
- **Eliminar** productos
- Marcar productos como **destacados**
- Gestionar **stock** y **precios**
- Organizar por **categorías** y **subcategorías**

### ✅ Gestión de Pedidos
- Ver todos los **pedidos recibidos**
- Revisar **información del cliente**
- Ver **detalles de cada pedido**
- Monitorear el **estado** de los pedidos

## 👥 Usuarios Regulares vs Administradores

### Usuarios Regulares (Clientes)
- Pueden **registrarse** desde la página de login
- Pueden **comprar productos**
- Pueden **ver el historial de pedidos** (cuando esté implementado)
- **NO** tienen acceso al panel de admin

### Administradores
- Usuario creado en **Firebase Authentication**
- Acceso completo al **panel de administración**
- Pueden gestionar **todo el contenido** del sitio

## 🔒 Seguridad

### Reglas de Firestore Actuales

Las reglas de Firestore están configuradas para:

```javascript
// Productos
- Lectura: Cualquier persona (público)
- Escritura: Solo usuarios autenticados (admins)

// Pedidos
- Lectura: Solo usuarios autenticados (admins)
- Escritura: Solo usuarios autenticados (admins)
```

### Recomendaciones de Seguridad

1. **Usa contraseñas fuertes** para la cuenta de admin
2. **No compartas** las credenciales de administrador
3. **Cambia la contraseña** regularmente
4. **Habilita 2FA** en Firebase Console (recomendado)
5. **Revisa los logs** de autenticación regularmente

## 📝 Notas Importantes

### Primer Login
- La primera vez que inicies sesión, verás el panel vacío
- Debes **crear productos** manualmente
- Usa el botón **"Nuevo Producto"** para empezar

### Agregar Productos de Ejemplo

Consulta el archivo `/lib/sampleProducts.ts` para ver ejemplos de productos que puedes agregar.

Datos básicos para un producto de prueba:

```
Nombre: Topper Personalizado Cumpleaños
Descripción: Topper personalizado con el nombre del cumpleañero
Precio: 25000
Categoría: toppers
Subcategoría: personalizados
Stock: 50
Destacado: ✓ (marcado)
```

### Subir Imágenes

1. En el formulario de producto, usa el botón de **subir imágenes**
2. Puedes subir **múltiples imágenes** por producto
3. Las imágenes se guardan en **Firebase Storage**
4. Tamaño máximo: **5MB** por imagen
5. Formatos aceptados: **JPG, PNG, WEBP**

## ❓ Problemas Comunes

### No puedo iniciar sesión
- Verifica que las credenciales sean correctas
- Confirma que el usuario existe en Firebase Authentication
- Revisa la consola del navegador (F12) para errores

### No veo el botón "Panel Admin"
- Solo aparece cuando estás autenticado
- Verifica que iniciaste sesión correctamente

### Los productos no aparecen
- Asegúrate de haber creado productos desde el admin
- Verifica las reglas de Firestore
- Revisa la consola para errores de permisos

## 🆘 Soporte

Si tienes problemas para configurar el administrador:

1. Revisa **Firebase Console** > Authentication
2. Verifica que el usuario exista
3. Confirma las **reglas de Firestore**
4. Revisa los **logs de Firebase**
5. Consulta la documentación en `/README.md`

---

## 📧 Resumen de Credenciales

```
===================================
    CREDENCIALES DE ADMINISTRADOR
===================================

Email: admin@dulcescrap.com
Contraseña: DulceScrap2025!

URL Admin Panel: /admin
URL Login: /login

===================================
```

**GUARDA ESTE ARCHIVO EN UN LUGAR SEGURO**

---

Fecha de creación: 24 de enero de 2025
