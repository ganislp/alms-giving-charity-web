import React, { useState } from 'react';
import {Grid,Paper,IconButton,Hidden,Typography} from '@material-ui/core';
import * as heroBFStylesAndContent from '../../UI/HeroBottemFourContent';
import ItemsCarousel from 'react-items-carousel';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CardItem from './CardItem';


export default function HeroBottemFour(props){
const classes = heroBFStylesAndContent.useStyles();
const [activeItemIndex, setActiveItemIndex] = useState(0);
const chevronWidth = 20;

  return(
    <Grid container   direction="column" >
    <Grid item className={classes.background}  container>
      <Grid item className={classes.paper} container justify="center" alignItems="center">
        <Grid item>
        <Paper  elevation={0}>
      </Paper>
        </Grid>
      <Grid item>
       <Grid item  container >
       <Typography variant="h3" className={classes.mainh3}>
       <span className={classes.spenH1TextUnderLine}>Our</span> Causes
       </Typography>
       </Grid>
      <Grid item>
      <Grid item className={classes.slideItemContainer}>    
    <Hidden xsDown>
  <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={3}
        gutter={40}
        leftChevron={<IconButton  className={classes.leftIconContainer} size="medium" disableRipple>
        <ArrowBackIosIcon fontSize="inherit" />
      </IconButton>}
        rightChevron={<IconButton  className={classes.rightIconContainer} size="medium" disableRipple >
        <ArrowForwardIosIcon fontSize="inherit" />
      </IconButton>}
        outsideChevron
        chevronWidth={chevronWidth}
      >        
        {heroBFStylesAndContent.heroBottemFourSlideCards.map((content,index) => (
  <CardItem key={`${content.id} ${index}`} contentData={content} 
  />
     ))}
      </ItemsCarousel > 
      </Hidden>
      <Hidden smUp>
 
  <CardItem  contentData={heroBFStylesAndContent.heroBottemFourSlideCards[0]} 
  />
  
        </Hidden>
        </Grid>
      </Grid>

      </Grid>
      
      </Grid>  
  </Grid>
 
  </Grid>
 
  )
}