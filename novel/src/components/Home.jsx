import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
function Home() {
    const navigate = useNavigate();
    return (
        <div className='yess'>
        <h1 style={{position: 'absolute',textDecoration: 'underline',left: '50%',top: 0,transform: 'translateX(-50%)',margin: 0,padding: '10px'}}>Wanna Read my Novel?</h1>
        <h2 style={{color:'aquamarine', padding:'30px',textDecoration:'underline'}}>Bound To You</h2>
        <img src=""/>
        <div style={{display:'flex',flexDirection:'column'}}>
        <button onClick={(()=>navigate('/c1'))} >Chapter 1
        </button>
        <button onClick={(()=>navigate('/c2'))} >Chapter 2
        </button>
        <button onClick={(()=>navigate('/c3'))} >Chapter 3g</button>
       </div>
        </div>
    );
}

export default Home;
