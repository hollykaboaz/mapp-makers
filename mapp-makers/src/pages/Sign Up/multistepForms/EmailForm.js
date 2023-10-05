import React from "react";
import FormWrapper from "../../../components/FormWrapper";
import TextInput from "../../../components/TextInput";

function emailForm({ email, updateFields }) {
  return (
    <FormWrapper title="Create An Account">
      <div className='font-light'>Email</div>
      <TextInput
        required
        type="email"
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />
    </FormWrapper>
    
  );
}

export default emailForm;
