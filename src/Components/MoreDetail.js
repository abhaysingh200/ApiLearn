import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
function MoreDetail() {
    const [category,setCategory] = useState({});
    let param = useParams();

    useEffect(()=>{
        axios.get('http://localhost:3000/category/'+param.id)
        .then((res)=>{setCategory(res.data.category);})
        .catch((err)=>{
            console.log(err);
        })
    }) 
    
  return (
    <div>
      <h4>{category.name}</h4>
      <img style={{width:100}}src={category.photo}/>
    </div>
  )
}

export default MoreDetail
