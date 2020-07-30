import React from 'react'
import { Grid,Typography } from "@material-ui/core";
import RightContentBuild from './RightContentBuild'
import * as heroBFContatentAndStyles from '../../UI/HeroBFStyleAndContent';

export default function HeroFiveBottem(props){
  const classes = heroBFContatentAndStyles.useStyles();
  return(
 <Grid container className={classes.mainContainer} justify={props.matchesxsd ? "center" : "flex-end"} 
 alignItems={props.matchesxsd ? "center" : "flex-end"}>
   <Grid item direction="column"   sm={12} lg={5}>
<Grid item lg={8}>
<Typography variant="h3" className={classes.h3Contaner}>
         {heroBFContatentAndStyles.HeroBottemFiveLeft.Heading}
          </Typography>
</Grid>
<Grid item lg={10}>
<Typography variant="body1"  className={classes.bodyContaner} >
          {heroBFContatentAndStyles.HeroBottemFiveLeft.boby}
          </Typography>
</Grid>
   </Grid>
   <Grid item direction="column"   style={{}} sm={12} lg={6}>
   <Grid item container justify="flex-start" >
   
     {heroBFContatentAndStyles.HeroBottemFiveRight.map((content,index) =>( 
         <Grid item xs={12} sm={4} className={classes.itemContainer}>
        <Grid container direction="column" justify="center" alignItems="center" >
        <Grid item style={{paddingTop:"1em"}}>
        <img src={content.imageUrl} alt="content.imgName" ></img>  
        </Grid>
        <Grid item >
        <Typography variant="subtitle1"  className={classes.subTitleContaner}>
            {content.totalHelped}
           </Typography>
        </Grid>
        <Grid item >
        <Typography variant="subtitle2"  >
          {content.subtitle}
           </Typography>
        </Grid>
             </Grid>
             </Grid>
   )
               
   )} 
    


 
</Grid>

</Grid>
   
 </Grid>
   
 


        
   

    

  
  )
}