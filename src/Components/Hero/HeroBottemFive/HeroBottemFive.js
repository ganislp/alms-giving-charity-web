import React from 'react'
import { Grid,Typography } from "@material-ui/core";
import RightContentBuild from './RightContentBuild'
import * as heroBFContatentAndStyles from '../../UI/HeroBFStyleAndContent';

export default function HeroFiveBottem(props){
  const classes = heroBFContatentAndStyles.useStyles();
  return(
    <Grid container justify="center" alignItems="flex-end">
      <Grid item>
        <Grid container direction="column" justify="center" >
          <Grid item>
          <Typography variant="h3" className={classes.h3Contaner}>
         {heroBFContatentAndStyles.HeroBottemFiveLeft.Heading}
          </Typography>
          </Grid>
          <Grid item>
          <Typography variant="body1"  className={classes.bodyContaner}>
          {heroBFContatentAndStyles.HeroBottemFiveLeft.boby}
          </Typography>
          </Grid>
        </Grid>
         
      </Grid>
   
     <Grid item style={{marginLeft:"4em"}}>
        <Grid container   spacing={6} direction=  {props.matchessmd? "column":"row"}>
        {heroBFContatentAndStyles.HeroBottemFiveRight.map((content,index) =>(
         <RightContentBuild content={content} key={`${content.imgName} ${index}`}/>
        )
               
        )}     
        </Grid>
      </Grid>
   
    

    </Grid>
  )
}