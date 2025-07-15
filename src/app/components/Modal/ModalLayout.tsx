
import { useOutsideClick } from "../../utils/useOutsideClick";
import { IoChevronBack, IoClose } from "react-icons/io5";
import { Divider } from "../Divider";
import type { ReactNode } from "react";

export function ModalLayout({ children, title, onBack, onClose }: { children: ReactNode, title?: string, maxWidth?: string, onBack?: () => void, onClose: () => void }) {

  const ref = useOutsideClick(onClose)


  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-black/[0.6] z-60 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={ref}
        className={`flex flex-col relative w-full max-w-full max-h-[98dvh] rounded-lg overflow-hidden bg-white border border-gray-100 shadow-sm `}     >

        {/* HEADER */}
        <div className={`flex-shrink-0 sticky top-0 flex flex-col items-center justify-between bg-white py-4 px-8`}>
          {
            // BOTON PARA ATRAS
            !!onBack &&
            <button onClick={onBack} type="button" className=" p-1 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500
            flex absolute top-4 left-2 text-gray-400 bg-transparent hover:text-gray-900 rounded-lg text-sm w-8 h-8 items-center justify-center cursor-pointer"
              aria-label="Back"
            >

              <IoChevronBack className="h-6 w-6 text-gray-600" />
              <span className="sr-only">Back modal</span>
            </button>
          }

          <button onClick={onClose} type="button" className=" hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 flex absolute top-4 right-2 text-gray-400 bg-transparent hover:text-gray-900 rounded-lg text-sm w-8 h-8 items-center justify-center cursor-pointer">
            <IoClose className="h-6 w-6 text-gray-600" />
            <span className="sr-only">Close modal</span>
          </button>
          {
            !!title &&
            <>
              <h2 id="modal-title" className="text-ellipsis text-center text-2xl font-bold text-gray-900">
                {title}
              </h2>
            </>
          }

        </div>
        <Divider />
        <div className="overflow-y-auto bg-gray-100 rounded-lg p-2">
          {children}
        </div>
      </div>
    </div>
  )
}