import React from 'react';
import {Grid,Typography,Button} from '@material-ui/core';
import * as heroContatentAndStyles from '../../../UI/HeroBottemThreeConst';




export default function UpcomingEvents(props){
  const classes = heroContatentAndStyles.useStylesUpcomingEvents();
  return(
  
      <Grid container item justify="center" className={classes.mainContainer}>
      
        <Grid item xs={6} sm={3} md={4} lg={3}  >
         <img src={props.image} alt={props.imageName} className={classes.imgContaner}></img>
        </Grid>
        
          <Grid item container direction="column" xs={6} sm={9} md={8} lg={9}   >
          <Grid item >
            <Typography variant="h3" className={classes.h3container} gutterBottom >
            {props.subHeading}
            </Typography>
          </Grid>
          <Grid item>
          <Typography variant="subtitle1" gutterBottom >
            {props.subTitle}
            </Typography>
          
          </Grid>
        <Grid item>
        <Typography variant="body1" className={classes.bodycontainer} >
            {props.body}
            </Typography>
        </Grid>
        <Grid item container >
            <Button 
       // component={Link}// to="/revolution"
                    className={classes.learnButton}
                    variant="outlined"
                    // onClick={() => props.setValue(2)}
                  >
                    <span>Read More</span>                 
                  </Button>
            </Grid>
          </Grid>
        </Grid>


      
  )
}




