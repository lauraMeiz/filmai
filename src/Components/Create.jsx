import { useState } from "react";
import filmas from "../Components/img/movie.svg";

function Create() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <div className="top">
        {" "}
        <input type="search" value={value} onChange={handleChange} />
        <img style={{ width: "30px" }} src={filmas} alt="filmas" />
      </div>
    </>
  );
}
export default Create;
