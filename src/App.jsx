import { useContext, useEffect,  } from 'react'
import './App.css'
import Routing from './Routing';
import { DataContext } from './components/dataProvider/DataProvider';
import { auth } from './utility/firebase';
import { Type } from './utility/action.type';

function App() {
const [{user}, dispatch]=useContext(DataContext)
useEffect(()=>{
  auth.onAuthStateChanged((authUser)=>{
    if(authUser){
      dispatch({
        type:Type.SET_USER,
        user:authUser 
      })
    }
    else{
      dispatch({
        type:Type.SET_USER,
        user:null
      })
    }
  })
},[])
  return (
    <>
     <Routing/>
      
    </>
  );
}

export default App
