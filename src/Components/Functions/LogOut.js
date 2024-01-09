import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';

function LogOut() {
  const history = useHistory();
    useEffect(() => {
        localStorage.removeItem('userid');
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        history.push('/');
    }, [])
  return (
    <div>
      
    </div>
  )
}

export default LogOut
