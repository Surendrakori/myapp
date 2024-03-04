import './App.css';
import Header from "./Header"
import Box1 from "./Box1"
import Box2 from "./Box2"

function App() {
  return (
    <div>
      <div className='App-header'><Header/></div>
      <div className='Container'>
      <div className='b1'><Box1/></div>
      <div className='b2'><Box2/></div>
      </div>
      <div></div>
    </div>
  );
}

export default App;
