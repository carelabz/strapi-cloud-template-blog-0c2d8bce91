"use client";
import { createContext, useState, useContext } from "react";

const ContactModalContext = createContext();

export const ContactModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // Make global function for usage anywhere (optional)
  if (typeof window !== "undefined") {
    window.openContactModal = openModal;
  }

  return (
    <ContactModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ContactModalContext.Provider>
  );
};

export const useContactModal = () => useContext(ContactModalContext);
