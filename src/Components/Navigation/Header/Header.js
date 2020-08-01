import React,{useState} from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useTheme from '@material-ui/core/styles/useTheme';
import Appbar from './AppBar/Appbar';
import HeroPage from '../../Hero/HeroPage';
import AboutUs from '../../AboutUs/AboutUs'
import Footer from '../Header/Footer/Footer';
import ContactUs from '../../ContactUs/ContactUs';
import Gallery from '../../Gallery/Gallery';


export default function Header(){
const [value, setValue] = useState(0);

const theme = useTheme();
// const matchesSM = useMediaQuery(theme.breakpoints.down("xs"));
 const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
const matchesSMD = useMediaQuery(theme.breakpoints.down("sm"));
const matchesXSD = useMediaQuery(theme.breakpoints.down("xs"));

  return(
    <BrowserRouter>

      <Appbar 
    value={value}  
    setValue={setValue} 
    matchessmd={matchesSMD}
    matchesMdd={matchesMD}
    />

    
    {/* <Switch>
    {routes.map(route => (
       <Route exact path={route.link}  component={route.component} key={`${route}`}>

       </Route>
    ))}
    </Switch> */}
 
    <Switch>
    <Route exact path="/" render={props => (<HeroPage {...props} 
    matchessmd={matchesSMD} matchesMdd={matchesMD} matchesxsd={matchesXSD}/>
            )}></Route>
    <Route exact path="/aboutus" render={props => (<AboutUs {...props} 
    matchessmd={matchesSMD} matchesMdd={matchesMD} matchesxsd={matchesXSD}/>
            )}></Route>
    <Route exact path="/causes" component={() => <div>Causes</div>}></Route>
    
    <Route exact path="/gallery" render={props => (<Gallery {...props} 
    matchessmd={matchesSMD} matchesMdd={matchesMD} matchesxsd={matchesXSD}/>
            )}></Route>

    <Route exact path="/news" component={() => <div>News</div>}></Route>

    <Route exact path="/contact" render={props => (<ContactUs {...props} 
    matchessmd={matchesSMD} matchesMdd={matchesMD} matchesxsd={matchesXSD}/>
            )}></Route>


    </Switch>
    <Footer matchessmd={matchesSMD} matchesMdd={matchesMD} matchesxsd={matchesXSD}/>
    </BrowserRouter>
  
    
  )
}