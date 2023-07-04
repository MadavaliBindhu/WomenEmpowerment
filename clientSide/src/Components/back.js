// import {useState,useEffect} from 'react';

// const Data=()=>{
// const[data,setData]=useState([]);
// useEffect(()=>{
// fetchData();
// },[])
// const fetchData=()=>{
// fetch("http://localhost:5500/data").then((res)=>{
// return res.json();
// }).then((res)=>{
// setData(res);
// console.log(res);
// })
// }
// return(<div>
// <h1>Doctor Profile</h1>
// {
// data?.map(({username,Doctor_name,phone_number,Qualification,Experience,Hospital_name,Adress,image})=>
// <div className='doctor'>
// <h1>{Doctor_name}</h1>
// <div>{Doctor_details}</div>
// </div>
// )
// }
// </div>)
// }
// export default Data;