import React from 'react'
import styled from 'styled-components'
import SimpleImageSlider from "react-simple-image-slider";


const images = [
    { url: "user_images/Home_Silder/1.jpg" },
    { url: "user_images/Home_Silder/2.jpg" },
    { url: "user_images/Home_Silder/3.jpg" },
    { url: "user_images/Home_Silder/4.jpg" },
    { url: "user_images/Home_Silder/5.jpg" },
    { url: "user_images/Home_Silder/6.jpg" },
    { url: "user_images/Home_Silder/7.jpg" },
  ];



function Silder() {
    return (
        <Silderdiv>
        <SimpleImageSlider
        style={{}}
        width={355}
        height={260}
        images={images}
        showBullets={true}
        showNavs={true}
       
        
      />
        </Silderdiv>
    )
}

export default Silder

const Silderdiv = styled.div`

display: flex;
justify-content:center;
`
