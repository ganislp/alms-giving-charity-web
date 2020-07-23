import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Tabs,Tab} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import routes from '../../../../UI/RoutesConst';

const useStyles = makeStyles(theme => ({
 tab:{
...theme.typography.tab,
minWidth:10,
marginLeft:"25px",

 }
  
  }))

 export default function TabsBuilder(props){
  const tabsOnchangeHandler = (e,newValue) => {
    props.setValue(newValue)
  }

  useEffect(() => {
    routes.forEach(route => {
      switch (window.location.pathname){
        case `${route.link}` :
          if(props.value !== route.activeIndex){
            props.setValue(route.activeIndex)
          }
          break;
          default: break;
      }   

    })


    // return () => {
    //   cleanup
    // }
  }, [props])

const classes = useStyles();
    return(
    <Tabs 
    value={props.value} 
    textColor="secondary" onChange={tabsOnchangeHandler}>
      {routes.map((route,index) => (
        <Tab label={route.label} component={Link} to={route.link}
        key={`${route} ${index}`}
         className={classes.tab}>          
         </Tab>
      ))}
    </Tabs>
    )
  }
