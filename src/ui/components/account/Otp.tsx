import z from "zod";
import Heading from "../home/Heading";
import Close from "../navbar/Close";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const Otp = ({
  onClose,
  serverOtp,
}: {
  onClose: () => void;
  serverOtp: string;
}) => {
  const otpSchema = z.object({
    digits: z
      .array(z.string().regex(/^\d$/, "Must be a digit"))
      .length(4, "Enter all 4 digits"),
  });

  type otpData = z.infer<typeof otpSchema>;
  const otpRefs: (HTMLInputElement | null)[] = [];
  const otpForm = useForm<otpData>({
    resolver: zodResolver(otpSchema),
    defaultValues: { digits: ["", "", "", ""] },
  });
  const handleOtp = async (data: otpData) => {
    const otpCode = data.digits.join("");
    if (otpCode === serverOtp) {
      alert("Otp verified");
    } else alert("Incorrect Otp");
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      {/* Modal content */}
      <div className="bg-white rounded shadow-lg max-w-lg sm:w-full w-[90%] p-6 relative">
        {/* Close button */}
        <div className="absolute top-4 right-4">
          <Close onClose={onClose} />
        </div>{" "}
        {/* Heading */}
        <Heading heading="Log in" size="text-2xl" />
        {/* Form */}
        <form
          className="mt-6 space-y-5"
          onSubmit={otpForm.handleSubmit(handleOtp)}
        >
          {Array.from({ length: 4 }).map((_, idx) => (
            <Controller
              control={otpForm.control}
              key={idx}
              name={`digits.${idx}` as const}
              render={({ field }) => (
                <input
                  {...field}
                  ref={(el) => {
                    otpRefs[idx] = el;
                    return undefined;
                  }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  style={{
                    width: "3rem",
                    height: "3rem",
                    textAlign: "center",
                    fontSize: "1.5rem",
                  }}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "");
                    field.onChange(val);

                    if (val && idx < 3) {
                      otpRefs[idx + 1]?.focus();
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Backspace" && !field.value && idx > 0) {
                      otpRefs[idx - 1]?.focus();
                    }
                  }}
                />
              )}
            />
          ))}
        </form>
      </div>
    </div>
  );
};

export default Otp;
