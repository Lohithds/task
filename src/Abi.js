import { Component } from "react";
import { Link } from "react-router-dom";
import "./Abi.css"
import { BrowserRouter } from 'react-router-dom';
import "./Abisecondpage"
import AbiWebsecond from "./Abisecondpage";

import { SRLWrapper } from "simple-react-lightbox";


class AbiWeb extends Component {
    constructor(){
        super()
    }
    render(){
        return(<div>
           <h1>Gallery</h1>
           <link href="path/to/lightbox.css" rel="stylesheet" />
           <script src="path/to/lightbox.js"></script>
           <div  class="gallry" >
           <SRLWrapper  button="button"  >
               <span>
                   
               <a   href="https://picsum.photos/id/0/600/700" data-lightbox="mygallery" >
         <img src="https://picsum.photos/id/0/500/700"       class="rounded"  height="350px" width="200px"  ></img>
         </a></span>
         <span>
         <a href="https://picsum.photos/id/1/600/700" data-lightbox="mygallery">
             <img src="https://picsum.photos/id/1/200/300" class="img-fluid" height="350px" width="200px"></img>
            </a>  </span>
            <span>
            <a href="https://picsum.photos/id/10/600/700"data-lightbox="mygallery" >
          <img src="https://picsum.photos/id/10/200/300" class="img-fluid" height="350px" width="200px"></img>
         </a> </span>
         <span>
         <a href="https://picsum.photos/id/1/600/700"data-lightbox="mygallery" >
          <img src="https://picsum.photos/id/100/200/300" class="img-fluid" height="350px" width="200px"></img>
          </a></span>
          <span>
          <a href="https://picsum.photos/id/1000/600/700 " data-lightbox="mygallery"> 
            <img src="https://picsum.photos/id/1000/200/300"     class="rounded"  height="350px" width="200px"></img>
           </a> </span>
           <span>
           <a href="https://picsum.photos/id/1001/600/700" data-lightbox="mygallery"> 
           <img src="https://picsum.photos/id/1001/200/300" class="img-fluid" height="350px" width="200px"></img>
          </a> </span>
          <span>
          <a href="https://picsum.photos/id/1003/600/700" data-lightbox="mygallery">
             <img src="https://picsum.photos/id/1003/200/300" class="img-fluid" height="350px" width="200px"></img>
             </a></span>
             <span>
             <a href="https://picsum.photos/id/1004/600/700" data-lightbox="mygallery">
            <img src="https://picsum.photos/id/1004/200/300" class="img-fluid" height="350px" width="200px"></img>
           </a> </span>
           <span>
           <a href="https://picsum.photos/id/1004/600/700" data-lightbox="mygallery">
            <img src="https://picsum.photos/id/1005/200/300"     class="rounded"  height="350px" width="200px"></img>
           </a> </span>
           <span>
           <a href="https://picsum.photos/id/1004/600/700" data-lightbox="mygallery"   >
            <img src="https://picsum.photos/id/1006/200/300" class="img-fluid" height="350px" width="200px"></img>
           </a> </span>
            

            <div class="row row-cols-1 row-cols-md-3 g-4">
            </div>
            </SRLWrapper>
            <script src="path/to/lightbox.js"></script>
</div>
<div class="wrapper">
  
  
<Link to="/secondpage" > 
<button type="button" class="btn btn-primary">Previous</button>
    
     </Link>
     
     <Link to="/secondpage" > 
     <button   class="btn btn-primary " >Next</button>
     </Link>
 
 </div>



        </div>)
    }
}
export default AbiWeb