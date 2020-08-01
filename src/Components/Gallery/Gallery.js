import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import * as gallaeryStylesAndContent from '../UI/PagesStylesAndConst';
import GalleryImages from 'react-grid-gallery';


export default function Gallery(props){
  const classes = gallaeryStylesAndContent.galleryUseStyles();
  const classesMain = gallaeryStylesAndContent.mainContainer();
  return(
    <Grid container justify="flex-start" direction="column" style={{marginBottom:"1em"}}>
    <Grid item className={classes.background} container alignItems="center" >
      <Grid item className={classesMain.paper} container alignItems="center">
        <Grid item className={classesMain.mainHeader}>
          <Typography variant="h1" style={{ fontSize: "3rem", }}>
            {gallaeryStylesAndContent.galleryContent.heading}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
    <Grid item  className={classesMain.root} style={{
            
              
          
               
            
                textAlign: "center",
                background: "white"
                
            }}>
      
    <GalleryImages
    margin={10}
    maxRows={4}
                    images={gallaeryStylesAndContent.galleryImages}
                    enableImageSelection={false}
                />
    </Grid>
    </Grid>
  )
}