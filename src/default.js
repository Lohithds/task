import { Component } from "react";
import {BrowserRouter,Route} from "react-router-dom"
import AbiWeb from "./Abi";
import AbiWebsecond from "./Abisecondpage";


class Def extends Component{
    render(){
        return(<div>
            <BrowserRouter>


          
            <Route path="/fristpage" component={AbiWeb}></Route>
            <Route path="/secondpage"  component={AbiWebsecond} ></Route>
            <Route  exact path="/"  component={AbiWeb} ></Route>
          
            </BrowserRouter>

        </div>)
    }
}
export default Def