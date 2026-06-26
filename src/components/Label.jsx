const Label = ({ htmlFor, text }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="text-[hsl(278,68%,11%)] font-medium tracking-[2px]"
    >
      {text.toUpperCase()}
    </label>
  );
};

export default Label;
