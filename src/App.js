import './App.css';
import {Route, Routes} from 'react-router-dom';
import {Landing} from './pages/Landing';
import {Nav} from './components/Nav';
import {Splash} from './components/splash';
import {Radio} from './pages/Radio';
import {Service} from './pages/Service';
import {AudioProvider} from './context/AudioContext'
import {Controls} from './components/Controls'


function App() {
  return (
    <div className="app">
      <AudioProvider>
        <Splash />
        <Nav />
        <div className="pages">
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/Radio' element={<Radio />} />
            <Route path='/Service' element={<Service />} />
          </Routes>
        </div>
          <Controls />
      </AudioProvider>  
    </div>
  );
}

export default App;
