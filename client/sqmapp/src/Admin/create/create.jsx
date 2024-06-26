import './create.css'
import Navbar from '../../components/Navigation/navbar'
import { useState } from 'react';
import axios from "axios";
import {toast} from 'react-toastify'
const dburl = import.meta.env.VITE_REACT_DBURL

const Create = () => {

  const [role, setRole] = useState("");
  const token = JSON.parse(localStorage.getItem("isAdmin"))?.token;
  const [data, setData] = useState({
    id: "",
    batch: "",
    semester: "",
  });
  let res;

  const handleChange = (e) => {
    console.log(data);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleAdd = async (e) => {

    e.preventDefault();

    try {
        let url;
        
        if (role === "student") 
        {
          url = `${dburl}/admin/createstudent`;

          res = await axios.post(
            url,
            {
              id: data.id,
              batch: data.batch,
              semester:data.semester
            },
            {
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
              },
            }
          );
          console.log(res.data);
          toast("success student");
          setData({ batch: "", id: "", semester: "" })
        }   
        else if (role === "faculty") 
        {
          url = `${dburl}/admin/createfaculty`;

          res = await axios.post(
            url,
            {
              id: data.id,
            },
            {
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
              },
            }
          );
          console.log(res.data);
          toast("success faculty");
          setData({ batch: "", id: "", semester: "" })
        }

    } catch (error) {
      console.log(error);
      toast(error.response.data.message)
        //toast(res.data.message);    
      }

  }


  return (
     <div className='create-container'>
      <Navbar/>
      <div className='create-body'>
        <h1>add members</h1>

        <select value={role} onChange={(e) => setRole(e.target.value)} className="signup-select" required>
          <option disabled={true} value="">Select Role</option>
          <option value="student">Student</option>
          <option value="faculty">Faculty</option>
        </select>

        <input type="text" placeholder="Enter id" name="id" value={data.id} onChange={handleChange} required className="signup-input"/>
        
        {role==="student"  &&
          <>
          <input type="text" placeholder="Enter batch" name="batch" value={data.batch} onChange={handleChange} required className="signup-input"/>
          <input type="text" placeholder="Enter semester" name="semester" value={data.semester} onChange={handleChange} required className="signup-input"/>
          </>
        }

        <button onClick={handleAdd} className="signup-white-btn">
          ADD
        </button>
        
      </div>
    </div>
  )
}

export default Create