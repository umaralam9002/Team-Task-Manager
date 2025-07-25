import React from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
import { useState } from 'react';
import { validateEmail } from '../../utils/helper';
import ProfilePhotoSelector from '../../components/Inputs/ProfilePhotoSelector';
import Input from '../../components/Inputs/Input';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminInviteToken, setAdminInviteToken] = useState("");
  const [error, setError] = useState(null);

  // Handle Login Form Submit
    const handleSignUp = async (e) => {
      e.preventDefault();

      if(!fullName){
        setError("Please Enter Full Name")
        return;
      }
  
      if(!validateEmail(email)){
        setError("Please Enter a Valid Email Address")
        return;
      }
  
      if(!password){
        setError("Please Enter the Password")
        return;
      }
  
      setError("");
    };

  return (
    <AuthLayout>
      <div className="lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Create An Account</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">Join us today by entering your details below</p>

        <form onSubmit={handleSignUp}>
          <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              label="Full Name"
              placeholder="Umar"
              type="text"
            />

            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email Address"
              placeholder="umar@example.com"
              type="text"
            />

            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
              placeholder="Min 5 Characters"
              type="password"
            />

            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Admin Invite Token"
              placeholder="6 Digit Code"
              type="text"
            />
          </div>
            {error && (<p className="text-red-500 text-xs pb-2.5">{error}</p>)}

            <button type="submit" className="btn-primary">
              SIGN UP
            </button>
            <p className="text-[13px] text-slate-800 mt-3">
              Already have an account?{" "}
              <Link className="font-medium text-primary underline" to="/login">
                Login
              </Link>
            </p>

          
        </form>
      </div>
    </AuthLayout>
  )
}

export default SignUp
