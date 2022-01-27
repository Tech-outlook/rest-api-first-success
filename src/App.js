import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Createobject from "./components/Createobject";
import Modifyobject from "./components/Modifyobject";
import Apidata from "./components/APIobjects";
import Loginpage from "./components/Loginpage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Loginpage />
      <Switch>
        <Route path="/Header" exact component={Header}></Route>
        <Route path="/Createobject" exact component={Createobject}></Route>
        <Route path="/Modifyobject" exact component={Modifyobject}></Route>
        <Route path="/APIobjects" exact component={Apidata}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
