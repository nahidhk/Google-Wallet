
import Nav from './components/Nav';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Login from './components/Login';
import Menu from './components/Menu';

function App() {


  const logid = "uc9e3geft3beknhdbeu45kjdirusoejeu74kehjdhsDfgkjgxx0";
  const giveID = sessionStorage.getItem("ucCode0x");

  if (giveID === logid) {

    return (
      <div>
        <Nav />
        <br/> <br/> <br/> <br/>
        <Menu />
      </div>
    )
  } else {

    return (
      <div>
        <Login />
      </div>
    );
  }
}

export default App;
