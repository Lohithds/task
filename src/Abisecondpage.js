import { Component } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import { SRLWrapper } from "simple-react-lightbox";
class AbiWebsecond extends Component {
    constructor(){
        super()
    }
    render(){
        return(<div>
            
            <h1>Gallery  </h1>
            <div  class="gallry" >
            <SRLWrapper>
                <span>
                    
                <a    href="https://picsum.photos/id/1080/600/700"  data-title="Alejandro Escamilla"   >
          <img src="https://picsum.photos/id/1080/500/700"       class="rounded"  height="350px" width="200px" srl_gallery_image="true"  ></img>
          </a></span>
          <span>
          <a href="https://picsum.photos/id/1019/600/700">
              <img src="https://picsum.photos/id/1019/200/300" class="img-fluid" height="350px" width="200px"srl_gallery_image="true"></img>
             </a>  </span>
             <span>
             <a href="https://picsum.photos/id/1020/600/700">
           <img src="https://picsum.photos/id/1020/200/300" class="img-fluid" height="350px" width="200px" srl_gallery_image="true"></img>
          </a> </span>
          <span>
          <a href="https://picsum.photos/id/1021/600/700">
           <img src="https://picsum.photos/id/1021/200/300" class="img-fluid" height="350px" width="200px" srl_gallery_image="true"></img>
           </a></span>
           <span>
           <a href="https://picsum.photos/id/1022/600/700"> 
             <img src="https://picsum.photos/id/1022/200/300"     class="rounded"  height="350px" width="200px" srl_gallery_image="true"></img>
            </a> </span>
            <span>
            <a href="https://picsum.photos/id/1023/600/700"> 
            <img src="https://picsum.photos/id/1023/200/300" class="img-fluid" height="350px" width="200px"srl_gallery_image="true" ></img>
           </a> </span>
           <span>
           <a href="https://picsum.photos/id/1024/600/700">
              <img src="https://picsum.photos/id/1024/200/300" class="img-fluid" height="350px" width="200px" srl_gallery_image="true"></img>
              </a></span>
              <span>
              <a href="https://picsum.photos/id/1025/600/700">
             <img src="https://picsum.photos/id/1025/200/300" class="img-fluid" height="350px" width="200px " srl_gallery_image="true" ></img>
            </a> </span>
            <span>
            <a href="https://picsum.photos/id/1026/600/700">
             <img src="https://picsum.photos/id/1026/200/300"     class="rounded"  height="350px" width="200px"  srl_gallery_image="true"></img>
            </a> </span>
            <span>
            <a href="https://picsum.photos/id/1027/600/700">
             <img src="https://picsum.photos/id/1027/200/300" class="img-fluid" height="350px" width="200px"  srl_gallery_image="true" ></img>
            </a> </span>
      
             <div class="row row-cols-1 row-cols-md-3 g-4">
             </div>
             </SRLWrapper>
         
 </div>
 <div class="wrapper">
   
 
 
 <Link to="/fristpage" > 
    
     <Button variant="primary">Previous</Button>{' '}
     </Link>


     <Link to="/fristpage" > 
     <button  class="btn btn-primary"  >Next</button>
     </Link>
     </div>
 
 
         </div>)
     }
 }
 export default AbiWebsecond
