import './style/App.css'
import {useState} from "react";
import Types from "./components/Types.tsx";
import PropsAtt from "./components/PropsAtt.tsx";
import {InterFaceType} from "./components/InterFaceType.tsx";
import FetchData from "./components/FetchData.tsx";

function App() {
  const [count,setCount] = useState<number>(0);
  const handleClickEvent = () => {
    setCount(count+1);
    console.log(count);
  }
  return (
      <div>
        <Types/>
        <PropsAtt name="jihee" age={28}/>
        <InterFaceType text={count} onClick={handleClickEvent}/>
          <FetchData/>
      </div>
  )
}

export default App
