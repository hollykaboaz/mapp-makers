import React from "react";
import FormWrapper from "../../../components/FormWrapper";

function passForm({ password, updateFields }) {
  return (
    <FormWrapper title="Create An Account">
            <label htmlFor="password-input" className='font-light text-gray-600 text-sm'>Password</label>
            <input
                required
                id="password-input"
                type="password"
                value={password}
                onChange={(e) => updateFields({ password: e.target.value })}
                className='border-gray-200 border rounded w-full p-2  focus:outline-0 '/>
    </FormWrapper>
  );
}

export default passForm;
