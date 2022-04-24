import React, { useState, useCallback } from "react";
import { ChildArea } from "./ChildArea";
import { CssModules } from "./components/CssModules";
import { InlinStyle } from "./components/inlinStyle";
import { Emotion } from "./components/Emotion";


import "./style.scss";

export const App = () => {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const onChangeText = (e) => setText(e.target.value);

  const onClickOpen = () => {
    setOpen(!open);
  };

  const onClickClose = useCallback(() => setOpen(false), []);

  return (
    <div className="App">
      <InlinStyle />
      <CssModules />
      <Emotion/>
    </div>
  );
};
