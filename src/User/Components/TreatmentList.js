import React from 'react'
import styled from 'styled-components'

function TreatmentList() {
    return (
        <div>
             <ServicesBoard>
                 <H1>Know Your Treatment</H1>
            <ServicesBoardUpper>
                <ServicesOne>
                <ServicesTitle>Invisalign</ServicesTitle>
                </ServicesOne>
                <ServicesTwo>
                <ServicesTitle>Dental Implant</ServicesTitle>
                </ServicesTwo>
                </ServicesBoardUpper>
                <ServicesBoardBottom>
                <ServicesThree>
                <ServicesTitle>Fixed Dentures</ServicesTitle>
                </ServicesThree>
                <ServicesFour>
                <ServicesTitle>Veeners</ServicesTitle>
                </ServicesFour>
                </ServicesBoardBottom>
                <ServicesBoardUpper>
                <ServicesOne>
                <ServicesTitle>Teeth Whitening</ServicesTitle>
                </ServicesOne>
                <ServicesTwo>
                <ServicesTitle>Painless Root Canals</ServicesTitle>
                </ServicesTwo>
                </ServicesBoardUpper>

            </ServicesBoard>
        </div>
    )
}

export default TreatmentList

const H1 = styled.h1`
    font-size: 20px;    
    color: Black;   
`

const ServicesBoard = styled.div`
    margin:2px 0 30px 0;    
    padding:10px;
`
const ServicesBoardUpper = styled.div`
    display:flex;    
    justify-content: center; 
    margin-top:20px;
    
    
    

`
const ServicesBoardBottom= styled.div`
    display:flex;    
    justify-content: center;
    margin-top:20px;

`
const ServicesTitle = styled.div`
    position: absolute;   
    border: 1px solid #048B90 ;
    background: #048B90;
    border-radius:50%;
    width:20px;
    height:20px;
    margin:50px 0 0 10px;    
    font-size:18px;
    color: White;
    font-weight:700;
    text-align: center; 
    
                   
         
    `

const ServicesOne = styled.div`
    position: relative;
    border: 1px solid #FFF8F2 ;
    background: #FFF8F2;
    background-image: url("user_images/Home_Silder/3.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 11px;
    width:180px;
    height:140px;
    margin-right:20px;
`
const ServicesTwo = styled.div`
    position: relative;
    border: 1px solid #FFF8F2 ;
    background: #FFF8F2;
    background-image: url("user_images/Home_Silder/2.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 11px;
    width:180px;
    height:140px;
    
    `
const ServicesThree = styled.div`
    position: relative;
    border: 1px solid #FFF8F2 ;
    background: #FFF8F2;
    background-image: url("user_images/Home_Silder/4.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 11px;
    width:180px;
    height:140px;
    margin-right:20px;`
const ServicesFour = styled.div`
    position: relative;
    border: 1px solid #FFF8F2 ;
    background: #FFF8F2;
    background-image: url("user_images/Home_Silder/5.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 11px;
    width:180px;
    height:140px;`
