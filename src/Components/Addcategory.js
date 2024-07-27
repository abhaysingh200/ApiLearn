import React, { useState } from 'react'
import axios from 'axios';
import imageLogo from "../assets/img1.jpg";
import loader2 from "../assets/loader.gif";
import { useNavigate } from 'react-router-dom';



const Addcategory = () => {
  const [category,setcategory] = useState(true);
  const [selectedfile,setselectedfile] = useState(null);
  const [ imageUrl,setImageUrl] = useState(imageLogo);
  const [isloading,setloading] = useState(false);
  const [haserror,sethaserror] = useState(false);
  const [err,seterror] = useState('');
  let navigate = useNavigate();

const fileHandler = (image)=>{
  setselectedfile(image.target.files[0]);
  setImageUrl(URL.createObjectURL(image.target.files[0]));
}


  const submitHandler = (event)=>{
    event.preventDefault(); 
    setloading(true);
    const formdata = new FormData();
    formdata.append('name',category);  

    formdata.append('photo',selectedfile);
   
    axios.post('http://localhost:3000/category', formdata)
    .then((res)=>{
      setloading(false);
      console.log(res);
      navigate('/category');
    }).catch((error)=>{
      sethaserror(true);
      seterror(error.message);
      console.log(error);
      setloading(false);
    })

  }



  return (  
<>
    {
      isloading && <div>
        <img style={{width:50}} src={loader2} />
      </div>
    }
    {
      !isloading &&
    <div>
      <form onSubmit={submitHandler}>
        <input onChange={(es)=>{setcategory(es.target.value)}} type='text'/>
        <input onChange={(e)=>{fileHandler(e)}} type='file'/>
        <button type='submit'>Add</button>
         <br/>
         <img style ={{width:'150px'}} alt='notloaded' src={imageUrl}/>
        
      </form>
    </div>
}
      
     {
      haserror && <div style={{color:'red'}}>{err}</div>
     } 
    </>
  )
}

export default Addcategory
