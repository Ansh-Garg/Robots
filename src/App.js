import './App.css';
import Navbar from './Navbar';
import ContactUs from './Contact-Us';
import Banner from './banner';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Switch>
          <Route exact path="/" render={()=>{
            return(
            
            <Banner/>
            )
          }}> 
          </Route>
          <Route exact path="/Contact-Us">
            <ContactUs />
          </Route> 
        </Switch> 
    </Router>
   
   </>
  );
}

export default App;
