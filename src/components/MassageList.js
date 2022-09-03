import React from "react";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        gridRow: 1,
    },
});

const MassageList = () => {
    const classes = useStyles();
    return <div className={classes.root}>MassageList</div>
};

export default MassageList;