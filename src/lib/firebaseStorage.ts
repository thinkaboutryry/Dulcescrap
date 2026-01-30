// Funciones para Storage
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { storage } from './firebase';

// Subir imagen
export const uploadImage = async (file: File, path: string) => {
  try {
    const storageRef = ref(storage, path);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    return { success: true, url };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};

// Eliminar imagen
export const deleteImage = async (path: string) => {
  try {
    const storageRef = ref(storage, path);
    await deleteObject(storageRef);
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};

// Obtener URL de imagen
export const getImageUrl = async (path: string) => {
  try {
    const storageRef = ref(storage, path);
    const url = await getDownloadURL(storageRef);
    return { success: true, url };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};
