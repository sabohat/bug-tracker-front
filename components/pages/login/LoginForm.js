import Link from "next/link";
import { useRouter } from "next/router";
const LoginForm = () => {
  const router = useRouter();

  const handleClick = (e, path) => {
    e.preventDefault();

    if (path === "/about") {
      console.log("I clicked on the About Page");
      // then you can:
      // router.push(path)
    }
    if (path === "/posts") {
      console.log("I clicked on the Posts Page");
      // then you can:
      // router.push(path)
    }
  };

  return (
    <div className="flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md border-2 border-green-100 text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Login</h1>

          <input
            type="text"
            className="input-field mb-4"
            name="email"
            placeholder="Email"
            required
          />

          <input
            type="password"
            className="input-field mb-4"
            name="password"
            placeholder="Password"
            required
          />

          <button type="submit" className="button-basic my-1">
            Create Account
          </button>

          <div className="text-center text-sm text-gray-500 mt-4">
            By signing up, you agree to the{" "}
            <a
              className="no-underline border-b border-gray-700 text-gray-700"
              href="#"
            >
              Terms of Service
            </a>
            {"  "}
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
          Do you have an account?{" "}
          <Link href="/users/signup">
            <a className="no-underline border-b border-blue-500 text-blue-500">
              Sign up
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
