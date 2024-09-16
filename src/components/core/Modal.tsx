import { XMarkIcon } from "@heroicons/react/16/solid";
import { useEffect } from "react";
import LineShimmer from "../shimmerUI/LineShimmer";

interface ModalPropsType {
  isOpen: boolean;
  onClose: () => void;
  title: string | undefined;
  children?: React.ReactNode;
}

const Modal = (props: ModalPropsType) => {
  const { isOpen, title, onClose, children } = props;

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center z-50 transition-colors ${
        isOpen ? "visible bg-black/70" : "invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`w-5/6 md:w-1/2 max-h-[90vh] bg-black text-white border-2 border-red-600 rounded-xl shadow p-4 transition-all ${
          isOpen ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        <h1 className="text-center text-xl md:text-2xl font-semibold mr-5">
          {title ? (
            title
          ) : (
            <div className="mx-auto w-1/2">
              <LineShimmer />
            </div>
          )}
        </h1>
        <button onClick={onClose} className="absolute top-2 right-2">
          <XMarkIcon className="w-8 h-8 text-red-600" />
        </button>
        <div className="max-h-[80vh] overflow-y-auto no-scrollbar no-scrollbar::-webkit-scrollbar mt-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
