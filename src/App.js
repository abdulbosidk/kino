import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './screens/main';
import Good1 from './screens/g1';
import Good2 from './screens/g2';
import Good3 from './screens/g3';
import Good4 from './screens/g4';
function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/g1/:page' element={<Good1/>}/>
            <Route path='/g2/:page' element={<Good2/>}/>
            <Route path='/g3' element={<Good3/>}/>
            <Route path='/g4/:id' element={<Good4/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}
export default App;
