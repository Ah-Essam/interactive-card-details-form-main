import { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import { handleDataChange } from "../js/HandlingFunctions";

const Inp = ({
  type = " text",
  name,
  maxLength,
  placeholder,
  onChange,
  value,
}) => {
  const { setCardData, setErrors, errors } = useContext(DataContext);
  const errorStyle = () => {
    if (errors[name]) {
      return { borderColor: "red" };
    } else {
      return { borderColor: "hsl(212,12%,71%)" };
    }
  };
  useEffect(() => {}, [errors]);
  return (
    <div className="w-full">
      <div className="inp-container w-full h-12.5 rounded-md overflow-hidden flex items-center justify-center relative">
        <input
          type={type}
          name={name}
          id={name}
          maxLength={maxLength}
          placeholder={placeholder}
          onChange={onChange}
          onClick={(e) => {
            handleDataChange(e, setCardData, setErrors);
          }}
          value={value}
          style={errorStyle()}
          className="w-[calc(100%-2px)] h-[calc(100%-2px)] p-3 rounded-md outline-0 border bg-white z-10 border-[hsl(212,12%,71%)] cursor-pointer placeholder:font-medium placeholder:text-md placeholder:text-[hsl(212,12%,71%)]"
        />
        <span className="absolute w-full h-full"></span>
      </div>
      <span className="text-[12px] h-2 inline-block text-[hsl(0,100%,66%)]">
        {errors[name]}
      </span>
    </div>
  );
};

export default Inp;
