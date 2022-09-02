import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import MassageList from "./MassageList";
import MassageInputField from "./MassageInputField";

const useStyles = makeStyles({
    root: {
        display: 'grid',
        height: '100vh',
        gridTemplateRows: '1fr auto',
    },
});

const Main = ({ name }) => {
    const classes = useStyles();
    return (
    <div className={classes.root}>
        <MassageList />

        <MassageInputField />
    </div>
    )
};

export default Main;