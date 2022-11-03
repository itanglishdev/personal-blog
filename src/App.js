import './App.css';
import Footer from './components/Footer';
import Interests from './components/Interests';
// import AboutMe from './components/AboutMe';
import Info from './components/Info';
import Button from '@mui/material/Button'

function App() {
  return (<div>
   
    <Info/>
    <Button variant="contained">Linkedin</Button>
    <Button variant="outlined">E-mail</Button>
    {/* <AboutMe/> */}
    <Interests/>
    <Footer/>
    </div>
  );
}

export default App;
