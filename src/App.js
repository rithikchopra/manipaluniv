import './App.css';
import Homepage from './Components/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import axisbank from './Components/axisbank.html'
import AxisBankSubPage1 from './Components/AxisBankSubPage1';
import IDFCBank from './Components/IDFCBank';
import TechMahindra from './Components/TechMahindra';
import HDFCBank from './Components/HDFCBank';
import AxisBankSubPage2 from './Components/AxisBankSubPage2';
import IDFCSalesforce1 from './Components/IDFCSalesforce1';
import SundaramFinance from './Components/SundaramFinance';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/AxisBankFullStack" element={<AxisBankSubPage1/>}/>
        <Route path="/AxisBankDeputyManagerIT" element={<AxisBankSubPage2/>}/>
        <Route path="/IDFCFullStack" element={<IDFCBank/>}/>
        <Route path="/IDFCBankSoftwareDeveloper" element={<IDFCSalesforce1/>}/>
        <Route path="/TechMahindraSalesforce" element={<TechMahindra/>}/>
        <Route path="/HDFCVirtualRelationshipManager" element={<HDFCBank/>}/>
        <Route path="/SundaramFinanceJavaFullStack" element={<SundaramFinance/>}/>
        {/* <Route path="/AxisBankFullStack" element={<AxisBankSubPage1/>}/> */}
        {/* <Route exact path="/a" render={() => {window.location.href="./axisbank.html"}} /> */}
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
