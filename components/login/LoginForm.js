import Link from 'next/link'

const LoginInput = () => {
  return (
    <div className="flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <input
            type="text"
            className="outline-none border w-full p-3 border-yellow-200 rounded mb-4 focus:border-green-300"
            name="fullname"
            placeholder="Full Name"
          />

          <input
            type="text"
            className="outline-none block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
          />

          <input
            type="password"
            className=" p-3 mb-4"
            name="password"
            placeholder="Password"
          />
          <input
            type="password"
            className="input-field p-3 mb-4"
            name="confirm_password"
            placeholder="Confirm Password"
          />

          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
          >
            Create Account
          </button>

          <div className="text-center text-sm text-gray-500 mt-4">
            By signing up, you agree to the{" "}
            <a
              className="no-underline border-b border-gray-700 text-gray-700"
              href="#"
            >
              Terms of Service
            </a>{"  "}
            and{" "}
            <a
              className="no-underline border-b border-gray-700 text-gray-700"
              href="#"
            >
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="text-gray-500 mt-6">
          Do not have an account?{" "}
          <Link  href="/login"><a
            className="no-underline border-b border-blue-500 text-blue-500"
           
          >
            Sign Up
          </a></Link>
          
          
        </div>
      </div>
    </div>
  );
};

export default LoginInput;
