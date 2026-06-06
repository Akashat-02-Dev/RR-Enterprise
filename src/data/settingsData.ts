import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export interface ShopSettings {
  categories: string[];
  materials: string[];
}

export async function getShopSettings(): Promise<ShopSettings> {
  try {
    const docRef = doc(db, 'settings', 'shop_attributes');
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return docSnap.data() as ShopSettings;
    }
    return { categories: [], materials: [] };
  } catch (error) {
    return { categories: [], materials: [] };
  }
}