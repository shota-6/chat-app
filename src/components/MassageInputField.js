import React from "react";
import { Grid, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        gridRow: 2,
        margin: '26px',
    },
});

const MassageInputField = () => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={1}>
                    <Avatar />
                </Grid>
                <Grid item xs={10}>input</Grid>
                <Grid item xs={1}>button</Grid>
            </Grid>
        </div>
    ) 
};

export default MassageInputField;

