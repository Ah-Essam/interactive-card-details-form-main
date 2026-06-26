import { useContext } from "react";
import Inp from "./Inp";
import Label from "./Label";
import { DataContext } from "../context/DataContext";
import { handleDataChange, handleSubmit } from "../js/HandlingFunctions";

const Form = () => {
  const { cardData, setCardData, setErrors, setApproved } =
    useContext(DataContext);

  const containerStyle = "w-full flex flex-col gap-2";
  return (
    <form
      className="w-full max-w-120 mx-auto flex flex-col gap-1 p-4"
      method="post"
      onSubmit={(e) => {
        handleSubmit(e, cardData, setErrors, setApproved);
      }}
    >
      <div className={containerStyle}>
        <Label htmlFor={"name"} text={"Cardholder Name"} />
        <Inp
          type="text"
          name={"name"}
          value={cardData.name}
          maxLength={30}
          onChange={(e) => {
            handleDataChange(e, setCardData, setErrors);
          }}
          placeholder={"e.g. Jane Appleseed"}
        />
      </div>
      <div className={containerStyle}>
        <Label htmlFor={"number"} text={"Card Number"} />
        <Inp
          type="text"
          name={"number"}
          maxLength={16}
          value={cardData.number}
          onChange={(e) => {
            handleDataChange(e, setCardData, setErrors);
          }}
          placeholder={"e.g. 1234 5678 9123 0000"}
        />
      </div>
      <div className="w-full flex gap-2 mb-5">
        <div className={containerStyle}>
          <Label
            htmlFor={cardData.mm.length > 2 ? "yy" : "mm"}
            text={"Exp. Date (MM/YY)"}
          />
          <div className="w-full flex gap-2">
            <Inp
              type="text"
              maxLength={2}
              name={"mm"}
              placeholder={"MM"}
              value={cardData.mm}
              onChange={(e) => {
                if (e.target.value > 12) return;
                handleDataChange(e, setCardData, setErrors);
              }}
            />
            <Inp
              type="text"
              maxLength={2}
              name={"yy"}
              placeholder={"YY"}
              value={cardData.yy}
              onChange={(e) => {
                handleDataChange(e, setCardData, setErrors);
              }}
            />
          </div>
        </div>
        <div className={containerStyle}>
          <Label htmlFor={"cvc"} text={"CVC"} />
          <Inp
            type="text"
            name={"cvc"}
            maxLength={3}
            placeholder={"e.g. 123"}
            onChange={(e) => {
              handleDataChange(e, setCardData, setErrors);
            }}
            value={cardData.cvc}
          />
        </div>
      </div>
      <button className="w-full rounded-md bg-[hsl(278,68%,11%)] p-3 text-white font-medium cursor-pointer">
        Confirm
      </button>
    </form>
  );
};

export default Form;
