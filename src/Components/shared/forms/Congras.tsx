import React from "react";
import { CButton } from "@coreui/react";

const Congras = ({
  setIsContribute,
  setStep,
}: {
  setIsContribute: React.Dispatch<React.SetStateAction<boolean>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div className="flex flex-col gap-6 justify-center items-center p-10 h-full text-center">
      <div>
        <h1 className="mb-4 text-3xl">Thank you for your contribution!</h1>
        <p className="text-secondary text-sm">Your contribution has been submitted successfully.</p>
      </div>
      <div className="flex justify-center gap-6">
        <CButton
          color="success"
          onClick={() => setStep(2)}
          className=" px-4 text-white !text-sm !font-medium"
        >
          Contribute Again
        </CButton>
        <CButton
          color="info"
          className="px-4 text-white !text-sm !font-medium"
          onClick={() => {
            setIsContribute(false);
            setTimeout(() => {
              setStep(1);
            }, 1000);
          }}
        >
          Back Home
        </CButton>
      </div>
    </div>
  );
};

export default Congras;
