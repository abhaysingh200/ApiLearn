
import './App.css';
import { createBrowserRouter, RouterProvider , } from 'react-router-dom';
import Addcategory from './Components/Addcategory';
import Category from './Components/Category';
import RouterLayout from './Components/RouterLayout';
import Home from './Components/Home';
import MoreDetail from './Components/MoreDetail';
import EditDetail from './Components/EditDetail';

function App() {
  const router = createBrowserRouter(
    [
      {path:"", element:<RouterLayout/> , children:[
      {path:"/addcategory", element:<Addcategory/>},
      {path:"/category", element:<Category/>},
      {path:"/home", element:<Home/>},
      {path:"/category/:id", element:<MoreDetail/>},
      {path:"/category/edit/:id",element:<EditDetail/>},
      ]}
      
    ]
  );
  return (
    <>

    <RouterProvider router={router}>
    
    </RouterProvider>
   
    </>
  );
}

export default App;