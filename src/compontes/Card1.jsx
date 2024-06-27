import { useState } from 'react'

function Card1({cart, setCart}){
     let [toggle, setToggle] = useState(true)
     return <div className="col mb-5">
     <div className="card h-100">
         <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
         <img className="card-img-top" src="https://www.bhphotovideo.com/images/images150x150/sony_xbr_55x800e_x800e_series_55_4k_1317750.jpg" alt="img" width={450} height={300}/>
         <div className="card-body p-4">
             <div className="text-center">
                 <h5 className="fw-bolder">Sony Tv</h5>
                 <span className="text-muted text-decoration-line-through">$350.00</span>
                 $150.00
             </div>
         </div>
         <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
             <div className="text-center">
               {
               toggle?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                 setCart(cart+1) 
                 setToggle(false)
                 }}>
                 Add to Cart
               </button>:<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                 setCart(cart-1) 
                 setToggle(true)
                 }}>
                 Remove from Cart
               </button>
               }
         </div>
         </div>
     </div>
   </div>        
}
export default Card1