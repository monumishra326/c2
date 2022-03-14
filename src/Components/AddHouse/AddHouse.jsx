import React, {useState,useEffect} from "react";
import axios  from "axios";




export const AddHouse = () => {
  const[userdata,setUserdata]=useState({
    name:"",
    ownerName:"",
    addres:"",
    areaCode:"",
    rent:"",
    preferredTenant:"",
    image:"",

  });
  const[getdata,setgetdata]=useState([]);
  const handleinput=(e)=>{
    setUserdata({...userdata,[id]: value});

  };
  const handlesubmit=(e)=>{
    e.preventDefault();
  
  }
    return (
      <div className="addHouseContainer">
        <form>
          <label>name</label>
          <input type="text" className="name" required />
          <br />
          <label>ownerName</label>
          <input  type="text" className="ownerName" required />
          <br />
          <label>address</label>
          <input  type="text" className="address" required />
          <br />
          <label>areaCode</label>
          <input  type="text" className="areaCode" required />
          <br />
          <label>rent</label>
          <input  type="text" className="rent" required />
          <br />
          <label>preferredTenant</label>
          <br />
          <label>bachelor</label>
          <input  type="checkbox" className="bachelor" />
          <br />
          <label>married</label>
          <input  type="checkbox" className="married" />
          <br />
          <label>image</label>
          <input  type="text" className="image" required />
          <br />
          <input className="submitBtn" type="submit" />
        </form>
      </div>
    );
  };