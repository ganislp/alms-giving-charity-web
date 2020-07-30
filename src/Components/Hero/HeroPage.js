import React from 'react';
import Grid from '@material-ui/core/Grid';
import HeroTop from './HeroTop/HeroTop';
import HeroBottemOne from './HeroBottemOne/HeroBottemOne';
import HeroBottemTwo from './HeroBottemTwo/HeroBouttomTwo';
import HeroBottemThree from './HeroBottemThree/HeroBottemThree';
import HeroBottemFour from './HeroBottemFour/HeroBottemFour';
import HeroFiveBottem from './HeroBottemFive/HeroBottemFive';
import Footer from '../../Components/Navigation/Header/Footer/Footer';



export default function HeroPage(props){

return(



 <Grid container direction="column" >
<Grid item container >
<HeroTop matchessmd={props.matchessmd}  matchesMdd={props.matchesMdd}/> 
</Grid>
<Grid item  >
 <HeroBottemOne matchesMdd={props.matchesMdd}  matchessmd={props.matchessmd}/> 
</Grid>
<Grid item>
<HeroBottemTwo matchessmd={props.matchessmd} matchesMdd={props.matchesMdd}/>
</Grid>
<Grid item>
<HeroBottemThree matchessmd={props.matchessmd} matchesMdd={props.matchesMdd}/>
</Grid>

<HeroBottemFour matchessmd={props.matchessmd} matchesMdd={props.matchesMdd} matchesxsd={props.matchesxsd}/>

<Grid item>
<HeroFiveBottem matchessmd={props.matchessmd} matchesMdd={props.matchesMdd} matchesxsd={props.matchesxsd}/>
</Grid>
<Grid item>
<Footer matchessmd={props.matchessmd} matchesMdd={props.matchesMdd} matchesxsd={props.matchesxsd}/>
</Grid>
</Grid> 

  
)

 
}