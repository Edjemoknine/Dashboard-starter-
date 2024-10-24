import { CButton } from "@coreui/react";

interface TermsFormProps {
  setIsContribute: React.Dispatch<React.SetStateAction<boolean>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const TermsForm: React.FC<TermsFormProps> = ({ setIsContribute, setStep }) => {
  // const [errors, setErrors] = useState<null | string>(null);

  // const [accepted, setAccepted] = useState({
  //   acceptedTerms: false,
  //   acceptedPolicy: false,
  // });
  // const { acceptedTerms, acceptedPolicy } = accepted;
  // const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setAccepted({ ...accepted, [e.target.name]: e.target.checked });
  // };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("accepted");
      setStep(2);
    // if (acceptedTerms && acceptedPolicy) {
    //   console.log("accepted");
    // } else {
    //   setErrors("Please accept the terms and conditions to proceed.");
    //   setTimeout(() => setErrors(null), 3000);
    // }
  };

  return (
    <form onSubmit={handleSubmit} className=" p-3 bg-white rounded">
      <h2 className="text-2xl font-bold mb-4">Terms and Conditions</h2>
      <div className="mb-2 h-60 overflow-y-auto border p-4 rounded text-sm text-secondary">
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          auctor,
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          auctor,
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          auctor,
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          auctor,
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          auctor,
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          auctor,
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          auctor,
        </li>
      </div>
      {/* <div className="mb-2">
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={acceptedTerms}
            name="acceptedTerms"
            onChange={handleCheckboxChange}
            className="h-4 w-4 text-green-600 rounded mr-3 border-2 border-gray-300 ring-0 focus:ring-0 focus:ring-offset-0 focus:border-0 cursor-pointer"
          />
          <span>
            I accept <a href="/">Terms and Conditions</a>
          </span>
        </label>
      </div>
      <div className="mb-2">
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={acceptedPolicy}
            name="acceptedPolicy"
            onChange={handleCheckboxChange}
            className="h-4 w-4 text-green-600 rounded mr-3 border-2 border-gray-300 ring-0 focus:ring-0 focus:ring-offset-0 focus:border-0 cursor-pointer"
          />
          <span>
            I accept <a href="/">Privacy Policy</a>
          </span>
        </label>
      </div>
      <div className="h-10 my-3">
        {errors && (
          <p className="text-red-500 text-sm bg-red-100 p-2 rounded px-3">
            {errors}
          </p>
        )}
      </div> */}
      <div className="flex justify-between gap-6 mt-4  w-full">
   
        <CButton color="light" className="px-4 capitalize !text-sm !font-medium "  onClick={() => setIsContribute(false)}>Annuler</CButton>

        <CButton type="submit" color="info" className="px-4 text-white capitalize !text-sm !font-medium ">
          Accepter
        </CButton>
      </div>
    </form>
  );
};

export default TermsForm;
