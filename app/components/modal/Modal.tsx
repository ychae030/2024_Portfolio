import React from "react";
type Props = {
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
};

export default function Modal({ isOpen, closeModal, children }: Props) {
  if (!isOpen) return null;

  return (
    <div
      onClick={closeModal}
      className="flex justify-center items-center w-full h-full fixed top-0 left-0 z-50 bg-shadow"
    >
      <div className="w-full" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
