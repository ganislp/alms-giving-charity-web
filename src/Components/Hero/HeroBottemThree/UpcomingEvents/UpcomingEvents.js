import React from 'react';
import {Grid,Typography,Button} from '@material-ui/core';
import * as heroContatentAndStyles from '../../../UI/HeroBottemThreeConst';




export default function UpcomingEvents(props){
  const classes = heroContatentAndStyles.useStylesUpcomingEvents();
  return(
      <Grid item>
      <Grid container item  >
        <Grid item >
         <img src={props.image} alt={props.imageName} className={classes.imgContaner}></img>
        </Grid>
        <Grid item >
          <Grid item container direction="column"  >
          <Grid item >
            <Typography variant="h3" className={classes.h3container} gutterBottom align={props.matchessmd ? "center":undefined}>
            {props.subHeading}
            </Typography>
            <Typography variant="subtitle1" gutterBottom className={classes.subtitleContainer} align={props.matchessmd ? "center":undefined}>
            {props.subTitle}
            </Typography>
            <Typography variant="body1" className={classes.bodycontainer} align={props.matchessmd ? "center":undefined}>
            {props.body}
            </Typography>
       
            </Grid>
            <Grid item container justify={props.matchessmd ? "center":"flex-start"}>
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

      </Grid>

      </Grid>
  )
}




