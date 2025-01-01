import { Toast as ToastProps } from "@/lib/types/definitions";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";

interface ToastContainerProps {
  toasts: ToastProps[];
  onClose: (id: number) => void;
}

export const ToastContainer = (props: ToastContainerProps) => {
  return (
    <div className="fixed max-sm:w-full bottom-6 sm:right-8 z-50 flex flex-col gap-2">
      {props.toasts.map((toast) => (
        <Toast
          key={toast.id}
          {...toast}
          onClose={() => props.onClose(toast.id)}
        ></Toast>
      ))}
    </div>
  );
};

const Toast = ({ message, type = "info" }: ToastProps) => {
  const ToastType = {
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
        <Icon icon="material-symbols:warning-rounded" width="20" height="20" />
      ),
      bgColor: "bg-orange-400/60 border-orange-300/30",
    },
  };

  return (
    <div
      className={cn(
        "px-4 py-3 backdrop-blur-lg text-sm justify-start items-center text-white border rounded-md mx-auto shadow-lg max-sm:w-[calc(100%-2rem)] flex gap-2",
        ToastType[type].bgColor
      )}
    >
      {ToastType[type].icon}
      <div>{message}</div>
    </div>
  );
};
