import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Grid, Typography,Hidden} from '@material-ui/core';
import * as heroContatentAndStyles from '../../UI/HeroContantAndStyles';
import ButtonComp from '../../UI/Button/ButtonComp'

export default function HeroTop(props) {
  const classes = heroContatentAndStyles.heroTopStyles();
  return (
    <Slide
      {...heroContatentAndStyles.heroSlidingProperties}
    >
      {heroContatentAndStyles.HeroslideImages.map((image, index) => (
        <Grid
          className="each-slide"
          key={`${image.ImageName} ${index}`}
          container direction="column">

          <Grid item container
            style={{ 'backgroundImage': `url(${image.imageUrl})` }}
            className={classes.imageContaner}
          >
            <Grid item className={classes.imageOverlayContaner}
             container justify="center" alignItems="center">

              <Grid item container direction="column" 
              className={classes.gridTextContaner} 
              justify="center" alignItems={props.matchesMdd ?"center" : undefined}>

                <Grid item>
                  <Typography variant="h1" className={classes.h1Contaner} >
                    Donate
        </Typography>
                </Grid>

                <Grid item >
                  <Typography variant="h4" className={classes.h4Contaner} >
                    4 a better world
        </Typography>
                </Grid>
                 <Hidden smDown>
                <Grid item >
                  <Typography variant="body1"
                    className={classes.bodyContainer}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestibulum mauris quis aliquam. Integer accumsan sodales odio, id tempus ullamcorper
        </Typography>
                </Grid>
                </Hidden>
                <Grid item>
                  <Grid container item 
                  justify={props.matchesMdd ? "center" : "flex-start"}
                  alignItems="center">
                    {heroContatentAndStyles.HeroTopButtonText.map((buttonLable, index) => (
                      <Grid item key={`${buttonLable} ${index}`}>
                        <ButtonComp lable={buttonLable.lable}>
                        </ButtonComp>
                      </Grid>
                    )

                    )}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

      )
      )}
    </Slide>


  )
}