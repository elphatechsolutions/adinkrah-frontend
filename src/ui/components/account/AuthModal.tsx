import { useState } from "react";
import Register from "./Register";
import Login from "./Login";
import VendorNext from "./VendorNext";
import VendorRegister from "./VendorRegister";
import ResetPassword from "./ResetPassword";
import Otp from "./Otp";

interface AuthModalProps {
  onClose: () => void;
  onOtp: () => void;
  serverOtp: string;
}

type View =
  | "login"
  | "otp"
  | "register"
  | "vendorRegister"
  | "vendorNext"
  | "resetPassword";

const AuthModal = ({ onClose, serverOtp }: AuthModalProps) => {
  const [view, setView] = useState<View>("login");

  const renderView = () => {
    switch (view) {
      case "login":
        return (
          <Login
            onSwitch={() => setView("register")}
            onClose={onClose}
            onReset={() => setView("resetPassword")}
            onOtp={() => setView("otp")}
          />
        );

      case "register":
        return (
          <Register
            onLoginSwitch={() => setView("login")}
            onVendorSwitch={() => setView("vendorRegister")}
            onClose={onClose}
          />
        );

      case "resetPassword":
        return (
          <ResetPassword
            onClose={onClose}
            onBack={() => setView("login")}
            onNext={() => setView("login")}
          />
        );

      case "vendorRegister":
        return (
          <VendorRegister
            onRegisterSwitch={() => setView("register")}
            onNext={() => setView("vendorNext")}
            onClose={onClose}
          />
        );

      case "otp":
        return <Otp onClose={onClose} serverOtp={serverOtp} />;

      case "vendorNext":
        return (
          <VendorNext
            onBack={() => setView("vendorRegister")}
            onClose={onClose}
          />
        );
      default:
        return null;
    }
  };

  return <>{renderView()}</>;
};

export default AuthModal;
