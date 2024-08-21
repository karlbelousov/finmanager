import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './components/pages/Main';
import { Stat } from './components/pages/Stat';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/stat' element={<Stat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
