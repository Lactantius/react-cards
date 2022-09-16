import React, { useState } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";

function useToggle(initial) {
  const [state, setState] = useState(initial);
  const toggleState = () => {
    setState((state) => !state);
  };
  return [state, toggleState];
}

function useAxios(url) {
  const [data, setData] = useState([]);
  const requestData = () => {
    axios
      .get(url)
      .then((res) =>
        setData((oldData) => [...oldData, { ...res.data, id: uuid() }])
      );
  };
  return [data, requestData];
}

export { useToggle, useAxios };
