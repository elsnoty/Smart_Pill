"use client";

import { useContext, createContext, useState, useCallback } from "react";
import { Toast } from "../types/definitions";
import { ToastContainer } from "@/Components/ui/toast";

interface ToastContextType {
  addToast: (toast: Omit<Toast, "id">) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  // Function to add a toast
  const addToast = useCallback(
    ({ message, type = "info", duration = 3000 }: Omit<Toast, "id">) => {
      const id = Date.now();
      setToasts((prevToasts) => [...prevToasts, { id, message, type }]);

      // Remove toast after the duration
      setTimeout(() => {
        setToasts((prevToasts) =>
          prevToasts.filter((toast) => toast.id !== id)
        );
      }, duration);
    },
    []
  );

  const removeToast = useCallback((id: number) => {
    setToasts((prevToast) => prevToast.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <ToastContainer toasts={toasts} onClose={removeToast} />
    </ToastContext.Provider>
  );
}

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
