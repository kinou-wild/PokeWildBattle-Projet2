import React from 'react'
import ReactLoading from 'react-loading';


const Loading =()=>(
    <div className='loading' style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh',flexDirection:'column'}}>
        <img  style={{width:'100vh',height:'50vh'}}src='https://zupimages.net/up/19/36/q2ye.gif' alt='pika' />
        <ReactLoading
            type='cylon'
            color='black'
        />
        <h1>Loading...</h1>
    </div>
)

export default Loading;