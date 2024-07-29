
const Box = ({ colorValue, textChange }) => {
  return (
    <div
      className={`w-[300px] h-[300px] border-2 border-black rounded-md bg-[${colorValue}] flex flex-col justify-center items-center gap-10 ${
        textChange ? "text-black" : "text-white"
      }
`}
      style={{ backgroundColor: colorValue }}
    >
      <p>{colorValue ? colorValue : "Empty Value"}</p>
    </div>
  );

  de;
};

export default Box
