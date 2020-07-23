import React from 'react';
import Grid from '@material-ui/core/Grid';
import HeroTop from './HeroTop/HeroTop';
import HeroBottemOne from './HeroBottemOne/HeroBottemOne';
import HeroBottemTwo from './HeroBottemTwo/HeroBouttomTwo';
import HeroBottemThree from './HeroBottemThree/HeroBottemThree';
import HeroBottemFour from './HeroBottemFour/HeroBottemFour';
import HeroFiveBottem from './HeroBottemFive/HeroBottemFive'

export default function HeroPage(props){
return(
  <React.Fragment>
 <HeroTop matchessmd={props.matchessmd}  matchesMdd={props.matchesMdd}/> 
<Grid container direction="column" >
<Grid item>
<HeroBottemOne matchesMdd={props.matchesMdd}/>
</Grid>
<Grid item>
<HeroBottemTwo matchessmd={props.matchessmd} matchesMdd={props.matchesMdd}/>
</Grid>
<Grid item >
<HeroBottemThree matchessmd={props.matchessmd} matchesMdd={props.matchesMdd}/> 
</Grid>
<Grid item style={{marginTop:"5em"}}>
<HeroBottemFour matchessmd={props.matchessmd}></HeroBottemFour> 
</Grid>
<Grid item style={{marginTop:"5em"}}>
<HeroFiveBottem matchessmd={props.matchessmd}></HeroFiveBottem> 
</Grid>
</Grid>
 </React.Fragment>
  
)

 
}