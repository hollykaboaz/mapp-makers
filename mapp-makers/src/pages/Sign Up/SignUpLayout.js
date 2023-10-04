import Background from '../../assets/sign_in_background.jpg'
import "../../components/App.css"
import SignUpForm from "./SignUpForm";
export const SignUpLayout = () => {
    return(
        <div className='grid grid-cols-3 max-w-screen-2xl h-screen'>

            <div className='col-span-2 mx-8'>

                <div className='flex flex-row w-full justify-end items-center gap-4 py-4 mb-28'>
                   <p>Already have an account?</p>
                    <button className='px-6 py-2 border-2 border-black rounded-full'> Sign Up </button>
                </div>

                <div className="mx-32">
                    <SignUpForm/>
                </div>

            </div>

            {/*Image*/}
            <div>
                <img className='h-full object-cover' src={Background} alt='empty classroom'/>
            </div>
        </div>
    );
}