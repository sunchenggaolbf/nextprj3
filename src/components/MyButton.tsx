"use client"
import React,{useState} from 'react';

type MyButtonType = {
    children: React.ReactNode
}

export default function MyButton({children }: MyButtonType) {
    const [likes,setlikes] = useState(0);
    
    const handleClick = ()=>{
        setlikes(likes + 1);
    }

    return (
        <div style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: '#fff',
            borderRadius: '4px',
            cursor: 'pointer',
            display: 'inline-block'
        }}
            onClick={handleClick}>{children} {likes} pepole like you
        </div>
    );

}
