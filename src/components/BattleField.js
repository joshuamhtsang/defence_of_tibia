import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Unit from './Unit';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      background: '#1DA598'
    },
    castle_melee_header: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
      height: 65,
      background: '#7b7780',
      alignItems: 'flex-start',
      border: 2,
      borderColor: '#fcb603',
      borderStyle: 'solid'
    },
    castle_ranged_header: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
        height: 65,
        background: '#7b7780',
        border: 2,
        borderColor: '#fcb603',
        borderStyle: 'solid'
    },
    castle_healers_header: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
        height: 65,
        background: '#7b7780',
        border: 2,
        borderColor: '#fcb603',
        borderStyle: 'solid'
    },
    enemy_melee_header: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
        height: 65,
        border: 2,
        borderColor: '#fcb603',
        borderStyle: 'solid'
    },
    enemy_ranged_header: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
        height: 65,
        border: 2,
        borderColor: '#fcb603',
        borderStyle: 'solid'
    }
}));

const BattleField = (props) => {
    const classes = useStyles();

    // Get all castle melee units.
    let meleeUnits = props.garrison.filter(x => x.type === 'melee');

    return(
        <div className={classes.root}>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item xs className={classes.enemy_ranged_header}>
                    Enemy (Ranged)
                </Grid>
                <Grid item xs className={classes.enemy_melee_header}>
                    Enemy (Melee)
                </Grid>
                <Grid item xs className={classes.castle_melee_header}>
                    Melee
                </Grid>
                <Grid item xs className={classes.castle_ranged_header}>
                    Ranged
                </Grid>
                <Grid item xs className={classes.castle_healers_header}>
                    Healers
                </Grid>
            </Grid>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item xs className={classes.enemy_ranged}>
                    
                </Grid>
                <Grid item xs className={classes.enemy_ranged}>
                    
                </Grid>
                <Grid item xs className={classes.castle_melee}>
                    {meleeUnits.map((unit) => {
                        return(
                            <Unit
                                name={unit.name}
                                maxHealth={unit.maxHealth}
                                health={unit.health}
                                type={unit.type}
                                picture={unit.picture}
                            />
                        )
                    })}
                </Grid>
                <Grid item xs className={classes.enemy_ranged}>
                    
                </Grid>
                <Grid item xs className={classes.enemy_ranged}>
                    
                </Grid>
            </Grid>
        </div>
    )
}

export default BattleField;
