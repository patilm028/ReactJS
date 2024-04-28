import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Cards from "./Cards";
import Sdata from "./Sdata";


function ncard(val,index)
{
    console.log(index)
    return(
        
<Cards
    key={val.id}
    imgsrc={val.imgsrc}
    title={val.title}
    Sname={val.Sname}
    link={val.link}
/>
    )
}
ReactDOM.render(
<>

<h1 className="heading_style">List of 5 Netflix series in 2024</h1>
{Sdata.map(ncard)}
{/* console.log(Sdata[0].Sname) */}

{/* <Cards
    imgsrc={Sdata[0].imgsrc}
    title={Sdata[0].title}
    Sname={Sdata[0].Sname}
    link={Sdata[0].link}
/>
<Cards
    imgsrc={Sdata[1].imgsrc}
    title={Sdata[1].title}
    Sname={Sdata[1].Sname}
    link={Sdata[1].link}
/>
<Cards
    imgsrc={Sdata[2].imgsrc}
    title={Sdata[2].title}
    Sname={Sdata[2].Sname}
    link={Sdata[2].link}
/>
<Cards
    imgsrc={Sdata[3].imgsrc}
    title={Sdata[3].title}
    Sname={Sdata[3].Sname}
    link={Sdata[3].link}
/>
<Cards
    imgsrc={Sdata[4].imgsrc}
    title={Sdata[4].title}
    Sname={Sdata[4].Sname}
    link={Sdata[4].link}
/> */}


{/* <Cards
imgsrc="https://wallpapercave.com/uwp/uwp4305882.jpeg"
title="A netflix Original series"
Sname="extra curricular"
link="https://www.primevideo.com/region/eu/detail/0LQTDONU8Q9AM8UO7D82CES98V/ref=atv_hm_hom_c_bCxerx_HS6aece0_1_1?jic=16%7CCgNhbGwSA2FsbA%3D%3D"


/>
<Cards
imgsrc="https://wallpapercave.com/uwp/uwp4305875.jpeg"
title="A netflix Original series"
Sname="stranger Things"
link="https://www.primevideo.com/region/eu/detail/0LQTDONU8Q9AM8UO7D82CES98V/ref=atv_hm_hom_c_bCxerx_HS6aece0_1_1?jic=16%7CCgNhbGwSA2FsbA%3D%3D"


/> */}
</>,
document.getElementById("root")

);