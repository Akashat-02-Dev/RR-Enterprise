import { collection, getDocs, doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase'; 

export interface Product {
  id?: string;
  name: string;
  description: string;
  price: string | number;
  rating: number;
  imageUrl?: string; 
  imageUrls?: string[]; 
  badge?: string;
  category: string;
  material?: string; 
  materials?: string[]; 
  sizes?: string[]; 
  stock?: number | ''; 
}

export async function getProducts(): Promise<Product[]> {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Product));
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}