# Guía de Configuración de Firebase para Dulce Scrap

Esta guía te ayudará a configurar Firebase paso a paso para tu e-commerce.

## 📋 Prerequisitos

- Cuenta de Google/Gmail
- Acceso a [Firebase Console](https://console.firebase.google.com/)

## 🚀 Paso 1: Crear Proyecto en Firebase

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Haz clic en "Agregar proyecto"
3. Nombre del proyecto: **dulce-scrap** (o el que prefieras)
4. Acepta los términos y continúa
5. Habilita Google Analytics (opcional)
6. Crea el proyecto

## 🔑 Paso 2: Configurar Authentication

1. En el menú lateral, ve a **Authentication**
2. Haz clic en "Comenzar"
3. En la pestaña "Sign-in method":
   - Habilita **Correo electrónico/contraseña**
   - Guarda los cambios

### Crear Usuario Administrador

1. Ve a la pestaña **Users**
2. Haz clic en "Agregar usuario"
3. Email: `admin@dulcescrap.com` (o tu email)
4. Contraseña: Crea una contraseña segura
5. Guarda este usuario - lo necesitarás para acceder al panel de admin

## 💾 Paso 3: Configurar Firestore Database

1. En el menú lateral, ve a **Firestore Database**
2. Haz clic en "Crear base de datos"
3. Selecciona modo de inicio:
   - **Producción** (recomendado) - Más seguro
   - O **Prueba** (para desarrollo) - Acceso público por 30 días
4. Selecciona ubicación: **southamerica-east1** (São Paulo) o la más cercana
5. Crea la base de datos

### Configurar Reglas de Seguridad de Firestore

1. Ve a la pestaña **Reglas**
2. Reemplaza las reglas con:

\`\`\`javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Productos - Cualquiera puede leer, solo admins pueden escribir
    match /products/{productId} {
      allow read: if true;
      allow create, update, delete: if request.auth != null;
    }
    
    // Órdenes - Solo admins pueden leer y escribir
    match /orders/{orderId} {
      allow read, write: if request.auth != null;
    }
  }
}
\`\`\`

3. Publica las reglas

## 📁 Paso 4: Configurar Storage

1. En el menú lateral, ve a **Storage**
2. Haz clic en "Comenzar"
3. Acepta las reglas de seguridad predeterminadas
4. Selecciona la misma ubicación que Firestore
5. Haz clic en "Listo"

### Configurar Reglas de Seguridad de Storage

1. Ve a la pestaña **Reglas**
2. Reemplaza las reglas con:

\`\`\`javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    
    // Imágenes de productos
    match /products/{allPaths=**} {
      // Cualquiera puede leer las imágenes
      allow read: if true;
      // Solo admins pueden subir/modificar/eliminar
      allow write: if request.auth != null
                   && request.resource.size < 5 * 1024 * 1024 // Max 5MB
                   && request.resource.contentType.matches('image/.*');
    }
  }
}
\`\`\`

3. Publica las reglas

## 🌐 Paso 5: Configurar Hosting (Opcional)

1. En el menú lateral, ve a **Hosting**
2. Haz clic en "Comenzar"
3. Instala Firebase CLI si aún no lo tienes:
\`\`\`bash
npm install -g firebase-tools
\`\`\`

4. En tu proyecto local, ejecuta:
\`\`\`bash
firebase login
firebase init hosting
\`\`\`

5. Selecciona tu proyecto de Firebase
6. Build directory: **dist**
7. Single-page app: **Yes**
8. GitHub deployment: **No** (por ahora)

## 🔧 Paso 6: Obtener Credenciales

1. Ve a **Configuración del proyecto** (ícono de engranaje arriba a la izquierda)
2. En la pestaña **General**, desplázate hasta "Tus apps"
3. Haz clic en el ícono **</>** (Web)
4. Registra la app: **Dulce Scrap Web**
5. **NO** marques "Firebase Hosting" aún
6. Copia las credenciales que aparecen

### Actualizar Credenciales en el Código

Abre `/lib/firebase.ts` y reemplaza:

\`\`\`typescript
const firebaseConfig = {
  apiKey: "PEGA_TU_API_KEY_AQUI",
  authDomain: "tu-proyecto.firebaseapp.com",
  projectId: "tu-proyecto-id",
  storageBucket: "tu-proyecto.appspot.com",
  messagingSenderId: "123456789",
  appId: "tu-app-id"
};
\`\`\`

## ✅ Paso 7: Verificar Configuración

### Probar Localmente

1. Inicia el proyecto:
\`\`\`bash
npm run dev
\`\`\`

2. Abre http://localhost:5173
3. Intenta iniciar sesión en **/login** con el usuario creado
4. Verifica que puedas acceder al panel de admin en **/admin**
5. Intenta crear un producto con imágenes

### Verificar en Firebase Console

1. **Firestore**: Deberías ver la colección `products` después de crear un producto
2. **Storage**: Deberías ver la carpeta `products` con las imágenes subidas
3. **Authentication**: Tu usuario admin debería aparecer en la lista

## 🚀 Paso 8: Desplegar a Producción

1. Construye el proyecto:
\`\`\`bash
npm run build
\`\`\`

2. Despliega a Firebase Hosting:
\`\`\`bash
firebase deploy
\`\`\`

3. Firebase te dará una URL como:
   - `https://tu-proyecto.web.app`
   - `https://tu-proyecto.firebaseapp.com`

4. ¡Tu sitio está en vivo! 🎉

## 🔒 Seguridad Adicional (Recomendado)

### Restringir Dominios Autorizados

1. Ve a **Authentication** > **Settings**
2. En "Authorized domains", agrega tu dominio personalizado si tienes uno

### Configurar Custom Claims para Admin

Para mayor seguridad, usa Firebase Functions para agregar custom claims:

\`\`\`javascript
// functions/index.js
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.makeAdmin = functions.https.onCall(async (data, context) => {
  // Verifica que el usuario que llama ya sea admin
  if (context.auth.token.admin !== true) {
    throw new functions.https.HttpsError(
      'permission-denied',
      'Only admins can make other users admin.'
    );
  }
  
  // Asigna custom claim
  await admin.auth().setCustomUserClaims(data.uid, {
    admin: true
  });
  
  return { message: 'Success! User is now an admin.' };
});
\`\`\`

## 📊 Monitoreo y Analytics

1. Ve a **Analytics** en Firebase Console
2. Revisa métricas de uso
3. Configura eventos personalizados si lo deseas

## 💳 Costos

Firebase tiene un plan gratuito (Spark) que incluye:
- **Firestore**: 50,000 lecturas/día
- **Storage**: 5GB
- **Hosting**: 10GB/mes de transferencia
- **Authentication**: Usuarios ilimitados

Para más uso, considera el plan **Blaze** (pago por uso).

## 🆘 Solución de Problemas

### Error: Permission Denied

- Verifica que las reglas de Firestore/Storage estén configuradas correctamente
- Asegúrate de estar autenticado al hacer operaciones de escritura

### Imágenes no se cargan

- Verifica las reglas de Storage
- Confirma que las URLs de las imágenes sean públicas

### No puedo iniciar sesión

- Verifica que el usuario exista en Authentication
- Confirma que las credenciales sean correctas
- Revisa la consola del navegador para errores

## 📚 Recursos Adicionales

- [Documentación de Firebase](https://firebase.google.com/docs)
- [Precios de Firebase](https://firebase.google.com/pricing)
- [Firebase CLI Reference](https://firebase.google.com/docs/cli)

## ✉️ Soporte

Si tienes problemas con la configuración:
1. Revisa la consola del navegador (F12)
2. Revisa los logs de Firebase Console
3. Consulta la documentación oficial de Firebase

---

¡Listo! Ahora tu e-commerce de Dulce Scrap está completamente configurado con Firebase. 🎉
