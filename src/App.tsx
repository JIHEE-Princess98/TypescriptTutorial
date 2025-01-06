import './style/App.css'

interface ButtonProps {
  text: string,
  onClick: ()=> void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => (
    <button onClick={onClick}>{text}</button>
)

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

  //인터페이스 타입
  const consoles = () => {
    return console.log('hello world');
  }


  return (
      <div>
        {add(1, 2)} <br/>
        {stringAdd("안녕", "하세요")} <br/>
        {stringIntAdd("3", "4")} <br/>

        <Button text="하이하이" onClick={consoles}/>
      </div>
  )
}

export default App
