import './style/App.css'
import {useState} from "react";


//인터페이스 타입
interface ButtonProps {
  text: string,
  onClick: ()=> void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => (
    <button onClick={onClick}>{text}</button>
)

// 선택적 속성
interface GreetingProps{
  name: string,
  age?: number //선택적 속성
}

const Greeting: React.FC<GreetingProps> = ({ name, age }) => (
    <div>
      <h1>hello, {name}</h1>
      {age && <p>My Age {age}</p>}
    </div>
)

//상태관리
const Counter:React.FC = () => {
  const [count,setCount] = useState<number>(0);
  return(
      <div>
        <h2>Counter {count}</h2>
        <button onClick={() => setCount(count+1)}>++</button>
      </div>
  )
}


function App() {


  //타입선언
  const add = (a:number, b:number):number => {
    return a + b;
  }
  const stringAdd = (a:string, b:string):string => {
    return a+b;
  }
  const stringIntAdd = (a:string, b:string):number => {
    return parseInt(a)+parseInt(b);
  }


  const consoles = () => {
    return console.log('hello world');
  }


  return (
      <div>
        {add(1, 2)} <br/>
        {stringAdd("안녕", "하세요")} <br/>
        {stringIntAdd("3", "4")} <br/>

        <Button text="하이하이" onClick={consoles}/>
        <Greeting name="JIHEE" age={28}/>

        <Counter/>
      </div>
  )
}

export default App
