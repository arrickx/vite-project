import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { About, Contact, Home, Projects } from './pages';

const App = () => {
  return (
    <BrowserRouter basename='/vite-project'>
      <main className='bg-slate-300/20 h-full'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
