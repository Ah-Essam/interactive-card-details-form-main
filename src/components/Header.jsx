import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const Header = () => {
  const { cardData } = useContext(DataContext);
  const cardNum = cardData.number.padEnd(16, 0);
  return (
    <div
      className="w-full md:w-[35%] h-[30%] md:min-w-75 md:h-screen aspect-2/1 min-h-57.5 max-h-60 md:min-h-screen
    bg-[url(src/assets/images/bg-main-mobile.png)] md:bg-[url(src/assets/images/bg-main-desktop.png)]
    bg-cover bg-center bg-no-repeat relative mb-20 md:mb-0 md:mr-[calc(35%*45/100)]
  "
    >
      <div
        className="w-75 md:w-[90%] md:min-w-90 aspect-[2/1.125] md:max-w-100
      bg-[url(src/assets/images/bg-card-front.png)] bg-cover bg-center bg-no-repeat rounded-md
      absolute bottom-[-20%] left-[5%] md:bottom-auto md:top-[22.5%] md:left-auto md:right-[-25%] z-10
      p-6 flex flex-col justify-between shadow-2xl"
      >
        <img src="src/assets/images/card-logo.svg" className="w-[25%] mb-5" />
        <h2 className="text-white text-sm md:text-xl font-medium tracking-[5px] max-w-full">
          <span>{cardNum.slice(0, 4)}</span> <span>{cardNum.slice(4, 8)}</span>{" "}
          <span>{cardNum.slice(8, 12)}</span>{" "}
          <span>{cardNum.slice(12, 16)}</span>
        </h2>
        <div className="w-full flex justify-between items-center text-white ">
          <p className="tracking-[2px] text-xs">
            {cardData.name ? cardData.name : "Jane Appleseed"}
          </p>
          <p className="tracking-[2px] text-xs">
            <span>{cardData.mm.padStart(2, 0)}</span>/
            <span>{cardData.yy.padStart(2, 0)}</span>
          </p>
        </div>
      </div>
      <div
        className="w-75 md:w-[90%] md:min-w-90 aspect-[2/1.125] md:max-w-100
      bg-[url(src/assets/images/bg-card-back.png)] bg-cover bg-center bg-no-repeat rounded-md
      absolute top-[5%] right-[5%] md:top-auto md:bottom-[22.5%] md:right-[-45%] shadow-2xl 
      "
      >
        <div className="w-full h-full relative top-0 left-0">
          <p className="text-white font-medium absolute text-md tracking-[2px] top-[42.5%] md:top-[44%] right-[10%]">
            {cardData.cvc.padStart(3, 0)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
