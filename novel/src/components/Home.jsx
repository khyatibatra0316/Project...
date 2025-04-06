import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
function Home() {
    const navigate = useNavigate();
    return (
        <div className='yess'>
        
        <img src=""/>
        <div style={{display:'flex',flexDirection:'column'}}>
        <button onClick={(()=>navigate('/c0'))} >Chapter 0</button>
        <button onClick={(()=>navigate('/c1'))} >Chapter 1
        </button>
        <button onClick={(()=>navigate('/c2'))} >Chapter 2
        </button>
        <button onClick={(()=>navigate('/c3'))} >Chapter 3</button>
       </div>
        </div>
    );
}

export default Home;
