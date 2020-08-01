import React from 'react'
import { Grid, Typography,Card,CardContent,Button} from '@material-ui/core';
import { useTheme } from "@material-ui/core/styles";
import * as aboutUsStylesAndContent from '../UI/PagesStylesAndConst';
import * as heroBTStylesAndContent from '../UI/HeroBTStylesAndContent';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import ReadMoreButton from '../UI/Button/ButtonComp';
import Avatar from '@material-ui/core/Avatar';

export default function AboutUs(props){
  const classes = aboutUsStylesAndContent.aboutUsUseStyles();
 const classesMain=aboutUsStylesAndContent.mainContainer();
 const btStyles = heroBTStylesAndContent.heroBtStyles();
 const theme = useTheme();
  return (
   
   


  <Grid container justify="flex-start" direction="column">
<Grid item className={classes.background} container alignItems="center" >
<Grid item className={classesMain.paper} container alignItems="center">
  <Grid item className={classesMain.mainHeader}> 
<Typography variant="h1" style={{   fontSize:"3rem",}}>
{aboutUsStylesAndContent.aboutUsBg.heading}
  </Typography>
  </Grid>
</Grid>
</Grid>


  <Grid   item className={classesMain.root} >
  <Grid item   container direction={props.matchessmd ?"column-reverse":"row"}>
 <Grid item container direction="column" md>
          <Grid item >
            <Typography variant="h2" className={btStyles.h1Contaner} gutterBottom style={{color:theme.palette.common.grey}}>
              {heroBTStylesAndContent.HeroBottemTwoConst.heading}
            </Typography> 
          </Grid>
          <Grid item >
            <Typography variant="body1" gutterBottom className={btStyles.bodyContaner} >
              {heroBTStylesAndContent.HeroBottemTwoConst.body}
            </Typography>
          </Grid>
          <Grid item container justify="flex-start" className={btStyles.lernButton}>
            <ReadMoreButton lable={heroBTStylesAndContent.HeroBottemTwoConst.buttonLable} />
          </Grid>
        </Grid>
        <Grid item md container>
          <img src={heroBTStylesAndContent.HeroBottemTwoConst.imageUrl}
            alt={heroBTStylesAndContent.HeroBottemTwoConst.imageName} className={btStyles.img}
          ></img>
        </Grid>
 </Grid>
 
  </Grid>

  <Grid   item className={classesMain.root} >
   <Grid container justify="center" spacing={2}>


  {aboutUsStylesAndContent.aboutUsVoluteers.map((content,index) => (
    
    <Grid item sm={4} key={`${content} ${index}`} style={{paddingBottom:"2em"}}>
    <Card>
    <CardContent>
    <Grid item container direction="column" >
    <Grid item >
    <FormatQuoteIcon color="secondary"/> 
      </Grid>
  <Grid item >
    <Typography variant="subtitle1" className={classes.subtitle1Container}>
  {content.quote}
    </Typography>

  </Grid>
  <Grid item container alignItems="center">
  <Grid item className={classes.avatarItem}>
  <Avatar alt={content.imageName} src={content.imageUrl} className={classes.large} />
  </Grid>
  <Grid item >
 <Typography variant="caption" className={classes.avatarNameContaner}>
{content.voluteerName},<span style={{color:theme.palette.common.blue}}>{content.userType}</span>
 </Typography>
    </Grid>
  </Grid>
</Grid>
</CardContent>

</Card>
</Grid>

  )
    )}



   </Grid>
    </Grid>
    <Grid item >
   <Grid  container alignItems="center" style={{backgroundColor:theme.palette.common.blue,height:"20em"}} justify="center">
  
   <Grid container  alignItems="center" justify="space-between" item className={classes.itemContainer}>
     <Grid item >
     <Typography variant="h2" className={classes.helpush1}>
     {aboutUsStylesAndContent.aboutUsBg.subHeading}

     </Typography>
     </Grid>
     <Grid item>
     <Button 
        // component={Link}// to="/revolution"
        className={classes.learnButton}
         variant="outlined"
         // onClick={() => props.setValue(2)}
          >
         <span className={classes.learnButtonSpan}>Donate now</span>                 
                  </Button>
     </Grid>
     </Grid>
     </Grid>
   </Grid>
   
  
  
 </Grid>
 


 
  

     


    


 
    
 


  
  )
}