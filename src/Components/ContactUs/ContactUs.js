import React from 'react'
import { Grid, Typography, IconButton } from '@material-ui/core';
import { useTheme } from "@material-ui/core/styles";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import SendMessage  from './SendMessage'
import * as contactUsStylesAndContent from '../UI/PagesStylesAndConst';
import * as footerStylesAndContent from '../UI/FooterStyleAndContent';

export default function ContactUs(props) {
  const classes = contactUsStylesAndContent.contactUsUseStyles();
  const classesMain = contactUsStylesAndContent.mainContainer();
  const theme = useTheme();
  return (
    <Grid container justify="flex-start" direction="column" style={{marginBottom:"2em"}}>
      <Grid item className={classes.background} container alignItems="center" >
        <Grid item className={classesMain.paper} container alignItems="center">
          <Grid item className={classesMain.mainHeader}>
            <Typography variant="h1" style={{ fontSize: "3rem", }}>
              {contactUsStylesAndContent.contactUsContent.heading}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item  className={classesMain.root} >
        <Grid container item justify="space-between"  >
          <Grid item   xs={12} md={5} >
          <Grid item container direction="column" >
              <Grid item>
                <Typography variant="h3" style={{ ...theme.typography.h2, paddingBottom: props.matchesMdd ? "1em": "2em" }}>
                  {contactUsStylesAndContent.contactUsContent.subHeading}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" gutterBottom style={{ ...theme.typography.body2, paddingBottom:  props.matchesMdd ? "1em": "2em" }}>
                  {contactUsStylesAndContent.contactUsContent.body}
                </Typography>
              </Grid>

              <Grid item>
                <Grid item className={classes.itemContainer}>
                  <IconButton >
                    <FacebookIcon fontSize="inherit" color="secondary" />
                  </IconButton>
                  <IconButton >
                    <TwitterIcon fontSize="inherit" color="secondary" />
                  </IconButton>
                </Grid>
              </Grid>

              <Grid item  >
                <Grid item container>
                  <Grid item>
                    <PhoneIcon className={classes.iconContainer} color="secondary" />
                  </Grid>
                  <Grid item >
                    <Typography variant="subtitle1"
                      className={classes.subtitle1Contaner} >
                      {footerStylesAndContent.FooterContact.phoneNo}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item container direction="column" >
                <Grid item container>
                  <Grid item>
                    <MailOutlineIcon className={classes.iconContainer} color="secondary" />
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1"
                      className={classes.subtitle1Contaner} >
                      {footerStylesAndContent.FooterContact.email}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item container direction="column" className={classes.addressContainer}>
                <Grid item container>
                  {/* <Grid item>
                    <LocationOnIcon className={classes.iconContainer} color="secondary" />
                  </Grid> */}
                  <Grid item>
                  
                    <Typography variant="subtitle1" >
                    <LocationOnIcon  color="secondary" />    
                     {footerStylesAndContent.FooterContact.address}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item  xs={12} md={7} >
         <SendMessage matchesxsd={props.matchesxsd}/>  
</Grid>
        </Grid>

      </Grid>
      </Grid>




  )

}