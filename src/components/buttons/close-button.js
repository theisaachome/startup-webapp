"use client";

export default function CloseButton() {
      const handleClose = () => {
        window.history.back();
      };
    return (
      <button className="close-button" onClick={handleClose}>
        X
      </button>
    );
    }