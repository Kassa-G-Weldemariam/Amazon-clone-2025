import React, {useContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {DataContext} from '../dataProvider/DataProvider';

const ProtectedRoute = ({children, msg, redirect}) => {

    const [{user}, dispatch]=useContext(DataContext);
    const navigate=useNavigate();

    useEffect(() => {
      if (!user) {
        navigate("/Auth", { state: { msg, redirect } });
      }
    }, [user]);


return children;
};

export default ProtectedRoute;