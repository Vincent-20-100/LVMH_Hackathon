"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

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
  products: Product[];
}

// Context
const UserContext = createContext<UserContextType | undefined>(undefined);

// Provider
export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Demo products data
  const demoProducts: Product[] = [
    {
      id: "M25877",
      name: "Again Bag",
      image: "/louis-vuitton-sac-again--M25877_PM2_Front view.avif",
      isOwner: true, // L'utilisateur est propriétaire de celui-ci pour la démo
    },
    {
      id: "M45856",
      name: "Capucines",
      image: "/luxury-louis-vuitton-capucines-leather-handbag-bro.jpg",
      isOwner: false,
    },
    {
      id: "N41358",
      name: "Neverfull",
      image: "/B&W-louis-vuitton-sac-again--M25877_PM1_Side view.png",
      isOwner: false,
    },
  ];

  // Charger l'utilisateur depuis localStorage au montage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = (userData: Omit<User, 'products'>) => {
    const fullUser: User = { ...userData, products: demoProducts };
    setUser(fullUser);
    localStorage.setItem("user", JSON.stringify(fullUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        isConnected: !!user,
        isLoading,
        login,
        logout,
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
