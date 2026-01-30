// App.tsx - Punto de entrada de la aplicación
import { RouterProvider } from 'react-router';
import { router } from './routes';
import { Toaster } from 'sonner@2.0.3';

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster 
        position="top-right"
        toastOptions={{
          style: {
            background: 'white',
            color: 'black',
            border: '2px solid #ec268f',
            borderRadius: '12px',
            fontFamily: 'Inter, sans-serif'
          },
          className: 'my-toast',
        }}
      />
    </>
  );
}

export default App;
