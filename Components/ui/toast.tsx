import { Toast as ToastProps } from "@/lib/types/definitions";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";
import { AnimatePresence, motion, Variants } from "framer-motion";

interface ToastContainerProps {
  toasts: ToastProps[];
  onClose: (id: number) => void;
}

export const ToastContainer = (props: ToastContainerProps) => {
  return (
    <div className="fixed max-sm:w-full bottom-6 sm:right-8 z-50 flex flex-col gap-2 ">
      <AnimatePresence>
        {props.toasts.map((toast) => (
          <Toast
            key={toast.id}
            {...toast}
            onClose={() => props.onClose(toast.id)}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

const Toast = ({ message, type = "info" }: ToastProps) => {
  const ToastType: Record<string, { icon: React.ReactNode; bgColor: string }> =
    {
      info: {
        icon: <Icon icon="duo-icons:info" width="20" height="20" />,
        bgColor: "bg-blue-500/60 border-blue-300/40",
      },
      success: {
        icon: <Icon icon="ix:success-filled" width="20" height="20" />,
        bgColor: "bg-green-500/60 border-green-300/30",
      },
      error: {
        icon: <Icon icon="codicon:error" width="20" height="20" />,
        bgColor: "bg-destructive/60 border-destructive/30",
      },
      warning: {
        icon: (
          <Icon
            icon="material-symbols:warning-rounded"
            width="20"
            height="20"
          />
        ),
        bgColor: "bg-orange-400/60 border-orange-300/30",
      },
    };

  const toastVariants: Variants = {
    initial: { opacity: 0, y: 50, scale: 0.9 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 400, damping: 25 },
    },
    exit: {
      opacity: 0,
      y: 20,
      scale: 0.9,
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={toastVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={cn(
        "px-4 md:px-6 py-3 backdrop-blur-lg text-xs md:text-sm flex gap-2 justify-start items-center text-white border rounded-md mx-auto shadow-lg max-sm:w-[calc(100%-2rem)]",
        ToastType[type]?.bgColor || ToastType.info.bgColor
      )}
    >
      {ToastType[type]?.icon || ToastType.info.icon}
      <div>{message}</div>
    </motion.div>
  );
};
