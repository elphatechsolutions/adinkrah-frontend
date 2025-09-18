import { useForm, type SubmitHandler } from "react-hook-form";
import { useState } from "react";
import Heading from "../home/Heading";
import Close from "../navbar/Close";
import { z } from "zod";
import SpinnerButton from "../animation/SpinnerButton";
import { RegisterUser } from "../../../api/api";
import ShowErrorMsg from "../errors/ShowErrorMsg";
import { zodResolver } from "@hookform/resolvers/zod";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

interface RegisterProps {
  onClose: () => void;
  onVendorSwitch: () => void;
  onLoginSwitch: () => void;
}
const registerSchema = z
  .object({
    firstname: z.string().min(3, "First name must be al least 3 character(s)"),
    lastname: z.string().min(3, "First name must be al least 3 character(s)"),
    email: z.string().email(),
    phone_number: z
      .string()
      .min(10, "Phone number must be at least 10 digits")
      .regex(/^[0-9]{10,15}$/u, "Please enter a valid phone number"),
    password: z.string().min(8, "Password must be at least 8 characters(s)"),
    confirm_password: z
      .string()
      .min(8, "Password must be at least 8 characters(s)"),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });

type RegisterFields = z.infer<typeof registerSchema>;

const Register = ({
  onClose,
  onVendorSwitch,
  onLoginSwitch,
}: RegisterProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFields>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<RegisterFields> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    RegisterUser({ data, setError });
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      {/* Modal content */}
      <div className="bg-white rounded shadow-lg sm:w-full w-[90%] max-w-lg p-6 relative">
        {/* Close button */}
        <div className="absolute top-4 right-4">
          <Close onClose={onClose} />
        </div>{" "}
        {/* Heading */}
        <Heading heading="Register" size="text-sm" />
        {/* Form */}
        <form className="mt-6 space-y-3" onSubmit={handleSubmit(onSubmit)}>
          {errors.root && (
            <ShowErrorMsg
              message={{
                body: errors.root.message || "Internal server error",
                type: "error",
              }}
            />
          )}
          <div>
            <input
              {...register("firstname")}
              placeholder="firstname*"
              className="w-full border outline-none rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 focus:ring-blue-300"
            />
            {errors.firstname && (
              <ShowErrorMsg
                message={{
                  body:
                    errors.firstname.message ||
                    "Please select an appropriate name",
                  type: "error",
                }}
              />
            )}
          </div>
          <div>
            <input
              {...register("lastname")}
              placeholder="lastname *"
              className="w-full border outline-none rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 focus:ring-blue-300"
            />
            {errors.lastname && (
              <ShowErrorMsg
                message={{
                  body:
                    errors.lastname.message ||
                    "Please select an appropriate name",
                  type: "error",
                }}
              />
            )}
          </div>
          <div>
            <input
              {...register("email")}
              placeholder="email address *"
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
              {...register("phone_number")}
              placeholder=" +233 333 333 333 *"
              className="w-full border outline-none rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 focus:ring-blue-300"
            />
            {errors.phone_number && (
              <ShowErrorMsg
                message={{
                  body: errors.phone_number.message || "Invalid email",
                  type: "error",
                }}
              />
            )}
          </div>
          <div>
            <div className="flex justify-between items-center gap-2 p-2 border border-gray-700 rounded focus-within:outline-none focus-within:ring focus-within:border-blue-300 focus-within:ring-blue-300">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password")}
                placeholder="password *"
                className="w-full border-none outline-none rounded"
              />
              {showPassword ? (
                <IoMdEyeOff onClick={() => setShowPassword(false)} className="cursor-pointer" />
              ) : (
                <IoMdEye onClick={() => setShowPassword(true)} className="cursor-pointer" />
              )}
            </div>
            {errors.password && (
              <ShowErrorMsg
                message={{
                  body: errors.password.message || "Choose a strong password",
                  type: "error",
                }}
              />
            )}
          </div>
          <div>
            <div className="flex justify-between items-center gap-2 p-2 border border-gray-700 rounded focus-within:outline-none focus-within:ring focus-within:border-blue-300 focus-within:ring-blue-300">
              <input
                type={showConfirmPassword ? "text" : "password"}
                {...register("confirm_password")}
                placeholder="confirm password *"
                className="w-full border-none outline-none rounded"
              />
              {showConfirmPassword ? (
                <IoMdEyeOff onClick={() => setShowConfirmPassword(false)} className="cursor-pointer" />
              ) : (
                <IoMdEye onClick={() => setShowConfirmPassword(true)} className="cursor-pointer" />
              )}
            </div>
            {errors.confirm_password && (
              <ShowErrorMsg
                message={{
                  body:
                    errors.confirm_password.message ||
                    "Choose a strong password",
                  type: "error",
                }}
              />
            )}
          </div>
          <SpinnerButton
            type="submit"
            isSubmitting={isSubmitting}
            disabled={isSubmitting}
          >
            Proceed to register
          </SpinnerButton>
        </form>
        {/* Footer link */}
        <div className="flex my-5 gap-5">
          <button
            onClick={onLoginSwitch}
            className="w-1/2 ml-auto text-sm block bg-black text-white py-2 rounded opacity-80 cursor-pointer hover:opacity-100 transition"
          >
            Already have account
          </button>{" "}
          <button
            onClick={onVendorSwitch}
            className="w-1/2 ml-auto text-sm block bg-black text-white py-2 rounded opacity-80 cursor-pointer hover:opacity-100 transition"
          >
            Register as a vendor
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Register;
