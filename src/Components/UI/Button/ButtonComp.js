import React from 'react';
import {Button} from '@material-ui/core';
import * as heroContatentAndStyles from '../HeroContantAndStyles';

export default function ButtonComp(props){
  const classes = heroContatentAndStyles.heroTopStyles();
  return(
    <Button 
        // component={Link}// to="/revolution"
        className={classes.learnButton}
         variant="outlined"
         // onClick={() => props.setValue(2)}
          >
         <span className={classes.learnButtonSpan}>{props.lable}</span>                 
                  </Button>
  )

}