import React from 'react';
import Grid from '@material-ui/core/Grid';
import UpvomingEventsBuild from './UpcomingEvents/UpvomingEventsBuild';
import FeaturedCause from './FeaturedCause/FeaturedCause'

export default function HeroBottemThree(props){
  return(
    <Grid container direction="row" justify="center" >
   <Grid item>
   <UpvomingEventsBuild matchessmd={props.matchessmd}/>
   </Grid>

   <Grid item>
<FeaturedCause matchesMdd={props.matchesMdd}/>
</Grid>
    </Grid>
  )
}