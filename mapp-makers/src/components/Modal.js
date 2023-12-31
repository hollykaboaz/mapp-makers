import React from 'react'
import { MultipurposeButton } from './MultipurposeButton';


export const Modal = ({open, children, onClose}) => {
  if (!open) return null;

  else return (

    <>
       <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 z-50" />
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-12 z-50">
      <button onClick={onClose} className="absolute top-0.5 right-0 p-2 cursor-pointer">
        x
      </button>
      <div className="overflow-y-auto max-h-[60vh]">
      {children}
      </div>
      </div>
      </>
  );
};