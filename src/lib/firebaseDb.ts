// Funciones para interactuar con Firestore
import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  getDocs, 
  getDoc,
  query,
  where,
  orderBy,
  Timestamp
} from 'firebase/firestore';
import { db } from './firebase';

// Tipos de datos
export interface Product {
  id?: string;
  name: string;
  description: string;
  price: number;
  category: 'toppers' | 'troquelados' | 'archivos';
  subcategory?: string;
  images: string[];
  stock: number;
  featured: boolean;
  createdAt: any;
  updatedAt: any;
}

export interface CartItem {
  productId: string;
  quantity: number;
  product: Product;
}

export interface Order {
  id?: string;
  userId?: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  customerInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  createdAt: any;
}

// PRODUCTOS
export const addProduct = async (product: Omit<Product, 'id'>) => {
  try {
    const docRef = await addDoc(collection(db, 'products'), {
      ...product,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    });
    return { success: true, id: docRef.id };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};

export const updateProduct = async (id: string, product: Partial<Product>) => {
  try {
    const productRef = doc(db, 'products', id);
    await updateDoc(productRef, {
      ...product,
      updatedAt: Timestamp.now()
    });
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};

export const deleteProduct = async (id: string) => {
  try {
    await deleteDoc(doc(db, 'products', id));
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};

export const getProducts = async (category?: string) => {
  try {
    let q;
    if (category) {
      q = query(
        collection(db, 'products'),
        where('category', '==', category),
        orderBy('createdAt', 'desc')
      );
    } else {
      q = query(collection(db, 'products'), orderBy('createdAt', 'desc'));
    }
    
    const querySnapshot = await getDocs(q);
    const products: Product[] = [];
    querySnapshot.forEach((doc) => {
      products.push({ id: doc.id, ...doc.data() } as Product);
    });
    return { success: true, products };
  } catch (error: any) {
    return { success: false, error: error.message, products: [] };
  }
};

export const getProduct = async (id: string) => {
  try {
    const docRef = doc(db, 'products', id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return { success: true, product: { id: docSnap.id, ...docSnap.data() } as Product };
    } else {
      return { success: false, error: 'Producto no encontrado' };
    }
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};

// ÓRDENES
export const createOrder = async (order: Omit<Order, 'id'>) => {
  try {
    const docRef = await addDoc(collection(db, 'orders'), {
      ...order,
      createdAt: Timestamp.now()
    });
    return { success: true, id: docRef.id };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};

export const getOrders = async () => {
  try {
    const q = query(collection(db, 'orders'), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    const orders: Order[] = [];
    querySnapshot.forEach((doc) => {
      orders.push({ id: doc.id, ...doc.data() } as Order);
    });
    return { success: true, orders };
  } catch (error: any) {
    return { success: false, error: error.message, orders: [] };
  }
};
