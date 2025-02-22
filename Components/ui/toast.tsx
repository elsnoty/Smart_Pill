import { Toast as ToastProps } from "@/lib/types/definitions";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";
import { AnimatePresence, motion, Variants } from "framer-motion";

interface ToastContainerProps {
  toasts: ToastProps[];
  onClose: (id: number) => void;
}

const toastVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

export const ToastContainer = (props: ToastContainerProps) => {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      <AnimatePresence>
        {props.toasts.map((toast) => (
          <motion.div
            key={toast.id}
            layout
            initial="initial"
            animate="animate"
            exit="exit"
            variants={toastVariants}
            transition={{
              layout: { type: "spring", stiffness: 300, damping: 30 },
            }}
            className="flex items-center"
          >
            <Toast
              key={toast.id}
              {...toast}
              onClose={() => props.onClose(toast.id)}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

const Toast = ({ message, type = "info" }: ToastProps) => {
  const ToastType: Record<string, { icon: JSX.Element; bgColor: string }> = {
    info: {
      icon: <Icon icon="mdi:information" className="h-5 w-5" />,
      bgColor: "bg-blue-500/60 border-blue-300/40",
    },
    success: {
      icon: <Icon icon="mdi:check-circle" className="h-5 w-5" />,
      bgColor: "bg-green-500/60 border-green-300/30",
    },
    error: {
      icon: <Icon icon="mdi:alert-circle" className="h-5 w-5" />,
      bgColor: "bg-destructive/60 border-destructive/30",
    },
    warning: {
      icon: <Icon icon="mdi:alert" className="h-5 w-5" />,
      bgColor: "bg-orange-400/60 border-orange-300/30",
    },
  };

  return (
    <div
      className={cn(
        "min-w-[200px] rounded-lg border px-4 py-3 shadow-lg backdrop-blur md:px-6",
        ToastType[type]?.bgColor || ToastType.info.bgColor,
      )}
    >
      <div className="flex items-center gap-3">
        {ToastType[type]?.icon || ToastType.info.icon}
        <p className="text-sm text-white">{message}</p>
      </div>
    </div>
  );
};
