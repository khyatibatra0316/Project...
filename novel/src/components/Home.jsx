import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
function Home() {
    const navigate = useNavigate();
    return (
        <div>
        <h1 style={{marginBottom:'90vh'}}>Let's Read My Novel</h1>
        <h2 style={{color:'green', marginTop:'-80vh'}}>Bound To You</h2>
        <img src=""/>
        <div></div>
        <button onClick={(()=>navigate('/c1'))} >Chapter 1
        </button>
        <button onClick={(()=>navigate('/c2'))} >Chapter 2
        </button>
       </div>
        </div>
    );
}

export default Home;
