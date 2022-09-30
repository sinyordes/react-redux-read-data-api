import './App.css';
import Test from "./component/test";
import {useDispatch, useSelector} from "react-redux";

import {dataDownload} from "./redux/other/slice";
import {useEffect} from "react";

import Main from "./component/main";


function App() {


  const disp=useDispatch()
  useEffect(()=>{
    disp(dataDownload())


  },[disp])

  const load = useSelector(state=>state.veriAl.isLoading)

  return (
    <div className="App">

      {load==false ?  <Main/> :'' }
    </div>
  );
}

export default App;
