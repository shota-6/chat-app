import React, { useRef, useState } from "react";
import { Grid, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { gravatarPath } from "../gravatar";
import MassageField from "./MassageField";
import MassageSubmitField from "./MassageSubmitField";

const useStyles = makeStyles({
  root: {
    gridRow: 2,
    padding: '26px 16px',
  },
});

const MassageInputField = ({ name }) => {
  const inputEl = useRef(null);

  const [text, setText] = useState("");
  const classes = useStyles();
  const avatarPath = gravatarPath(name);
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={1}>
          <Avatar src={avatarPath}/>
        </Grid>
        <Grid item xs={10}>
          <MassageField
            inputEl={inputEl}
            name={name}
            setText={setText}
            text={text}
          />
        </Grid>
        <Grid item xs={1}>
          <MassageSubmitField
            inputEl={inputEl}
            name={name}
            setText={setText}
            text={text}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default MassageInputField;
