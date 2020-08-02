import React from 'react'
import Grid from "@material-ui/core/Grid";
import UpvomingEventsBuild from './UpcomingEvents/UpvomingEventsBuild';
import FeaturedCause from './FeaturedCause/FeaturedCause';
import * as heroContatentAndStyles from '../../UI/HeroBottemThreeConst';


export default function HeroBottemThree(props){
  const classes = heroContatentAndStyles.useStyles();
  return(
    <Grid container direction="row"  className={classes.mainRowContainer}
     >
   <Grid item md>
   <UpvomingEventsBuild matchessmd={props.matchessmd}/>
   </Grid>

   <Grid item md>
<FeaturedCause matchesMdd={props.matchesMdd}/>
</Grid>
    </Grid>
  )
}