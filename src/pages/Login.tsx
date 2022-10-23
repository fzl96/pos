import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  // test
  useEffect(() => {
    document.title = "POS - Login";
  }, []);

  const navigate = useNavigate();

  const signIn = (e: any) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="bg-[#F6F5FA] flex flex-col items-center justify-center h-screen">
      <div className="bg-white w-[500px] h-[600px] flex flex-col items-center justify-center shadow-md rounded-[2rem] gap-5">
        <div>
          <h1 className="font-bold text-4xl mb-10">Login</h1>
        </div>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            className="outline-none bg-[#F6F5FA] rounded-2xl text-lg py-5 px-10 w-[387px]"
            placeholder="Username"
          />
          <input
            type="password"
            className="outline-none bg-[#F6F5FA] rounded-2xl text-lg py-5 px-10 w-[387px]"
            placeholder="Password"
          />
          <button
            className="outline-none bg-[#111827] rounded-2xl text-lg py-5 px-10 w-[387px] text-white"
            onClick={signIn}
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
