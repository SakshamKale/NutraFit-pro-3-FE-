import "./pro.css";
import { useState } from "react";
import { useEffect } from "react";
function Product(props) {
    let [co,setc]=useState(1);
    let fpz=props.p.price;
    let [pz,setp]=useState(props.p.price);
    

    useEffect(()=>{
        setp(fpz*co)
    },[co])


  return (
    <>
      <div className="d">
        <img className="img" src={props.p.img} alt={props.p.name} />
        <div className="t1">
          <span>{props.p.name}</span>
          <span>Brand: {props.p.brand}</span>
          <span>RAM: {props.p.ram}</span>
          <span>Storage: {props.p.storage}</span>
          <span>Rating: {props.p.rating}</span>
          <span>Price: ₹{fpz}</span>
          <div className="ad">
            <button onClick={()=>{
                if(co>1)
                {
                    setc(co-1)
                }
                else{
                    setc(0)
                }
            }}>-</button>
          <span>{co}</span>
          <button onClick={()=>{setc(co+1)}}>+</button>
          </div>
          <span className="to">Total:₹{pz}</span>
        </div>
      </div>

    </>
  );
}

export default Product;
