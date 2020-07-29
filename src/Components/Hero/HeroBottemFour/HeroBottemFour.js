import React, { useState } from 'react';
import {Grid,IconButton,Typography} from '@material-ui/core';
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
    <Grid  className={classes.background}  container justify="center" >
    <Grid item className={classes.paper} container  justify="center" alignItems="center">  
    <Grid container direction="column" className={classes.slideItemContainer} justify="center" alignItems="center">
    
    <Grid item container justify="flex-start">
       <Typography variant="h3" className={classes.mainh3}>
       <span className={classes.spenH1TextUnderLine}>Our</span> Causes
       </Typography>
       </Grid>
       <Grid item lg={12}  sm={11} xs={11}>
    <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={props.matchesMdd ? 2 : props.matchessmd ? 1 : 3}
          gutter={10}
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
      
   
          </Grid>
      </Grid>

      </Grid>
      
      </Grid>  
 
 

 
  )
}