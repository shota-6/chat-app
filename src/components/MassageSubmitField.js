import React from "react";
import { IconButton } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

import { PushMessage } from "../firebase";

const MassageSubmitField = ({ name, text, setText }) => {
  return (
    <IconButton 
    disabled={text === ''}
    onClick={ () => { 
        PushMessage({ name: 'test-san', text });
        setText('');
    }}>
      <SendIcon />
    </IconButton>
  );
};

export default MassageSubmitField;
