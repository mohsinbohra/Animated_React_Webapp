import React from 'react';
// import { NavLink } from 'react-router-dom';
// import web from '../src/images/img4.jpg'
import Card from './Card';
import Sdata from './Sdata';

const Services = () => {
    return (
        <>
        <div className="my-5">
            <h1 className="text-center">Our Services</h1>
        </div>
        <div className="container_fluid mb-5">
<div className="row">
<div className="col-10 mx-auto">
<div className="row gy-4">

{
    Sdata.map((val, ind) => {
return <Card key={ind}
imgsrc = {val.imgsrc}
title = {val.title}
paragraphText={val.paraText}
/>
    })
}
</div>
</div>
</div>
</div>

        </>
    );
};

export default Services;