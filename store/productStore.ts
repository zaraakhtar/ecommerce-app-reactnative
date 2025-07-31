import { getCategories, getProducts } from "@/lib/api";
import { Product } from "@/type";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface ProductState {
  products: Product[];
  filteredProducts?: Product[];
  categories: string[];
  loading: boolean;
  error: string | null;

  //products actions
  fetchProducts: () => Promise<void>;
  fetchCategories: () => Promise<void>;
}
// Zustand store for managing product data in the application
export const useProductStore = create<ProductState>()(
  persist(
    (set, get) => ({
      products: [],
      filteredProducts: [],
      categories: [],
      loading: false,
      error: null,

      fetchProducts: async () => {
        try {
          set({ loading: true, error: null });
          const products = await getProducts();
          set({ products, filteredProducts: products, loading: false });
        } catch (error: any) {
          set({ error: error, loading: false });
        }
      },
      fetchCategories: async ()=> {
        try {
            set({ loading: true, error: null });
            const categories = await getCategories();
            set({ categories, loading: false });
        } catch (error: any) {
          set({ error: error.message, loading: false });
            
        }
      }
    }),
    {
      name: "product-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
