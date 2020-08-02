import React from 'react'
import { Grid, Typography} from "@material-ui/core";
import * as heroBTStylesAndContent from '../../UI/HeroBTStylesAndContent';
import ReadMoreButton from '../../UI/Button/ButtonComp'


export default function HeroBouttomTwo(props) {
  const classes = heroBTStylesAndContent.heroBtStyles();


  return (

    <Grid item className={classes.background} container  >
      <Grid item className={classes.paper} container justify="center"
        direction={props.matchessmd ? "column-reverse" : "row"}  >

        <Grid item container direction="column" md>
          <Grid item >
            <Typography variant="h2" className={classes.h1Contaner} gutterBottom >
              {heroBTStylesAndContent.HeroBottemTwoConst.heading}
            </Typography>
          </Grid>
          <Grid item >
            <Typography variant="body1" gutterBottom className={classes.bodyContaner} >
              {heroBTStylesAndContent.HeroBottemTwoConst.body}
            </Typography>
          </Grid>
          <Grid item container justify="flex-start" className={classes.lernButton}>
            <ReadMoreButton lable={heroBTStylesAndContent.HeroBottemTwoConst.buttonLable} />
          </Grid>
        </Grid>
        <Grid item md container>
          <img src={heroBTStylesAndContent.HeroBottemTwoConst.imageUrl}
            alt={heroBTStylesAndContent.HeroBottemTwoConst.imageName} className={classes.img}
          ></img>
        </Grid>

      </Grid>
    </Grid>






  )
}