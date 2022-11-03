import './App.scss';
import './index.css'
import Footer from './components/Footer';
import Interests from './components/Interests';
import Info from './components/Info';
import Buttons from './components/Buttons';

function App() {
  return (
    <div className='flex  w-[400px] flex-col  items-center rounded-md  m-auto bg-zinc-900 text-white p-[20px]  h-[750px] '>
    
      <Info/>
      <Buttons/>
      <Interests/>
      <Footer/>
    </div>
  );
}

export default App;
