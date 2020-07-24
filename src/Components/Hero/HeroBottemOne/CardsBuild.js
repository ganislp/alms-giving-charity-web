import React from 'react'
import {Typography,Grid} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import * as heroBTContatentAndStyles from '../../UI/HeroBOStylesAndContent';


export default function CardBuild(props){
  const classes = heroBTContatentAndStyles.useStyles();
  return (
  <Card className={classes.cardContainer}  >
       <Grid item direction="column" alignItems= "center" container justify="center"md >
         <Grid item>
       <CardMedia 
        className={classes.media}
        image={props.image}
      />
      </Grid>
      <Grid item md >
      <CardContent>
      <Grid item>
      <Typography variant="h1"   align="center" className={classes.h1Contaner}>
          {props.heading}
        </Typography>
      <Typography variant="body2"  align="center" className={classes.bodyContaner}>
          {props.subTitle}
        </Typography>
        </Grid>
      </CardContent>
      </Grid>
      </Grid>
      </Card>
    
  )
}