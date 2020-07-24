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
          <Typography variant="h3" className={classes.h3ContainerMain}> 
          {footerStylesAndContent.MainFooterHeading.Heading}
          </Typography>
          <Grid item container direction="column">
            <Grid item>
          <Typography variant="body1" className={classes.bodyContainer}> 
          {footerStylesAndContent.MainFooterHeading.boby}</Typography>
          </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.usefullMargin}>
        <Typography variant="h3" className={classes.h3Container}> 
        {footerStylesAndContent.FooterUseFullLinks.Heading}
        </Typography>
        <Grid item container direction="column">
         {footerStylesAndContent.FooterUseFullLinks.links.map((link,index) => (
             <Grid item key={`${link.linkName} ${index}`}>
             <Typography variant="subtitle1"
              className={classes.subtitle1Contaner} gutterBottom> 
              {link.linkName}
              </Typography>
              </Grid>
         ))}
       </Grid>
        </Grid>
        <Grid item className={classes.leastNewsMargin}>
        <Typography variant="h3" className={classes.h3Container}> 
        {footerStylesAndContent.FooterLatestNewsLinks.Heading}
        </Typography>
        <Grid item container direction="column" >
        {footerStylesAndContent.FooterLatestNewsLinks.links.map((link,index) => (
            <Grid item className={classes.gridItemSpcing}>
            <Typography variant="subtitle1"
             className={classes.subtitle1Contaner} > 
            { link.title}
             </Typography>
             <Typography variant="caption"
             className={classes.subtitle2Contaner} > 
             { link.subTitle}
             </Typography>
            </Grid>
         ))}
           </Grid>
        </Grid>
        <Grid item >
          <Typography variant="h3" className={classes.h3Container}> 
          {footerStylesAndContent.FooterContact.Heading}
          </Typography>
          <Grid item container direction="column" >
            <Grid item container>
              <Grid item>
               <PhoneIcon className={classes.iconContainer}/>
              </Grid>
              <Grid item >
            <Typography variant="subtitle1"
          className={classes.subtitle1Contaner} style={{marginBottom:"1em"}}> 
           {footerStylesAndContent.FooterContact.phoneNo}
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
          {footerStylesAndContent.FooterContact.email}
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
         {footerStylesAndContent.FooterContact.address}
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