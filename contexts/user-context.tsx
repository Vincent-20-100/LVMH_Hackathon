"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { getProductById } from "@/lib/products";

// Types
interface Product {
  id: string;
  name: string;
  image: string;
  isOwner: boolean;
}

interface User {
  firstName: string;
  lastName: string;
  email: string;
  products: Product[];
}

interface UserContextType {
  user: User | null;
  isConnected: boolean;
  isLoading: boolean;
  login: (userData: Omit<User, 'products'>) => void;
  logout: () => void;
  addProduct: (productId: string, productName: string, productImage: string) => void;
  products: Product[];
}

// Context
const UserContext = createContext<UserContextType | undefined>(undefined);

// Provider
export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load user from localStorage on mount (client-side only)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error("Error loading user from localStorage:", error);
        localStorage.removeItem("user");
      }
    }
    setIsLoading(false);
  }, []);

  const login = (userData: Omit<User, "products">) => {
    const againProduct = getProductById("M25877");
    const defaultProducts: Product[] = [];

    if (againProduct && againProduct.images.length > 0) {
      defaultProducts.push({
        id: againProduct.id,
        name: againProduct.name,
        image: againProduct.images[0].src,
        isOwner: true,
      });
    }

    const fullUser: User = { ...userData, products: defaultProducts };
    setUser(fullUser);
    if (typeof window !== 'undefined') {
      localStorage.setItem("user", JSON.stringify(fullUser));
    }
  };

  const logout = () => {
    setUser(null);
    if (typeof window !== 'undefined') {
      localStorage.removeItem("user");
    }
  };

  const addProduct = (productId: string, productName: string, productImage: string) => {
    if (!user) return;

    const newProduct: Product = {
      id: productId,
      name: productName,
      image: productImage,
      isOwner: true,
    };

    const updatedUser = {
      ...user,
      products: [...user.products, newProduct],
    };

    setUser(updatedUser);
    if (typeof window !== 'undefined') {
      localStorage.setItem("user", JSON.stringify(updatedUser));
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        isConnected: !!user,
        isLoading,
        login,
        logout,
        addProduct,
        products: user?.products ?? [],
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

// Hook
export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
