import React from 'react';
import FormWrapper from "../../components/FormWrapper";
import TextInput from "../../components/TextInput";
import SecondaryButton from "../../components/SecondaryButton";

function SignInForm() {
    return (
        <form>
            <FormWrapper title="Log In">
                <div className="flex flex-col gap-4" >
                        <TextInput
                            required
                            type="email"
                            label="Email"
                        />
                        <TextInput
                            required
                            type="password"
                            label="Password"
                        />

                    <SecondaryButton text="Log In"/>

                </div>

            </FormWrapper>
        </form>

    );
}

export default SignInForm;