import React from "react";
import FormWrapper from "./formWrapper";

function passForm({ password, updateFields }) {
  return (
    <FormWrapper title="Account Creation">
      <label>Password</label>
      <input
        required
        type="password"
        value={password}
        onChange={(e) => updateFields({ password: e.target.value })}
      />
    </FormWrapper>
  );
}

export default passForm;
