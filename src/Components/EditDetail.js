import axios from 'axios';
import React, { useEffect ,useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditDetail = () => {
    const [ imageUrl,setImageUrl] = useState(null);
    const [oriname,setori] = useState('');
    const [oriphoto,setoriphoto] = useState(null);

    let navigate = useNavigate();
    let param = useParams();
    useEffect(()=>{
        
        axios.get('http://localhost:3000/category/'+param.id)
        .then((res)=>{setori(res.data.category.name); setoriphoto(res.data.category.photo); setImageUrl(res.data.category.photo)})
        .catch((er)=>{
            console.log(er);
        });

        
    },[param.id]);


  
    const submitHandler = (event)=>{
      event.preventDefault();
    const formdata = new FormData();
    formdata.append('name',oriname);  
    formdata.append('photo',oriphoto);
    

    axios.put('http://localhost:3000/category/'+param.id,formdata)
        .then((res)=>{navigate('/category'); })
        .catch((err)=>{console.log(err)},[]);
       
        
    }
    


    
    
    const newimage =(image)=>{
        setoriphoto(image.target.files[0]);
        console.log(oriphoto);
        
        setImageUrl (URL.createObjectURL(image.target.files[0]));
        console.log(imageUrl);
    }

    

  return (
    <>
      <form onSubmit={submitHandler}>
        <input value = {oriname} type="text" onChange={(val)=>{setori(val.target.value)}}  />
        <input type="file" onChange={(url)=>{newimage(url)}}/>
        <button type="submit">submit</button>
      </form>
      <img alt="Noloaded"  style = {{width:200}} src={imageUrl}></img>
      
    </>
  )
}

export default EditDetail
