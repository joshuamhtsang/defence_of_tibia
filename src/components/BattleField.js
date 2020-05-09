import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      background: '#1DA598'
    },
    castle_melee: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
      background: '#7b7780'
    },
    castle_ranged: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
        background: '#7b7780'
    },
    castle_healers: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
        background: '#7b7780'
    },
    enemy_melee: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500
    },
    enemy_ranged: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500
    }
}));

const BattleField = (props) => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="flex-end"
            >
                <Grid item xs className={classes.enemy_ranged}>
                    Enemy (Ranged)
                </Grid>
                <Grid item xs className={classes.enemy_melee}>
                    Enemy (Melee)
                </Grid>
                <Grid item xs className={classes.castle_melee}>
                    Melee
                </Grid>
                <Grid item xs className={classes.castle_ranged}>
                    Ranged
                </Grid>
                <Grid item xs className={classes.castle_healers}>
                    Healers
                </Grid>
            </Grid>
        </div>
    )
}

export default BattleField;
