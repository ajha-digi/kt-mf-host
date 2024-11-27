import Test from "demo_remote_app/demoApp"
import TestButton from "demo_remote_app/button"
import { useSelector } from "react-redux"
function App() {
  const data = useSelector(state => state.demo);
  console.log("host", data);
  
  return (
    <>
      <h1>Vite + React</h1>
      <Test data="data from host for text" />
      <TestButton />
    </>
  )
}

export default App
