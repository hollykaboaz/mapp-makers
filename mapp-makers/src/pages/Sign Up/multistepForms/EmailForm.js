import React from "react";
import FormWrapper from "../../../components/FormWrapper";
import TextInput from "../../../components/TextInput";

function emailForm({ email, updateFields }) {
  return (
    <FormWrapper title="Create An Account">
        <div className='flex flex-col gap-1'>
            <label className='font-light text-gray-600 text-sm'>Password</label>
            <input
                required
                type="email"
                value={email}
                onChange={(e) => updateFields({ email: e.target.value })}
               className='border-gray-200 border rounded w-full p-2  focus:outline-0 '/>
        </div>

    </FormWrapper>
    
  );
}

export default emailForm;
