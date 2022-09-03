import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        gridRow: 2,
    },
});

const MassageInputField = () => {
    const classes = useStyles();
    return <div className={classes.root}>MassageInputField</div>
};

export default MassageInputField;

