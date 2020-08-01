import React from "react";
import { Grid, Typography,Paper,Button,Hidden} from "@material-ui/core";
import * as HeroTopConst from '../../../UI/NavigationStyles';


export default function HeroTopHeader(props){
  const classes = HeroTopConst.useStyles();
 


 
return(
          <Paper className={classes.paper} elevation={0}>
           <Grid container justify= {props.matchessmd ? "center":"space-between"} 
           alignItems="center" 
           className={classes.gridMianContaner}>
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
                <Button variant="outlined" 
                 className={classes.donateButton}>Donate Now</Button>           
              </Grid>
              {/* <Grid item >
   
                <Button variant="outlined" onClick={handleClickOpen}
                 className={classes.donateButton}>LogIn</Button>           
              </Grid> */}
             </Grid>
           
          </Paper>
)
}