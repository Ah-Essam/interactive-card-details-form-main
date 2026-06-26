import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const ApprovedPage = () => {
  const { setApproved, setCardData, setErrors } = useContext(DataContext);
  return (
    <div className="w-full max-w-80 mx-auto flex flex-col items-center gap-4">
      <img src="src/assets/images/icon-complete.svg" className="w-20" />
      <h2 className="text-2xl tracking-[2px]">Thank you!</h2>
      <p className="text-md text-[hsl(212,12%,71%)] ">
        We've added your card details
      </p>
      <button
        onClick={() => {
          setApproved(false);
          setCardData({ name: "", number: "", mm: "", yy: "", cvc: "" });
          setErrors({ name: "", number: "", mm: "", yy: "", cvc: "" });
        }}
        className="w-full rounded-md bg-[hsl(278,68%,11%)] p-3 text-white font-medium cursor-pointer mt-5"
      >
        Continue
      </button>
    </div>
  );
};

export default ApprovedPage;
