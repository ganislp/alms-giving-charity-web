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
        
      <Grid container direction="column" >
        <Grid item>
        <HeroTopHeader matchessmd={props.matchessmd}/>
        </Grid>
        <Grid item >
        <Toolbar disableGutters >
            <Grid container
              direction="row"
              justify={props.matchessmd ? "flex-end" : "space-between"}
              alignItems="center" className={classes.appGridContainer} 
               >
              <Grid item className={classes.logoContaner}>
              <Hidden smDown>
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
        </Grid>

      </Grid>
      </AppBar>
      <div className={classes.toolbarMargin} />
 
    </React.Fragment>
  )
}
