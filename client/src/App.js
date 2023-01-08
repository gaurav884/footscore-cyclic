
import "./App.css"
import "./components/navbar/Navbar.css"
import "./components/pages/highlights/Highlights.css"
import "./components/pages/highlights/Modal.css"
import "./components/footer/Footer.css"
import "./components/pages/home/Carousel.css"
import "./components/pages/Leagues/Leagues.css"
import "./components/pages/Leagues/Table.css"
import "./components/pages/home/Home.css"
import "./components/pages/home/Features.css"
import  "./components/pages/stats/Stats.css"
import "./components/pages/stats/Result.css"

import { Link, animateScroll as scroll } from "react-scroll";
import { FaArrowCircleUp } from "react-icons/fa";
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { BrowserRouter as Router, Route, Switch ,Redirect} from "react-router-dom"
import Home from "./components/pages/home/Home"
import Leagues from "./components/pages/Leagues/Leagues"
import Highlights from "./components/pages/highlights/Highlights"
import Footer from "./components/footer/Footer.js"
import Stats from "./components/pages/stats/Stats"
import FOF from "./components/pages/ERRORS/FOF"
import FIVEOO from "./components/pages/ERRORS/FIVEOO";


function App() {
    
  


  return (
    <>
      <Router>

        <Switch>
          <Route path="/highlights" exact component={Highlights} />
          <Route path="/leagues" exact component={Leagues} />
          <Route path="/" exact component={Home} />
          <Route path="/stats" exact component={Stats} />
          <Route path="/ERROR404/doifgjdf3sdfsdf3ojgiodhgiodhgf" exact component={FOF} />
          <Route path="/ERROR505/doifgjdof34trgjdio234532fsdjgiodhgiodhgf" exact component={FIVEOO} />
          <Route path="*" render={() => <Redirect to='/ERROR404/doifgjdf3sdfsdf3ojgiodhgiodhgf' />} />
        </Switch>
        <div className="back-to-top">
          <Link
            activeClass="active"
            to="navbar-id"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
          ><FaArrowCircleUp />
          </Link>
        </div>

 
      </Router>


    </>
  );
}

export default App;
