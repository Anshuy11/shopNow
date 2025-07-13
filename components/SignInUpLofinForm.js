import { Fragment, useContext, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ThemeColor } from "@/context/ThemeContext";
import { AuthContext } from "@/context/AuthContext";
import MessageFunc from "./MessageModal";

const SignInUpLofinForm = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    name: "",
    password: "",
  });
  

  const cancelButtonRef = useRef(null);

  const { theme } = useContext(ThemeColor);
  const {
    handleSubmitSignUp,
    handleSubmitLogin,
    messageText,
    setMessageOpen,
    messageOpen,
    showSignin,
    setShowSignin,
    signUpLoader,
    loginSuccess,
    signUpSuccess,
    setLoginSuccess,
    setSignUpSuccess
  } = useContext(AuthContext);
/* To close or clear the state  */
 useEffect(() => {
 
  if (signUpSuccess) {
    setName("");
    setEmail("");
    setPassword("");
    setSignUpSuccess(false);
  }
  
  if (loginSuccess) {
    setEmail("");
    setPassword("");
    props.setOpen(false);
    setShowSignin(false);
    setLoginSuccess(false);
  }
}, [signUpSuccess, loginSuccess]);
  /* SignUp func */
  const signUpHandleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const newErrors = {
      name: name.trim() === "" ? "Name cannot be empty or just spaces" : "",
      email: !emailRegex.test(email) ? "Please enter a valid email" : "",
      password:
        password.length < 4 || password.length > 50
          ? "Password must be between 4 and 50 characters"
          : "",
    };

    setErrors(newErrors);

    const isValid = Object.values(newErrors).every((err) => err === "");
    if (!isValid) return;

    handleSubmitSignUp({ name, email, password });
   
  };
/* Loginfunc */
  const loginHandleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const newErrors = {
      email: !emailRegex.test(email) ? "Please enter a valid email" : "",
      password:
        password.length < 4 || password.length > 50
          ? "Password must be between 4 and 50 characters"
          : "",
    };

    setErrors(newErrors);

    const isValid = Object.values(newErrors).every((err) => err === "");
    if (!isValid) return;

    handleSubmitLogin({ email, password });
   
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setErrors((prev) => ({
      ...prev,
      email:
        value && !emailRegex.test(value) ? "Please enter a valid email." : "",
    }));
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    setErrors((prev) => ({
      ...prev,
      name: value.trim() === "" ? "Name cannot be empty or just spaces." : "",
    }));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setErrors((prev) => ({
      ...prev,
      password:
        value.length < 4 || value.length > 50
          ? "Password must be between 4 and 50 characters."
          : "",
    }));
  };
  return (
    <>
      <MessageFunc
                message={messageText}
                setMessageOpen={setMessageOpen}
                messageOpen={messageOpen}
                onClose={() => setMessageOpen(false)}
              />
   
    <Transition.Root show={props.open} as={Fragment} className="p-2 m-2 z-[1000] ">
      <Dialog
        as="div"
        className="relative z-50 sm:block"
        initialFocus={cancelButtonRef}
        onClose={() => {
          props.setOpen(false);
          setShowSignin(false);
        }}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0  transition-opacity backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 m-2">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <Dialog.Panel
              className={`relative transform rounded-lg border-gray-300 border  shadow-md ${
                theme == "Light" ? "bg-white" : "bg-gray-700"
              }  overflow-x-auto w-fit   sm:p-6`}
            >
              {/* Your code here */}
            
              <div className="flex justify-end items-end gap-6">
                <div className="mt-2">
                  <button
                    type="button"
                    className="absolute top-3 right-2.5  bg-transparent  rounded-lg text-sm p-1.5 ml-auto inline-flex border border-red-500 dark:hover:bg-red-200 dark:hover:text-white"
                    onClick={() => {
                      props.setOpen(false);
                      setShowSignin(false);
                    }}
                    ref={cancelButtonRef}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#ff002d"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-center h-fit mt-6 ">
                <form
                  onSubmit={showSignin ? signUpHandleSubmit : loginHandleSubmit}
                  className=" p-6 rounded-xl   w-full max-w-sm space-y-4"
                >
                  {showSignin && (
                    <div>
                      <label className="block  mb-1">Name</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => handleNameChange(e)}
                        maxLength={100}
                        className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-300"
                        placeholder="Enter your name"
                        required
                      />{" "}
                      {errors.name && (
                        <p className="text-red-400 text-sm mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>
                  )}

                  <div>
                    <label className="block  mb-1">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => handleEmailChange(e)}
                      className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-300"
                      placeholder="Enter your email"
                      required
                    />{" "}
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block  mb-1">Password</label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        minLength={4}
                        maxLength={50}
                        onChange={(e) => handlePasswordChange(e)}
                        className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-300 pr-10"
                        placeholder="Enter your password"
                        required
                      />{" "}
                      {errors.password && (
                        <p className="text-red-400 text-sm mt-1">
                          {errors.password}
                        </p>
                      )}
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-2 flex items-center text-sm  hover:text-gray-500 cursor-pointer focus:outline-none"
                      >
                        {showPassword ? "Hide" : "Show"}
                      </button>
                    </div>
                  </div>

                  {signUpLoader ? (
                    <div className="w-full cursor-none bg-gray-500 text-white py-2 rounded-lg  transition  animate-pulse text-center">
                      Please wait...
                    </div>
                  ) : (
                    <button
                      type="submit"
                      className="w-full cursor-pointer bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                      {showSignin ? "Sign Up" : "Login"}
                    </button>
                  )}

                  <div
                    onClick={() => setShowSignin(!showSignin)}
                    className={` p-2  text-blue-500  text-center cursor-pointer   rounded-md } `}
                  >
                    {showSignin ? "Login" : "Sign Up"}
                  </div>
                </form>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root> </>

  );
};

export default SignInUpLofinForm;
