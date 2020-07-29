import React from 'react';
import {Grid,Typography} from '@material-ui/core';
import UpcomingEvents from './UpcomingEvents';
import * as heroContatentAndStyles from '../../../UI/HeroBottemThreeConst';


export default function UpvomingEventsBuild(props){
   const classes = heroContatentAndStyles.useStylesUpcomingEvents();
 return(
  <Grid item container direction="column"  justify="center" alignItems={props.matchesMdd ? "center":"flex-start"}>

  <Grid item>
  <Typography variant ="h2" className={classes.h2MainContainer} align={props.matchesMdd ? "center":undefined}>
  {heroContatentAndStyles.HeroBottemThreeConst[0].heading}
  </Typography>
  </Grid>
  <Grid item >
  {heroContatentAndStyles.HeroBottemThreeConst.map((data,index) => (
    <UpcomingEvents subHeading={data.subHeading}
    subTitle={data.subTitle}
    body={data.body}
    image={data.imagePath}
    imageName={data.imageName}
    matchessmd={props.matchessmd}
    key={`${data.subHeading} ${index}`}
    />

  ))}
   </Grid>
     </Grid>
 )

}