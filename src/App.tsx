
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import CreateEmployeeForm from './components/CreateEmployeeForm';
import MainContentFunctional from './components/MainContentFunctional';
// import MainContent from './components/MainContent';
// import MainContentFunctional from './components/MainContentFunctional';

function App() {
  return (
    <div className="container-fuild">
   
    <div className="row my-header">
      <div className='col-12'>
        <Header/>
      </div>

    </div>

    <div className="row my-main">
      <div className='col'>
          {/* <MainContent/> */}
          {/* <MainContentFunctional/> */}
          <BrowserRouter>
            <Routes>
              <Route path='/addemployee' element={<CreateEmployeeForm/>}/>
              <Route path='/' element={<MainContentFunctional/>}/>
            </Routes>
          
          </BrowserRouter>
      </div>
    </div>



    </div>
  );
}

export default App;
