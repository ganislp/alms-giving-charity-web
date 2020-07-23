import React,{useState} from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useTheme from '@material-ui/core/styles/useTheme';
import Appbar from './AppBar/Appbar';
// import routes from '../../UI/RoutesConst';
import HeroPage from '../../Hero/HeroPage'

export default function Header(){
const [value, setValue] = useState(0);

const theme = useTheme();
// const matchesSM = useMediaQuery(theme.breakpoints.down("xs"));
 const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
const matchesSMD = useMediaQuery(theme.breakpoints.down("sm"));

  return(
    <BrowserRouter>
    <Appbar 
    value={value}  
    setValue={setValue} 
    matchessmd={matchesSMD}
    />
    
    {/* <Switch>
    {routes.map(route => (
       <Route exact path={route.link}  component={route.component} key={`${route}`}>

       </Route>
    ))}
    </Switch> */}
    <Switch>
    <Route exact path="/" render={props => (<HeroPage {...props} 
    matchessmd={matchesSMD} matchesMdd={matchesMD}/>
            )}></Route>
    <Route exact path="/aboutus" component={() => <div>Aboutus</div>}></Route>
    <Route exact path="/causes" component={() => <div>Causes</div>}></Route>
    <Route exact path="/callery" component={() => <div>Gallery</div>}></Route>
    <Route exact path="/news" component={() => <div>News</div>}></Route>
    <Route exact path="/contact" component={() => <div>Contact</div>}></Route>
    </Switch>
    </BrowserRouter>
  )
}