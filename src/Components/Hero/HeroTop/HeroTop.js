import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import { Grid,IconButton} from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import * as heroContatentAndStyles from '../../UI/HeroContantAndStyles';
import OverlayBackroundImage from './OverlayBackroundImage';

export default function HeroTop(props) {
  const classes = heroContatentAndStyles.heroTopStyles();
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 0;
  return (
    <Grid item className={classes.slideItemContainer} >     
    <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={1}
          gutter={0}
          leftChevron={<IconButton  className={classes.leftIconContainer} size="medium" >
          <ArrowBackIosIcon fontSize="inherit" />
        </IconButton>}
          rightChevron={<IconButton  className={classes.rightIconContainer} size="medium">
          <ArrowForwardIosIcon fontSize="inherit" />
        </IconButton>}
          outsideChevron
          chevronWidth={chevronWidth}
        >
          
          {heroContatentAndStyles.HeroslideImages.map((data,index) => (
   <OverlayBackroundImage imageUrl={data.imageUrl} imgname={data.ImageName} key={`${data.imgname} ${index}`} matchesMdd={props.matchesMdd}/>
       ))}
        </ItemsCarousel> 
          </Grid>
  )
}