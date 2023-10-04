import React from "react";

function FormWrapper({ title, children }) {
  return (
    <>
      <h2 className='text-3xl text-center font-medium'>
        {title}
      </h2>
      <div
        className=''
      >
        {children}
      </div>
    </>
  );
}

export default FormWrapper;
