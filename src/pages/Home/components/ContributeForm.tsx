import React, { useState } from "react";

import TermsForm from "../../../Components/shared/forms/TermsForm";
import AddWord from "../../../Components/shared/forms/AddWord";
import { useSearchParams } from "react-router-dom";
import AddText from "../../../Components/shared/forms/AddText";
import { CModal, CModalBody, CRow } from "@coreui/react";
import { ThemeProviderContext } from "../../../contexts/ThemeContext";
import Congras from "../../../Components/shared/forms/Congras";

type Props = {
  setIsContribute: React.Dispatch<React.SetStateAction<boolean>>;
  isContribute: boolean;
};

const ContributeForm = ({ setIsContribute, isContribute }: Props) => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");

  const [step, setStep] = useState(1);
  //   const nextStep = () => {
  //     if (step < 3) {
  //       setStep((prevStep) => prevStep + 1);
  //     }
  //   };
  //   const prevStep = () => {
  //     if (step > 1) {
  //       setStep((prevStep) => prevStep - 1);
  //     }
  //   };
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <TermsForm setStep={setStep} setIsContribute={setIsContribute} />
        );
      case 2:
        return type == "word" ? (
          <AddWord setStep={setStep} />
        ) : (
          <AddText setStep={setStep} />
        );

      default:
        return <Congras setIsContribute={setIsContribute} setStep={setStep} />;
    }
  };
  return (
    <ThemeProviderContext>
      <CModal
        visible={isContribute}
        onClose={() => setIsContribute(false)}
        aria-labelledby="LiveDemoExampleLabel"
        // size="lg"
      >
        <CModalBody>
          <div className=" h-full w-full flex justify-center">
            <CRow className="w-full flex justify-center items-center h-full min-h-[400px]  ">
              {renderStep()}
            </CRow>
          </div>
        </CModalBody>
      </CModal>
    </ThemeProviderContext>
  );
};

export default ContributeForm;
