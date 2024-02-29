import Sidebar from '../../components/Sidebar/sidebar'
// import Footer from '../../components/Footer/footer'
import './studentList.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Avatar from '@mui/material/Avatar';

const StudentList = () => {
  const [student, setStudent] = useState([]);
  const fid = JSON.parse(localStorage.getItem("isFaculty")).id;
  const token = JSON.parse(localStorage.getItem("isFaculty")).token;
  
  const getStudents = async () => {
    let res = await axios.post(
      "http://localhost:3000/faculty/getstudents", 
      {id : fid},
      {
        headers:{
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
      }
    );
    console.log(res.data);
  setStudent(res.data.students);
  }

  useEffect(()=>{
    getStudents()
  },[])

  return (
     <div className='studentlist-container'>
      <Sidebar />

      <div className='studentlist-body'>
                
      <h1>studentList</h1>

          {/* <div className="student-detail">
            <table className="student-table">
              <thead>
                <tr>
                  <th>id</th>
                  <th>name</th>
                  <th>email</th>
                </tr>
              </thead>

              <tbody>
                {student.map((student, index) => (
                  <tr key={index}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div> */}

          {student.map((studentInfo, index) => (
            <div key={index} className="student-card">
                
              <div className='sub-card-text'>
                  <Avatar sx={{ bgcolor: 'orange' }} alt={studentInfo.name} src={studentInfo.name[0]}/>
                   <h4>{studentInfo.email}</h4>
              </div>

                <div style={{display:'flex',flexDirection:'column'}}>
                    <p style={{margin:'0'}}>id: {studentInfo.id}</p>
                    <p style={{margin:'0'}}>name: {studentInfo.name}</p>
               </div>
              
            </div>
          ))}  

     </div>

     {/* <Footer /> */}
     </div>
  )
}
export default StudentList
