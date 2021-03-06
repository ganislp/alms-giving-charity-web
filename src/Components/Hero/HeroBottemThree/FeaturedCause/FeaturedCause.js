import React from 'react';
import {Grid,Typography,Paper} from '@material-ui/core';
import ReadMoreButton from '../../../UI/Button/ButtonComp'
import * as heroContatentAndStyles from '../../../UI/HeroBottemThreeConst';




export default function FeaturedCause(props){
  const classes = heroContatentAndStyles.useStylesUpcomingEvents();
  const classesFea = heroContatentAndStyles.useStylesFeaturedCause();
  return(
  <Grid container direction="column">
  <Grid item >
  <Typography variant ="h2" className={classes.h2MainContainer} align={props.matchesMdd ? "center" : undefined}>
  {heroContatentAndStyles.FeaturedData.heading}
  </Typography>
  </Grid>
  <Grid item >
  <Paper className={classesFea.paper} elevation={0}>
  <Grid item  >

<Grid container  
justify="center"  className={classesFea.rowContaner} >
<Grid item lg={5} sm={6}>


<img src={heroContatentAndStyles.FeaturedData.imagePath} 
alt={heroContatentAndStyles.FeaturedData.imageName} 
className={classesFea.imgContaner}></img>
</Grid>

<Grid item lg={7} sm={6}>
<Grid item direction="column"    container  justify="center" >
<Grid item >
<Typography variant="h3" className={classesFea.h3container} gutterBottom align={props.matchesMdd ? "center":undefined}>
            {heroContatentAndStyles.FeaturedData.subHeading} 
            </Typography>
</Grid>
<Grid item >
<Typography variant="subtitle1" className={classes.subtitleContainer} gutterBottom align={props.matchesMdd ? "center":undefined}>
{heroContatentAndStyles.FeaturedData.subTitle} 
            </Typography>
</Grid>
<Grid item >

<Typography variant="body1" className={classesFea.bodycontainer} >
            {heroContatentAndStyles.FeaturedData.body}
            </Typography>
       

 </Grid>
 <Grid item container  justify="center">
 <ReadMoreButton lable={heroContatentAndStyles.FeaturedData.buttonLable}/>
 </Grid>
</Grid>
</Grid>

</Grid>
  </Grid>
  </Paper>
 
</Grid>
  
 
 </Grid>


   
  )
}