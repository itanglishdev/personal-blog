import './App.scss';
import './index.css'
import Footer from './components/Footer';
import Interests from './components/Interests';
import Info from './components/Info';
import Buttons from './components/Buttons';

function App() {
  return (
    <div className='flex  w-[400px] flex-col justify-center items-center rounded-md content-around m-auto bg-zinc-900 text-white p-[40px] mt-[20px] h-[600px] '>
    
      <Info/>
      <Buttons/>
      <Interests/>
      <Footer/>
    </div>
  );
}

export default App;
