import { CButton } from "@coreui/react";
import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <section className="grid place-items-center h-screen">
      <div className="card bg-white shadow-md flex flex-col justify-center items-center rounded-lg p-6 min-h-[300px] w-[500px] ">
        <h2 className="text-center text-3xl font-bold mb-4">
          Unauthorized Access.
        </h2>
        <p className="text-secondary">Please log in to access this page.</p>
        <br />
        <div className="space-x-4">
          <Link to="/">
            <CButton
              color="secondary"
              className="text-white px-3 !text-sm !font-medium"
            >
              Back Home
            </CButton>
          </Link>
          <Link to="/login">
            <CButton
              color="info"
              className="text-white px-3 !text-sm !font-medium"
            >
              Login
            </CButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Unauthorized;
