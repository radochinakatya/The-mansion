
import './style.css/App.css';
import Navbar from './components/Navbar';
import FirstScreen from './components/Screens/FirstScreen';
import SecondScreen from './components/Screens/SecondScreen';
import ThirdScreen from './components/Screens/ThirdScreen';
import FourthScreen from './components/Screens/FourthScreen';
import FifthScreen from './components/Screens/Fifthscreen';
import SixthScreen from './components/Screens/Sixthscreen';
import SeventhScreen from './components/Screens/Seventhscreen';
import EighthScreen from './components/Screens/Eighthscreen';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <FirstScreen />
      <SecondScreen />
      <ThirdScreen />
      <FourthScreen />
      <FifthScreen />
      <SixthScreen />
      <SeventhScreen />
      <EighthScreen />
      <Footer />
    </div>
  );
}

export default App;
