import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import SwipeableDrawer  from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import routes from '../../../UI/RoutesConst';
import * as drawerStyles from '../../../UI/NavigationStyles';


export default function DrawerBuilder(props){
  const classes = drawerStyles.drawerUseStyles();
  const [openDrawer, setOpenDrawer] = useState(false); 
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const openDrawerHandler = () => {
    setOpenDrawer(true);
  }

  const closeDrawerHandler = () => {
    setOpenDrawer(false);
  } 
  const iconButtonDrawerHandler = () => {
    setOpenDrawer(!openDrawer)
    }

    const listItemOnclickHandler = (activeIndex) => {
      setOpenDrawer(false);
      props.setValue(activeIndex);
    }

return(
  <React.Fragment>
 <SwipeableDrawer d
  disableBackdropTransition={!iOS}
 disableDiscovery={iOS}
 open={openDrawer}
 onOpen={openDrawerHandler}
 onClose={closeDrawerHandler}>
<div className={classes.toolbarMargin} />
<List disablePadding >
  {routes.map((route,index) => (
    <ListItem 
    divider
    key={`${route}${index}`}
    component={Link}
    to={route.link}
    button
    selected={props.value === route.activeIndex}
    classes={{ selected: classes.drawerItemSelected }}
    onClick={() => listItemOnclickHandler(route.activeIndex)}
    >
      <ListItemText className={classes.drawerItem} disableTypography>
        {route.label}
      </ListItemText>
    </ListItem>
  ))}
</List>
 </SwipeableDrawer>
 <IconButton disableRipple
 onClick={iconButtonDrawerHandler} 

 className={classes.drawerIconContainer}
  >
 <MenuIcon className={classes.drawerIcon}/> 
</IconButton>
</React.Fragment>
)
}