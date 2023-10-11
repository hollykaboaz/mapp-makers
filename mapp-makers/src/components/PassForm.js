// this component is taken from Dakota's code

import FormWrapper from "./FormWrapper";

export function PassForm({ password, updateFields }) {
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
