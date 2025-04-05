import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
function Home() {
    const navigate = useNavigate();
    return (
        <div>
        <h1>Welcome</h1>
        <h2>Hello</h2>
        <button onClick={(()=>navigate('/c1'))} >newPage</button>
        </div>
    );
}

export default Home;
