import { useState } from "react";

export default function useModal(initialValue = false) {
  const [isOpen, setIsOpen] = useState<boolean>(initialValue);

  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "unset";
  };

  return { isOpen, openModal, closeModal };
}
