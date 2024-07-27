import React, { useEffect, useState } from 'react'
import axios from 'axios';
import loader from '../assets/loader.gif';
import {useNavigate } from 'react-router-dom';
  

const Category = () => {
  const [categoryList,setdata]  = useState([]);
  const [isloading,setloading] = useState(true);

  const navigate = useNavigate();

  const detailRoute = (id)=>{
    navigate("/category/"+id);
  }

  const editRoute = (id)=>{
    navigate("/category/edit/"+id);
  }


  const getData= ()=>{
    axios.get('http://localhost:3000/category')
    .then((res)=>
      {
        setdata(res.data.category);
        setloading(false);
      }
  )
    .catch((err)=>
      {console.log(err);
       setloading(false);
      }
  );
  }

  const deleteData=(nam,imageLink)=>{
    if(window.confirm('do you want to delete')){
      axios.delete('http://localhost:3000/category?'+'id='+nam+'&imageUrl='+imageLink)
      .then(()=>{console.log("Deleted"); getData()})
      .catch(()=>{
        console.log("not");
      })
  }
  else{
    console.log("not want deleted");
  }
}
 
  useEffect(()=>{
    getData();
  },[]);
  

  return (
    <div>

      <h2>category</h2>
      {
        isloading && <img style={{width:100}} src={loader} alt="loading" />
      }
      { !isloading &&
      <table>
        <thead>
          <tr>
            
            <th>name</th>
            <th>photo</th>
          </tr>
        </thead>
        <tbody>
        {categoryList?.map((data) => (
            <Row key={data._id} detailReq={detailRoute} editReq={editRoute} deleteReq={deleteData} detail={data} />
          ))}
        </tbody>
      </table>
}
    </div>
  )
}

const Row = (props)=>{
  return(
    <tr>
      
      <td>{props.detail.name}</td>
      <td><img alt= "notloaded " style={{width:50}} src={props.detail.photo}></img></td>
      <td><button onClick={()=>{props.detailReq(props.detail._id);}}>Details</button></td>
      <td><button onClick={()=>{props.editReq(props.detail._id)}}>edit</button></td>
      <td><button onClick={()=>{props.deleteReq(props.detail._id, props.detail.photo)}}>Delete</button></td>
    </tr>
  );
}
<div/>
export default Category
