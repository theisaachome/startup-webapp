"use client";

import { useRouter } from "next/navigation";

export default function ModalBackDrop() {
  // This component is used to close the modal when clicked outside of it
  // It is a simple div with a class of modal-backdrop
  const route= useRouter();
  return (
    <div className="modal-backdrop" onClick={route.back} />
    );
    }