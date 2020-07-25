import React from 'react'
import {Grid} from '@material-ui/core';
import CardBuild from './CardsBuild';
import * as heroBTContatentAndStyles from '../../UI/HeroBOStylesAndContent';



export default function HeroBottemOne(props){
const classes = heroBTContatentAndStyles.useStyles();
  return(
<Grid container justify= {props.matchessmd   ? "center": "space-between"} 
alignItems="center"  className={classes.gridMianContaner}>
{heroBTContatentAndStyles.HeroBottemOneConst.map((data,index) => (
  <Grid item key={`${data.imageName} ${index}`} 
  className={classes.cardItemContaner}>
  <CardBuild 
  heading={data.heading}
  subTitle={data.subTitle}
  image={data.imageUrl}
  imageName={data.imageName}
  />
  </Grid>
)
)}

</Grid>
  )
}
