import React, { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';

import { getCurrent } from './components/redux/auth/authOperations';
import UserRoutes from './components/UserRoutes';



function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrent());
  }, [dispatch])

  return (
    <div className="App">
      <UserRoutes />
    </div>
  );
}

export default App;
