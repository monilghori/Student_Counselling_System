import './assign.css'
import Navbar from '../../components/Navigation/navbar'
import { useState } from 'react';
import axios from 'axios';

const Assign = () => {
  const [data, setData] = useState({
    sid: "",
    fid:"",
  });

  const handleChange = (e) => {
    console.log(data);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleAssign = async (e) => {

    e.preventDefault();

    try {
        let url = "http://localhost:3000/admin/assignfaculty";

          let res = await axios.put(
            url,
            {
              sid: data.sid,
              fid: data.fid,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          console.log(res.data);
          window.alert("successfully assigned");

    } catch (error) {
        console.log(error);
    }
  }

  return (
     <div className='create-container'>
      <Navbar/>
      <div className='create-body'>
        <h1>assign faculty</h1>

        <input type="text" placeholder="Enter student id" name="sid" value={data.sid} onChange={handleChange} required className="signup-input"/>
        <input type="text" placeholder="Enter faculty id" name="fid" value={data.fid} onChange={handleChange} required className="signup-input"/>
          
        <button onClick={handleAssign} className="signup-green-btn" style={{border:"2px solid black", fontSize:"20px"}}>
          assign
        </button>
        
      </div>
    </div>
  )
}

export default Assign