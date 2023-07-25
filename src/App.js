
import './App.css';
import Navigationbar from './components/Student/web_component/navigationbar';

import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Homepage } from './components/Student/homepage';
import { Header } from './components/Student/web_component/header';
import { Department } from './components/Student/department';
import { New, VissionAndMission } from './components/Student/new';
import { Forms, Formentry } from './components/Department/form';

import { Records } from './components/Student/records';
import { Footer } from './components/Student/web_component/footer';
// import { getdata } from './services/getdata';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ParentComponent } from './components/Student/new2';

function App() {
   async function getdata() {
    const res = await axios.get("http://localhost:7834/fetch");
    return res;
  
  }
  
  const [formdata, setFormdata] = useState({});
  
  useEffect(() => {
    fetchdata();
  }, [])
  const fetchdata = async () => {
    const res = await getdata();
    setFormdata(res.data)
    // console.log(res.data[0])
   

  
  }
  return (
    
    <div>
      <BrowserRouter>
        <Header></Header>
        <Navigationbar></Navigationbar>


        <Routes>
          <Route path='/' element={<Homepage ></Homepage>}></Route>
          <Route path='/Department' element={<Department ></Department>}></Route>
          <Route path='/Students' element={<VissionAndMission res={formdata} ></VissionAndMission>}></Route>
          <Route path='/Records' element={<Records ></Records>}></Route>
          <Route path='/Forms' element={<Forms></Forms>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>

    </div>
  );
}

export default App;
