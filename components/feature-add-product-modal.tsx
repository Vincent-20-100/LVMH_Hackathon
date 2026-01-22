"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Scan, ShoppingBag } from "lucide-react";
import { getAllProducts } from "@/lib/products";
import { useUser } from "@/contexts/user-context";

interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AddProductModal({ isOpen, onClose }: AddProductModalProps) {
  const [selectedProductId, setSelectedProductId] = useState<string>("");
  const { user, products: userProducts, addProduct } = useUser();

  // Get all available products
  const allProducts = getAllProducts();

  // Filter out owned products
  const availableProducts = allProducts.filter(
    (product) => !userProducts.some((owned) => owned.id === product.id)
  );

  const handleAddProduct = () => {
    if (!selectedProductId) return;

    const selectedProduct = allProducts.find((p) => p.id === selectedProductId);
    if (!selectedProduct) return;

    // Add product via context
    addProduct(
      selectedProduct.id,
      selectedProduct.name,
      selectedProduct.images[0]?.src || ""
    );

    // Reset and close
    setSelectedProductId("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none p-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="w-full max-w-2xl pointer-events-auto rounded-2xl overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.95)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
              }}
            >
              {/* Header */}
              <div className="relative px-8 py-6 border-b border-neutral-200">
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 p-1.5 text-neutral-500 hover:text-neutral-800 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-6 h-6 stroke-[1.5px]" />
                </button>

                <h2 className="text-2xl md:text-3xl font-light tracking-[0.1em] text-neutral-800 uppercase">
                  Expand Your Collection
                </h2>
                <p className="text-sm text-neutral-600 font-light tracking-wide mt-2">
                  Enrich your Louis Vuitton heritage
                </p>
              </div>

              {/* Content */}
              <div className="px-8 py-8">
                {/* Option 1: Authenticate */}
                <div className="mb-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-neutral-100 rounded-lg">
                      <Scan className="w-6 h-6 text-neutral-700" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium tracking-wide text-neutral-800 mb-2">
                        Register A New Piece
                      </h3>
                      <p className="text-sm text-neutral-600 font-light leading-relaxed mb-4">
                        Bring your creation close to the reader to authenticate it via the integrated NFC chip and add it to your personal collection.
                      </p>

                      {/* Demo Mode - Dropdown Menu */}
                      <div className="bg-amber-50/50 border border-amber-200 rounded-lg p-4">
                        <p className="text-xs text-amber-800 font-medium mb-3 uppercase tracking-wider">
                          Demo Mode
                        </p>
                        <select
                          value={selectedProductId}
                          onChange={(e) => setSelectedProductId(e.target.value)}
                          className="w-full px-4 py-2.5 bg-white border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-neutral-400 transition-all"
                        >
                          <option value="">Select a piece</option>
                          {availableProducts.map((product) => (
                            <option key={product.id} value={product.id}>
                              {product.name} - {product.category} ({product.id})
                            </option>
                          ))}
                        </select>

                        {availableProducts.length === 0 && (
                          <p className="text-xs text-amber-700 mt-2">
                            All products are already in your collection
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-neutral-200" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase tracking-wider">
                    <span className="bg-white px-4 text-neutral-500">or</span>
                  </div>
                </div>

                {/* Option 2: Shop */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-neutral-100 rounded-lg">
                    <ShoppingBag className="w-6 h-6 text-neutral-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium tracking-wide text-neutral-800 mb-2">
                      Discover Our Creations
                    </h3>
                    <p className="text-sm text-neutral-600 font-light leading-relaxed mb-4">
                      Explore our exceptional craftsmanship and be inspired by our latest collections.
                    </p>
                    <a
                      href="https://eu.louisvuitton.com/fra-fr/homepage"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-2.5 border border-neutral-300 text-neutral-800 text-xs tracking-[0.2em] uppercase hover:bg-neutral-100 transition-all duration-300"
                    >
                      Visit the Maison
                    </a>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="px-8 py-6 bg-neutral-50 border-t border-neutral-200 flex justify-end gap-3">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 text-neutral-600 text-xs tracking-[0.2em] uppercase hover:text-neutral-800 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddProduct}
                  disabled={!selectedProductId}
                  className="px-8 py-2.5 bg-black text-white text-xs tracking-[0.2em] uppercase hover:bg-neutral-800 transition-all duration-300 disabled:bg-neutral-300 disabled:cursor-not-allowed"
                >
                  Add to My Collection
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
