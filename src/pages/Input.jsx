const Input = ({colorValue, setColorValue, hexValue, setHexValue}) => {
  return (
    <div >
      <form onSubmit={(e) => e.preventDefault()}>
        <label className="hidden" htmlFor="addColor">addColor</label>
        <input
        className="w-[300px] rounded-lg shadow-lg border-2 outline-none p-2"
          type="text"
          autoFocus
          placeholder="Add Color Name"
          id="addColor"
          value={colorValue}
          onChange={(e) => setColorValue(e.target.value)}
        //   onChange={(e) => hexColorValue(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Input
