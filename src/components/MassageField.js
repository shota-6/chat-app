import React, { useState } from "react";

import { TextField } from "@material-ui/core";
import { PushMessage } from "../firebase";

const MassageField = ({ inputEl, name, text, setText }) => {
  const [isComposed, setIsComposed] = useState(false);

  return (
    <TextField
      inputRef={inputEl}
      autoFocus
      fullWidth={true}
      onChange={(e) => setText(e.target.value)}
      onKeyDown={(e) => {
        if (isComposed) return;

        const text = e.target.value;
        if (text === "") return;

        if (e.key === "Enter") {
          PushMessage({ name, text });
          setText("");
          e.preventDefault();
        }
      }}
      onCompositionStart={() => setIsComposed(true)}
      onCompositionEnd={() => setIsComposed(false)}
      value={text}
    />
  );
};

export default MassageField;
