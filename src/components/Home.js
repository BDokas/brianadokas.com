import React from 'react';
import pic from './media/DSC_0831 (2).jpg'

const home = () => {
    return (
        <div>
            <h1>Home</h1>
            <p>Home page body content</p>
            <img src={pic} alt='Test'/>
        </div>
    );
}

export default home;