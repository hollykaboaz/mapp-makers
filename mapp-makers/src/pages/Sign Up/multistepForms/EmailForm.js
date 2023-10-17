import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import FormWrapper from "../../../components/FormWrapper";
import TextInput from "../../../components/TextInput";

function EmailForm({ email, updateFields }) {
  const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false);

  const handleRecaptchaVerify = (response) => {
    if (response) {
      setIsRecaptchaVerified(true);
    }
  };

  const handleSubmit = () => {
    if (isRecaptchaVerified) {

    } else {
      alert("Please complete the reCAPTCHA");
    }
  };

  return (
    <FormWrapper title="Create An Account">
      <label className="font-light text-gray-600 text-sm">Email</label>
      <input
        required
        type="email"
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
        className="border-gray-200 border rounded w-full p-2 focus:outline-0"
      />

      {/* Add the reCAPTCHA component */}
      <ReCAPTCHA
        sitekey="6LceoKwoAAAAAB_F4pcPRoXvID7ig4wGlWlGg3Qf"
        onChange={handleRecaptchaVerify}
      />

    </FormWrapper>
  );
}

export default EmailForm;
