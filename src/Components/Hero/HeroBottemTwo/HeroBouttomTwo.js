import React from 'react'
import {Grid,Typography,Paper} from '@material-ui/core';
import * as heroBTStylesAndContent from '../../UI/HeroBTStylesAndContent';
import ReadMoreButton from '../../UI/Button/ButtonComp'


export default function HeroBouttomTwo(props){
  const classes = heroBTStylesAndContent.heroBtStyles();
  return (
    <Grid container   direction="column" >
  <Grid item className={classes.background} container  >
  <Paper className={classes.paper}>
    <Grid container direction={props.matchessmd ? "column-reverse":"row"}  justify="center" >
<Grid item >
  <Grid item container direction="column"  
  justify="center" 
   className={classes.columnContaner} alignItems={props.matchessmd || props.matchesMdd ? "center": "flex-start"}>
       <Grid item>
       <Typography variant="h2"  className={classes.h1Contaner} gutterBottom >
        {heroBTStylesAndContent.HeroBottemTwoConst.heading} 
       </Typography>
       <Typography variant="body1" gutterBottom className={classes.bodyContaner} >
       {heroBTStylesAndContent.HeroBottemTwoConst.body} 
       </Typography>
       </Grid>
       <Grid item>
       <ReadMoreButton lable={heroBTStylesAndContent.HeroBottemTwoConst.buttonLable}/>           
      </Grid>
      </Grid>
      </Grid>
      <Grid item>
      <img src={heroBTStylesAndContent.HeroBottemTwoConst.imageUrl} 
      alt={heroBTStylesAndContent.HeroBottemTwoConst.imageName} className={classes.imgContainer}
     ></img>
      </Grid>
      </Grid>
    
  
  </Paper>

    </Grid>
    </Grid>
     

    
  )
}