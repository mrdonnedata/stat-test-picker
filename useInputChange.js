import { useState } from "react";

const useInputChange = () => {
  const [select, setInput] = useState({
    design: "One Sample",
    sampletype: "NA-OneSample/Correlation",
    datatype: "Nominal"
  });
  console.log(select);

  const handleInputChange = (e) => {
    setInput({ ...select, [e.currentTarget.name]: e.currentTarget.value });
    
  };

  return [select, handleInputChange];
};

export default useInputChange;
