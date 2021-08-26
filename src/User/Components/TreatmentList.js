import React from 'react'
import styled from 'styled-components'

function TreatmentList() {
    return (
        <div>
             <ServicesBoard>
            <ServicesBoardUpper>
                <ServicesOne>
                <ServicesTitle>DENTAL HEALTH RISK</ServicesTitle>
                </ServicesOne>
                <ServicesTwo>
                <ServicesTitle>KNOW TREATMENT</ServicesTitle>
                </ServicesTwo>
                </ServicesBoardUpper>
                <ServicesBoardBottom>
                <ServicesThree>
                <ServicesTitle>DENTAL HYGENIE</ServicesTitle>
                </ServicesThree>
                <ServicesFour>
                <ServicesTitle>FIND US NEAR YOU</ServicesTitle>
                </ServicesFour>
                </ServicesBoardBottom>
                <ServicesBoardUpper>
                <ServicesOne>
                <ServicesTitle>DENTAL HEALTH RISK</ServicesTitle>
                </ServicesOne>
                <ServicesTwo>
                <ServicesTitle>DENTAL HEALTH RISK</ServicesTitle>
                </ServicesTwo>
                </ServicesBoardUpper>

            </ServicesBoard>
        </div>
    )
}

export default TreatmentList

const ServicesBoard = styled.div`
    margin:2px 0 30px 0;    
    padding:10px;
`
const ServicesBoardUpper = styled.div`
    display:flex;    
    justify-content: space-between; 
    margin-top:30px; 
    

`
const ServicesBoardBottom= styled.div`
    display:flex;    
    justify-content: space-between;
    margin-top:30px;

`
const ServicesTitle = styled.div`
position: absolute;
  bottom: 0;
    border: 1px solid #048B90 ;
    background: #048B90;
    border-radius: 0 0 30px 30px ;
    width:180px;
    height:33px;
    padding-top:5px;
    font-size:12px;
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
    border-radius: 30px;
    width:180px;
    height:140px;
`
const ServicesTwo = styled.div`
    position: relative;
    border: 1px solid #FFF8F2 ;
    background: #FFF8F2;
    background-image: url("user_images/Home_Silder/2.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 30px;
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
    border-radius: 30px;
    width:180px;
    height:140px;`
const ServicesFour = styled.div`
    position: relative;
    border: 1px solid #FFF8F2 ;
    background: #FFF8F2;
    background-image: url("user_images/Home_Silder/5.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 30px;
    width:180px;
    height:140px;`
