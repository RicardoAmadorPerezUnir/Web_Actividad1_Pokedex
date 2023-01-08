import { useState } from "react";

function useContador(intialCount) {
  const [contador, setContador] = useState(intialCount);

  const incrementar = () => {
    setContador((prevCount) => prevCount + 1);
  };

  return { contador, incrementar };
}

export { useContador };