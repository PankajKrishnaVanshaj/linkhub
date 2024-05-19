"use client";

import { useState } from "react";
import InputShortener from "../InputShortener";
import BackgroundAnimate from "../BackgroundAnimate";
import LinkResult from "../LinkResult";

const Home = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container">
      <InputShortener setInputValue={setInputValue} />
      <BackgroundAnimate />
      <LinkResult inputValue={inputValue} />
    </div>
  );
};

export default Home;
