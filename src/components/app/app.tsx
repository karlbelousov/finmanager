import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from '../pages/Main';
import { Stat } from '../pages/Stat';
import { Plan } from '../pages/Plan';
import { Header } from '../views/global/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/main' element={<Main />} />
        <Route path='/stat/:viewType' element={<Stat />} />
        <Route path='/plan' element={<Plan />} />
        <Route path='*' element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
