import React from 'react'
import styled from 'styled-components'

import Navfooter from '../Navfooter';

function PatientProfile() {
    return (
        <>
            <Proflie>
                <ProflieImg>
                    <img src="\user_images\Proflie_Images\proflieImg.png" alt=""/>
                </ProflieImg>
               <ProfileInfo>
                    <ProflieName> Name of patient</ProflieName>

                <ProflieDetails><ProflieNumber>79</ProflieNumber> <ProflieAddress>address</ProflieAddress></ProflieDetails>  
                <ProflieStar><p class="stars">
  <span>
    <a class="star-1" >1</a>
    <a class="star-2" >2</a>
    <a class="star-3" >3</a>
    <a class="star-4" >4</a>
    <a class="star-5" >5</a>
  </span>
</p>
</ProflieStar>
                </ProfileInfo>              
            </Proflie>
            <ProflieMoney><Debit>Debit  rs. 100</Debit><Credit>Credit rs.100</Credit></ProflieMoney>
            <ProflieOptions>
                <OptionsOne>Appointment History</OptionsOne>
                <OptionsOne>Files</OptionsOne>
                <OptionsOne>Treatment Plan</OptionsOne>
                <OptionsOne>Consents</OptionsOne>
                <OptionsOne>Laborders</OptionsOne>
                <OptionsOne>Smart Preciption</OptionsOne>
                <OptionsOne>Invoice</OptionsOne>
                <OptionsOne>Recipt</OptionsOne>
            </ProflieOptions>
            <Navfooter/>
        </>
    )
}

export default PatientProfile


const Proflie = styled.div`
    margin-top:30px;
    display:flex;
    flex-direction:row ;
    `

const ProflieImg = styled.div`
    margin-left:20px;
    img{
        height:114px;
       
    }
    `
const ProfileInfo = styled.div`
     margin:20px 0 0 20px;
     `

const ProflieName = styled.div``
const ProflieDetails = styled.div`
    display:flex;
    flex-direction:row ;
    margin-top:2px;
    
    justify-content:space-between ;

`
const ProflieNumber = styled.div``
const ProflieAddress = styled.div`
    
`
const ProflieStar = styled.div`
    margin-top:-10px;
    .stars input {
        position: absolute;
        left: -999999px;
    }

    .stars a {
        display: inline-block;
        padding-right:4px;
        text-decoration: none;
        margin:0;
    }

    .stars a:after {
        position: relative;
        font-size: 18px;
        font-family: 'FontAwesome', serif;
        display: block;
        content: "\f005";
        color: #9e9e9e;
    }


    span {
    font-size: 0; /* trick to remove inline-element's margin */
    }

  `
const ProflieMoney = styled.div`
display:flex;
    flex-direction:row ;
    justify-content:space-between ;
    margin:15px;
`
const Debit = styled.div`
    color:#ED3531;
    font-weight:700;`
const Credit = styled.div`
    color:#048B90;
    font-weight:700;`
const ProflieOptions = styled.div``

const OptionsOne = styled.div`
    border: 1px solid #e1ebe4;
    color:#F36D21;
    font-weight:500;    
    text-align: center;
    padding:20px;
`


