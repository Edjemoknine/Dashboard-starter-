import { CButton } from "@coreui/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4">
      <Link to="/" className="logo">
        <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
      </Link>
      <Link className="text-white no-underline" to="/login">
        <CButton color="info" className="text-white px-3 !text-sm !font-medium">
          Login
        </CButton>
      </Link>
    </header>
  );
};

export default Header;
