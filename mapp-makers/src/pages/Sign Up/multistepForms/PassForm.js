import React from "react";
import FormWrapper from "../../../components/FormWrapper";
import TextInput from "../../../components/TextInput";

function passForm({ password, updateFields }) {
  return (
    <FormWrapper title="Create An Account">
      <TextInput
        required
        label="Password"
        type="password"
        value={password}
        onChange={(e) => updateFields({ password: e.target.value })}
      />
    </FormWrapper>
  );
}

export default passForm;
