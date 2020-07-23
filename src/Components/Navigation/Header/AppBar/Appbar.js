import React from 'react';
import { AppBar, Toolbar, Grid,Hidden } from '@material-ui/core';
import Logo from '../Logo/Logo';
import TabsBuilder from '../AppBar/TabsBuilder/TabsBuilder';
import DrawerBuilder from '../Drawer/DrawerBuilder';
import HeroTopHeader from './HeroTopHeader';
import * as appBarStyles from '../../../UI/NavigationStyles';



export default function Appbar(props) {
  const classes = appBarStyles.useStylesAppBar();
  return (
    <React.Fragment>
      <AppBar position="fixed" className={classes.appbar} >
     
      <HeroTopHeader/>
   
        <Toolbar disableGutters>
            <Grid container
              direction="row"
              justify={props.matchessmd ? "space-between" : "center"}
              alignItems="center" className={classes.appGridContainer}>
              <Grid item  className={classes.logoContaner}>
              <Hidden mdDown>
               <Logo/>
               </Hidden>
              </Grid>
              <Grid item>
                {props.matchessmd ? <DrawerBuilder setValue={props.setValue} value={props.value} /> :
                  <TabsBuilder value={props.value}
                    setValue={props.setValue} />}
              </Grid>
            </Grid>
        </Toolbar>

      </AppBar>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  )
}
