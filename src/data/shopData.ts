import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase'; 

export interface Product {
  id?: string;
  name: string;
  description: string;
  price: string | number;
  rating: number;
  imageUrl?: string | string[]; 
  badge?: string;
  category: string;
  material?: string; 
  materials?: string[]; 
  sizes?: string[]; 
  stock?: number | ''; 
}

export const HOSTINGER_DOMAIN = "https://rnrenterprise.co.in";
const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1611077544831-29002241eec7?auto=format&fit=crop&q=80&w=800";

// --- ADDED: Professional URL Slug Generator ---
export function generateProductSlug(productName: string): string {
  if (!productName) return 'default-product';
  return productName
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-');        // Replace multiple - with single -
}

// --- UPDATED: Dynamic Predictive Image Resolver ---
// Now accepts the whole Product object to predict missing images
export function resolveImageUrl(product: Product): string {
  if (!product) return FALLBACK_IMAGE;

  // 1. Check if an image is explicitly defined in the database
  const explicitImage = Array.isArray(product.imageUrl) ? product.imageUrl[0] : product.imageUrl;
  
  if (explicitImage && explicitImage.trim() !== '') {
    if (explicitImage.startsWith('http')) {
      return explicitImage;
    }
    const cleanPath = explicitImage.replace(/^\/?(product_images\/)?/, '');
    return `${HOSTINGER_DOMAIN}/product_images/${cleanPath}`;
  }

  // 2. AUTOMATED FALLBACK: If no image is in the DB, predict the Hostinger URL
  // Example: Product Name "Fashion Bag" -> looks for "fashion-bag-front.webp"
  if (product.name) {
    const slug = generateProductSlug(product.name);
    // You can change '-front.webp' to whatever your standard naming convention is
    return `${HOSTINGER_DOMAIN}/product_images/${slug}-front.webp`;
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