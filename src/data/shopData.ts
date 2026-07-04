import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase'; 

export interface Product {
  id?: string;
  name: string;
  description: string;
  price: string | number;
  rating: number;
  imageUrl?: string | string[]; // Can be a string or array of strings from Firebase
  badge?: string;
  category: string;
  material?: string; 
  materials?: string[]; 
  sizes?: string[]; 
  stock?: number | ''; 
}

export const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1611077544831-29002241eec7?auto=format&fit=crop&q=80&w=800";

// --- CLEAN FIREBASE IMAGE RESOLVER ---
export function resolveImageUrl(product: Product): string {
  if (!product || !product.imageUrl) return FALLBACK_IMAGE;

  // Extract the first image if Firebase stored it as an array
  const explicitImage = Array.isArray(product.imageUrl) ? product.imageUrl[0] : product.imageUrl;
  
  // Validate and return the exact Firebase URL
  if (explicitImage && typeof explicitImage === 'string' && explicitImage.trim() !== '') {
    if (explicitImage.startsWith('http')) {
      return explicitImage; // Returns the exact Firebase Storage URL with all tokens intact
    }
    // If you happen to have a local path like "/product_images/x.png", allow it
    if (explicitImage.startsWith('/')) {
      return explicitImage;
    }
  }

  return FALLBACK_IMAGE;
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

export async function getProductById(id: string): Promise<Product | null> {
  try {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as Product;
    }
    return null;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}