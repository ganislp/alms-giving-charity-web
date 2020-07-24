import React from "react";
import { Grid, Typography,Paper,Button,Hidden } from "@material-ui/core";
import * as HeroTopConst from '../../../UI/NavigationStyles'

export default function HeroTopHeader(){
  const classes = HeroTopConst.useStyles();
return(
          <Paper className={classes.paper} elevation={0}>
           <Grid container justify="space-evenly" alignItems="center" >
           <Hidden smDown>
             <Grid item>
             <Typography variant="caption" className={classes.textStyle}>
                  MAIL: {HeroTopConst.TOP_HADER_INFO.mail}</Typography>
             </Grid>
             <Grid item>
             <Typography variant="caption" className={classes.textStyle}>
             PHONE : {HeroTopConst.TOP_HADER_INFO.phone}</Typography>
             </Grid>
             </Hidden>
              <Grid item >
                <Button variant="caption" 
                 className={classes.donateButton}>Donate Now</Button>           
              </Grid>
             </Grid>
           
          </Paper>
)
}