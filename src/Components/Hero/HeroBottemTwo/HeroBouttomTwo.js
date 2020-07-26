import React from 'react'
import {Grid,Typography} from '@material-ui/core';
import * as heroBTStylesAndContent from '../../UI/HeroBTStylesAndContent';
import ReadMoreButton from '../../UI/Button/ButtonComp'


export default function HeroBouttomTwo(props){
  const classes = heroBTStylesAndContent.heroBtStyles();

 
  return (
   
  <Grid item className={classes.background} container  >
  <Grid item className={classes.paper} container  justify="flex-start"
   alignItems={props.matchessmd ? "center":"center"}
  direction={props.matchessmd ? "column-reverse":"row"}  >  
  <Grid item>
  <Grid item container direction="column" justify="center" alignItems="center">
  <Grid item>
  <Typography variant="h2"  className={classes.h1Contaner} gutterBottom >
        {heroBTStylesAndContent.HeroBottemTwoConst.heading} 
       </Typography>
  </Grid>
  <Grid item>
  <Typography variant="body1" gutterBottom className={classes.bodyContaner} >
       {heroBTStylesAndContent.HeroBottemTwoConst.body} 
       </Typography>
  </Grid>

  <Grid item container justify="flex-start"  style={{marginBottom:"1em"}}>
  <ReadMoreButton lable={heroBTStylesAndContent.HeroBottemTwoConst.buttonLable}/>   
  </Grid>

    </Grid> 

    </Grid> 
    <Grid item >
    <img src={heroBTStylesAndContent.HeroBottemTwoConst.imageUrl} 
      alt={heroBTStylesAndContent.HeroBottemTwoConst.imageName} className={classes.img}
     ></img>
    </Grid> 
  </Grid>

    </Grid>
 
     

    
  )
}