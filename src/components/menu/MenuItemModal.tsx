"use client";

import React from "react";
import type { MenuItem } from "@/types/menu";
import { X } from "lucide-react"; // Using lucide-react for icons
import { motion, AnimatePresence } from "framer-motion";

interface MenuItemModalProps {
  item: MenuItem | null;
  isOpen: boolean;
  onClose: () => void;
}

const MenuItemModal: React.FC<MenuItemModalProps> = ({
  item,
  isOpen,
  onClose,
}) => {
  if (!item) return null;

  return (
    <AnimatePresence data-oid="5p8qpul">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={onClose} // Close modal on backdrop click
          data-oid="plepaac"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative bg-black border-2 border-white w-full max-w-lg rounded-lg overflow-hidden shadow-xl shadow-white/20"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal content
            style={{ transform: "skewX(-2deg)" }} // Slight skew for style
            data-oid="s7lxprx"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-10 p-1 bg-white text-black rounded-full hover:bg-gray-300 transition-colors"
              aria-label="Close modal"
              data-oid="9kctd4z"
            >
              <X size={20} strokeWidth={3} data-oid="yeye4o5" />
            </button>

            {/* Optional Image Area */}
            {item.imageUrl && (
              <div
                className="w-full aspect-square bg-gray-800 overflow-hidden"
                data-oid="x2fr305"
              >
                {" "}
                {/* Changed: Removed height, added aspect-square */}
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-full object-cover transition-all duration-300" // Changed: Removed filter, ensured h-full
                  data-oid="6gbgk0f"
                />
              </div>
            )}

            {/* Content Area */}
            <div className="p-6 md:p-8" data-oid="_51ehrl">
              <h2
                className="text-3xl md:text-4xl font-black mb-3 uppercase text-white tracking-tighter"
                style={{
                  fontFamily: '"Impact", "Arial Black", sans-serif',
                  textShadow: "1px 1px 0px #555",
                  transform: "skewX(-5deg)",
                }}
                data-oid="u-9.8.."
              >
                {item.name}
              </h2>

              {item.price && (
                <p
                  className="text-xl font-mono font-semibold mb-4 text-white"
                  data-oid=".ufkn7i"
                >
                  {item.price}
                </p>
              )}

              {item.description && (
                <p
                  className="text-base text-gray-300 font-mono"
                  style={{ lineHeight: "1.6" }}
                  data-oid="ht-8l86"
                >
                  {item.description}
                </p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MenuItemModal;
