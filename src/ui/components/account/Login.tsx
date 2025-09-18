import SpinnerButton from "../animation/SpinnerButton";
import ShowErrorMsg from "../errors/ShowErrorMsg";
import { useNavigate } from "react-router-dom";
import Heading from "../home/Heading";
import Close from "../navbar/Close";
import { useForm, type SubmitHandler } from "react-hook-form";
import { LoginUser } from "../../../api/api.js";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// This tells TypeScript about the module types
interface LoginProps {
  onSwitch: () => void; // go to customer register
  onReset: () => void;
  onClose: () => void;
  onOtp: () => void; // new prop for OTP flow
}
const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Password must be at least 8 characters(s)"),
});

type LoginFields = z.infer<typeof loginSchema>;

const Login = ({ onClose, onSwitch, onReset, onOtp }: LoginProps) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginFields>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const response = await LoginUser({ data, setError });

      // If login is successful, trigger OTP flow
      if (response?.success) {
        onOtp();
      }
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
    }
  };
  return (
    <div className="fixed  mx-auto inset-0 z-50 flex items-center justify-center bg-black/80">
      {/* Modal content */}
      <div className="bg-white rounded shadow-lg max-w-lg p-6 relative sm:w-full w-[90%]">
        {/* Close button */}
        <div className="absolute top-4 right-4">
          <Close onClose={onClose} />
        </div>{" "}
        {/* Heading */}
        <Heading heading="Log in" size="text-2xl" />
        {/* Form */}
        <form className="mt-6 space-y-5" onSubmit={handleSubmit(onSubmit)}>
          {errors.root && (
            <ShowErrorMsg
              message={{
                body: errors.root.message || "Error logging in",
                type: "error",
              }}
            />
          )}

          <div>
            <input
              type="text"
              placeholder="email address *"
              {...register("email")}
              className="w-full border outline-none rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 focus:ring-blue-300"
            />
            {errors.email && (
              <ShowErrorMsg
                message={{
                  body: errors.email.message || "Invalid email",
                  type: "error",
                }}
              />
            )}
          </div>

          <div>
            <input
              type="password"
              {...register("password")}
              placeholder="password *"
              className="w-full border outline-none rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 focus:ring-blue-300"
            />
            {errors.password && (
              <ShowErrorMsg
                message={{
                  body: errors.password.message || "Enter a valid password",
                  type: "error",
                }}
              />
            )}
          </div>

          <p
            className="block text-sm text-blue-600 cursor-pointer"
            onClick={onReset}
          >
            Forgot your password?
          </p>
          <SpinnerButton
            type="submit"
            isSubmitting={isSubmitting}
            disabled={isSubmitting}
          >
            Log in
          </SpinnerButton>
        </form>
        {/* Footer link */}
        <p className="text-center text-sm cursor-pointer">
          New customer?{" "}
          <button
            type="button"
            className="text-blue-600 cursor-pointer"
            onClick={onSwitch}
          >
            Create your account
          </button>
        </p>{" "}
      </div>
    </div>
  );
};

export default Login;
