import React from "react";
import FormWrapper from "../../../components/FormWrapper";
import TextInput from "../../../components/TextInput";

function EmailForm({ email, updateFields }) {
  return (
    <FormWrapper title="Create An Account">
            <label className='font-light text-gray-600 text-sm'>Email</label>
            <input
                required
                type="email"
                value={email}
                onChange={(e) => updateFields({ email: e.target.value })}
               className='border-gray-200 border rounded w-full p-2  focus:outline-0 '/>
    </FormWrapper>
    
  );
}

export default EmailForm;