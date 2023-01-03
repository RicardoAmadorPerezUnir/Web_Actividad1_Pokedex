import { useState } from "react";

function useContador(intialCount) {
  const [contador, setContador] = useState(intialCount);

  const incrementar = () => {
    setContador((prevCount) => prevCount + 1);
  };

  const decrementar = () => {
    setContador((prevCount) => Math.max(0, prevCount - 1));
  };

  return { contador, incrementar, decrementar };
}

export { useContador };