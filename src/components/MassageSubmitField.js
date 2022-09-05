import React from "react";
import { IconButton } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

import { PushMessage } from "../firebase";

const MassageSubmitField = ({ inputEl, name, text, setText }) => {
  return (
    <IconButton
      disabled={text === ""}
      onClick={() => {
        PushMessage({ name: "test-san", text });
        setText("");
        inputEl.current.focus();
      }}
    >
      <SendIcon />
    </IconButton>
  );
};

export default MassageSubmitField;
