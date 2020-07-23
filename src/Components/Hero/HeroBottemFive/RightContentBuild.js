import React from 'react'
import { Grid,Typography } from "@material-ui/core";
import * as heroBFContatentAndStyles from '../../UI/HeroBFStyleAndContent';

export default function RightContentBuild(props){
  const classes = heroBFContatentAndStyles.useStyles();
  return(
    <Grid item >
   
          <Grid container direction="column" spacing={2}>
            <Grid item className={classes.imgContaner}>
              <img src={props.content.imageUrl} alt="props.content.imgName" ></img>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" className={classes.subTitleContaner} align="center">
              {props.content.totalHelped}
              </Typography>
           
            </Grid>
            <Grid item>
            <Typography variant="subtitle2" className={classes.subtitle2Contaner} align="center">
            {props.content.subtitle}
              </Typography>
          
            </Grid>
          </Grid>
        </Grid>
       
  )

}