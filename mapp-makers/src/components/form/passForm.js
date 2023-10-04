import React from "react";
import FormWrapper from "./formWrapper";
import TextInput from "../TextInput";

function passForm({ password, updateFields }) {
  return (
    <FormWrapper title="Create An Account">
      <label>Password</label>
      <TextInput
        required
        type="password"
        value={password}
        onChange={(e) => updateFields({ password: e.target.value })}
      />
    </FormWrapper>
  );
}

export default passForm;
