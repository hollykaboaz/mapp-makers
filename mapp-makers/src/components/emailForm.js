import React from "react";
import FormWrapper from "./formWrapper";

function emailForm({ email, updateFields }) {
  return (
    <FormWrapper title="Account Creation">
      <label>Email</label>
      <input
        autoFocus
        required
        type="email"
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />
    </FormWrapper>
  );
}

export default emailForm;
