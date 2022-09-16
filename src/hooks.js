import React, { useState } from "react";

function useToggle(initial) {
  const [state, setState] = useState(initial);
  const toggleState = () => {
    setState((state) => !state);
  };
  return [state, toggleState];
}

export { useToggle };
