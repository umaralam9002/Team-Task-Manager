import AuthLayout from '../../components/layouts/AuthLayout';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Inputs/Input';
import { Link } from 'react-router-dom';
import { validateEmail } from '../../utils/helper';
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Handle Login Form Submit
  const handleLogin = async (e) => {
    e.preventDefault();

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
     <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Welcome Back</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">Please Enter Your Details to Login</p>

        <form onSubmit={handleLogin}>
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

          {error && (<p className="text-red-500 text-xs pb-2.5">{error}</p>)}

            <button type="submit" className="btn-primary">
              LOGIN
            </button>
            <p className="text-[13px] text-slate-800 mt-3">
              Don't have an account?{" "}
              <Link className="font-medium text-primary underline" to="/signup">
                SignUp
              </Link>
            </p>
        </form>
      </div>

      
  </AuthLayout>
  )
}

export default Login
