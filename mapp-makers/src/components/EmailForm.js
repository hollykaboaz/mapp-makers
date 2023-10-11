// taken from Dakota's code
import FormWrapper from "./FormWrapper";

export function EmailForm({ email, updateFields }) {
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

