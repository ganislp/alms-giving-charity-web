import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Hidden } from "@material-ui/core";
import * as heroContatentAndStyles from '../../UI/HeroContantAndStyles';
import ButtonComp from '../../UI/Button/ButtonComp'
export default function OverlayBackroundImage(props) {
  const classes = heroContatentAndStyles.heroTopStyles();

  const useStylesImage = makeStyles(theme => ({
    background: {
      backgroundImage: `url(${props.imageUrl})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "45em",
      width: "100%",

      [theme.breakpoints.down("md")]: {
        height: "26em",
        },

     
      [theme.breakpoints.down("xs")]: {
        height: "14em",
      }, 
      
     

    },
  }));
  const classesImage = useStylesImage();
  return (

    <Grid className={classesImage.background} container >
      <Grid item className={classes.paper} container>
        <Grid container direction="column" justify={props.matchesMdd ? "flex-start": "center" } 
        alignItems={props.matchesMdd || props.matchessmd ? "flex-start":"flex-start"} 
        className={classes.mainContainer} >
          <Grid item >
            <Typography variant="h1" className={classes.h1Contaner} >
              {heroContatentAndStyles.HeroTopHeaderContatent.heading}
            </Typography>

          </Grid>
          < Grid item >
            <Typography variant="h4" className={classes.h4Contaner} >
              {heroContatentAndStyles.HeroTopHeaderContatent.subHeading}
            </Typography>
          </Grid>
          <Hidden xsDown>
            <Grid item >
              <Typography variant="body1"
                className={classes.bodyContainer}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestibulum mauris quis aliquam. Integer accumsan sodales odio, id tempus ullamcorper
        </Typography>
            </Grid>
          </Hidden>
          <Grid item>
            <Grid container item
              justify={ "center"}
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

  )
}