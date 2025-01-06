import './style/App.css'

function App() {

  const add = (a:number, b:number):number => {
    return a + b;
  }
  const stringAdd = (a:string, b:string):string => {
    return a+b;
  }
  const stringIntAdd = (a:string, b:string):number => {
    return parseInt(a)+parseInt(b);
  }


  return (
      <div>
        {add(1, 2)} <br/>
        {stringAdd("안녕", "하세요")} <br/>
        {stringIntAdd("3", "4")} <br/>
      </div>
  )
}

export default App
