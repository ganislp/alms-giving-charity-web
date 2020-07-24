import React from 'react'
import {Grid, Typography} from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import * as footerStylesAndContent from '../../../UI/FooterStyleAndContent';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LocationOnIcon from '@material-ui/icons/LocationOn';

export default function Footer(props){
  const classes = footerStylesAndContent.useStyles();
return(

<Grid  className={classes.background}  container justify="center" >
<Grid item className={classes.paper} container  justify="center" >     
      <Grid item container direction="row"    justify="center" className={classes.rowContaner}>
        <Grid item style={{marginRight:"3em"}}>
          <Typography variant="h3" className={classes.h3ContainerMain}> The Charity
          </Typography>
          <Grid item container direction="column">
            <Grid item>
          <Typography variant="body1" className={classes.bodyContainer}> 
           Lorem ipsum dolor sit amet, con sectetur adipiscing elit. Mauris temp us vestib ulum mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris.Lorem ipsum dolo.</Typography>
          </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.usefullMargin}>
        <Typography variant="h3" className={classes.h3Container}> 
        Useful Links</Typography>
        <Grid item container direction="column">
          <Grid item>
          <Typography variant="subtitle1"
           className={classes.subtitle1Contaner} gutterBottom> 
           Privacy Polticy
           </Typography>
           </Grid>
           <Grid item>
           <Typography variant="subtitle1"
           className={classes.subtitle1Contaner} gutterBottom> 
           Become a Volunteer
           </Typography>
           </Grid>
           <Grid item>
           <Typography variant="subtitle1"
           className={classes.subtitle1Contaner} gutterBottom> 
           Donate
           </Typography>
           </Grid>
           <Grid item>
           <Typography variant="subtitle1"
           className={classes.subtitle1Contaner} gutterBottom> 
           Testimonials
           </Typography>
           </Grid>
           <Grid item>
           <Typography variant="subtitle1"
           className={classes.subtitle1Contaner} gutterBottom> 
           Causes
           </Typography>
           </Grid>
           <Grid item>
           <Typography variant="subtitle1"
           className={classes.subtitle1Contaner} gutterBottom> 
           Portfolio
           </Typography>
           </Grid>
           <Grid item>
           <Typography variant="subtitle1"
          className={classes.subtitle1Contaner} gutterBottom> 
           News
           </Typography>
           </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.leastNewsMargin}>
        <Typography variant="h3" className={classes.h3Container}> 
        Latest News
        </Typography>
        <Grid item container direction="column" >
          <Grid item className={classes.gridItemSpcing}>
          <Typography variant="subtitle1"
           className={classes.subtitle1Contaner} > 
           A new cause to help
           </Typography>
           <Typography variant="caption"
           className={classes.subtitle2Contaner} > 
           MArch 12, 2018
           </Typography>
          </Grid>

          <Grid item className={classes.gridItemSpcing}>
          <Typography variant="subtitle1"
          className={classes.subtitle1Contaner} > 
           A new cause to help
           </Typography>
           <Typography variant="caption"
           className={classes.subtitle2Contaner} > 
           March 12,2018
           </Typography>
          </Grid>

          <Grid item className={classes.gridItemSpcing}>
          <Typography variant="subtitle1"
           className={classes.subtitle1Contaner} > 
           A new cause to help
           </Typography>
           <Typography variant="caption"
          className={classes.subtitle2Contaner} > 
           March 12, 2018
           </Typography>
          </Grid>
        
           </Grid>
        </Grid>
        <Grid item >
          <Typography variant="h3" className={classes.h3Container}> Contact</Typography>
          <Grid item container direction="column" >
            <Grid item container>
              <Grid item>
               <PhoneIcon className={classes.iconContainer}/>
              </Grid>
              <Grid item >
            <Typography variant="subtitle1"
          className={classes.subtitle1Contaner} style={{marginBottom:"1em"}}> 
           +45 677 8993000 223
           </Typography>
           </Grid>
            </Grid>
            </Grid>
            <Grid item container direction="column" >
            <Grid item container>
              <Grid item>
              <MailOutlineIcon className={classes.iconContainer} />
              </Grid>
              <Grid item>
            <Typography variant="subtitle1"
          className={classes.subtitle1Contaner} style={{marginBottom:"1em"}}> 
           office@template.com
           </Typography>
           </Grid>
            </Grid>
            </Grid>
            <Grid item container direction="column" >
            <Grid item container>
              <Grid item>
               <LocationOnIcon className={classes.iconContainer}/>
              </Grid>
              <Grid item>
            <Typography variant="subtitle1"
           className={classes.subtitle1Contaner} style={{maxWidth:"10em"}}> 
          Main Str. no 45-46, b3, 56832,Los Angeles, CA
           </Typography>
           </Grid>
            </Grid>
            </Grid>
          </Grid>
      </Grid>
       
</Grid>
  </Grid>
)
}