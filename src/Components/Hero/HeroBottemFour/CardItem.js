import React from 'react';
import {Card,CardContent,CardMedia, Grid,Typography,Button } from "@material-ui/core";

import * as heroBFStylesAndContent from '../../UI/HeroBottemFourContent';


export default function CardItem(props){
  const classes = heroBFStylesAndContent.useStyles();
  return(
    <Grid   item>
    <Card  >
<CardMedia  image={props.contentData.imageUrl} className={classes.cardMediaContainer}
      />
  <CardContent>
    <Grid container direction="column">
    <Grid item>
    <Typography variant="h3" className={classes.cardh3}>
    {props.contentData.heading}
    </Typography>
    </Grid>
    <Grid item>
    <Typography variant="body1"  className={classes.cardbody}>
    {props.contentData.body}
    </Typography>
    </Grid>
    <Grid item container justify="center" alignItems="center" >
    <Button 
       // component={Link}// to="/revolution"
                    className={classes.learnButton}
                    variant="outlined"
                    // onClick={() => props.setValue(2)}
                  >
                    <span>Donate Now</span>                 
                  </Button>
    </Grid>
    </Grid>

  
    </CardContent>
</Card>
</Grid> 

  )
}