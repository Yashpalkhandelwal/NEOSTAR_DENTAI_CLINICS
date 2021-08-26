import React from 'react'
import styled from 'styled-components'

import Navfooter from '../Navfooter';

function UserLogedIn() {
    return (
        <div>

            <Greeting>
            <h4>Hi, Good Afternoon</h4>
            </Greeting>

            <Users>
            <select name="Current">
                        <option value="User1">User 1</option>
                        <option value="User2">User 2</option>                       
                </select>
            </Users>

            <NoticeBoard>
            <NoticeBoardHeader>DASHBOARD</NoticeBoardHeader>

            <NoticeBoardAppointment>
                <PointerAppointmentDescription></PointerAppointmentDescription>
            <AppointmentDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu quis orci.</AppointmentDescription>
            <AppointmentDate>22 July</AppointmentDate>
            <AppointmentTime>11.30 am</AppointmentTime>
            <AppointmentConfirmation>confirmed</AppointmentConfirmation> 
            </NoticeBoardAppointment>

            <NoticeBoardAppointment>
            <PointerAppointmentDescription></PointerAppointmentDescription>
            <AppointmentDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu quis orci.</AppointmentDescription>
            <AppointmentDate>22 July</AppointmentDate>
            <AppointmentTime>11.30 am</AppointmentTime>
            <AppointmentConfirmation>confirmed</AppointmentConfirmation> 
            </NoticeBoardAppointment>
            
            </NoticeBoard>


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

           <Navfooter/>
        </div>
    )
}

export default UserLogedIn


const Greeting = styled.div`
    display: flex;
    justify-content: flex-start;
    padding-left: 30px;
    margin:0 0 0 0 ;
    h4{
        padding:0 0 0 0 ;
        margin:10px 0 10px 0 ;
    }`

const Users = styled.div`
    display: flex;
    justify-content: flex-start;
    padding-left: 30px;
    margin-top:5px;
    select{
        background: #FFF8F2;  
        width:181px; 
        border: none;    
        height: 27px;
        border-radius: 9px;
        option {
            text-align: center;
        }
`

const NoticeBoard = styled.div`
    margin-top:20px;
    border: 1px solid #FFF8F2 ;
    display: block;
    margin-left: auto;
    margin-right: auto;
    background: #FFF8F2;
    width:400px;
    height:170px;
        border-radius: 30px;
    box-shadow: rgb(0 0 0 / 1%) 0px 2px 3px -1px,
        rgb(0 0 0 / 15%)0px 16px 10px -10px;
`

const NoticeBoardHeader = styled.div`
    border: 1px solid #F36D21 ;
    background: #F36D21;
    border-radius: 30px 30px 0 0 ;
    width:400px;;
    height:45px;
    padding:12px 0 0 15px ;
    color: White;
    font-weight:700;
    
`

const NoticeBoardAppointment = styled.div`
    display:flex;
    justify-content: space-around;
    margin:16px 0 0 0 ;
    background:white;
    align-items: center;
    
`

const PointerAppointmentDescription = styled.div`
    width:10px;
    height:32px;
    border: 1px solid #F36D21 ;
    background: #F36D21;    
    
`

const AppointmentDescription = styled.div`
    font-size:10px;    
    width:175px;
    `

const AppointmentDate = styled.div`
    font-size:12px;
    font-weight:700;    
    width:40px;
`

const AppointmentTime = styled.div`
    font-size:12px;
    font-weight:700;     
    width:60px;`

const AppointmentConfirmation = styled.div`
    border: 1px solid #048B90 ;
    background: #048B90;
    border-radius: 10px;
    width:90px;
    height:30px;
    font-size:14px;
    font-weight:700;   
    text-align: center;     
    margin:5px 0 0 0 ;    
    color:white;
    padding-top:3px
    `


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
    border-radius: 30px;
    width:180px;
    height:140px;
`
const ServicesTwo = styled.div`
    position: relative;
    border: 1px solid #FFF8F2 ;
    background: #FFF8F2;
    border-radius: 30px;
    width:180px;
    height:140px;
    `
const ServicesThree = styled.div`
    position: relative;
    border: 1px solid #FFF8F2 ;
    background: #FFF8F2;
    border-radius: 30px;
    width:180px;
    height:140px;`
const ServicesFour = styled.div`
    position: relative;
    border: 1px solid #FFF8F2 ;
    background: #FFF8F2;
    border-radius: 30px;
    width:180px;
    height:140px;`

