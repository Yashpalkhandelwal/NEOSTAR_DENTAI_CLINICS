import React from 'react'
import styled from 'styled-components'
import UserLogedInBottomNavBar from '../UserLogedInBottomNavBar'

function UserLogedIn() {
    return (
        <>

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
            <AppointmentDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu quis orci, ante sed diam vitae arcu lectus vel. A est.</AppointmentDescription>
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
                <ServicesTitle>DENTAL HEALTH RISK</ServicesTitle>
                </ServicesTwo>
                </ServicesBoardUpper>
                <ServicesBoardBottom>
                <ServicesThree>
                <ServicesTitle>DENTAL HEALTH RISK</ServicesTitle>
                </ServicesThree>
                <ServicesFour>
                <ServicesTitle>DENTAL HEALTH RISK</ServicesTitle>
                </ServicesFour>
                </ServicesBoardBottom>
            </ServicesBoard>

            <UserLogedInBottomNavBar/>

        </>
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
    width:361px;
    height:130px;
        border-radius: 30px;
    box-shadow: rgb(0 0 0 / 1%) 0px 2px 3px -1px,
        rgb(0 0 0 / 15%)0px 16px 10px -10px;
`

const NoticeBoardHeader = styled.div`
    border: 1px solid #F36D21 ;
    background: #F36D21;
    border-radius: 30px 30px 0 0 ;
    width:361px;
    height:32px;
    padding:5px 0 0 15px ;
    color: White;
    font-weight:700;
    
`

const NoticeBoardAppointment = styled.div`
    display:flex;
    justify-content: space-around;
    margin:10px 0 0 0 ;
    background:white;
    
`

const PointerAppointmentDescription = styled.div`
    width:10px;
    height:32px;
    border: 1px solid #F36D21 ;
    background: #F36D21;    
    
`

const AppointmentDescription = styled.div`
    font-size:8px;    
    width:150px;
    `

const AppointmentDate = styled.div`
    font-size:10px;
    font-weight:700;
    padding:5px 0 0 0 ; 
    width:40px;
`

const AppointmentTime = styled.div`
    font-size:10px;
    font-weight:700;
    padding:5px 0 0 0 ; 
    width:45px;`

const AppointmentConfirmation = styled.div`
    border: 1px solid #048B90 ;
    background: #048B90;
    border-radius: 10px;
    width:70px;
    height:20px;
    font-size:10px;
    font-weight:700;   
    text-align: center;     
    margin:5px 0 0 0 ;    
    color:white;
    padding-top:1px
    `


const ServicesBoard = styled.div`
    margin:30px 0 30px 0;
    
    padding:30px;
`
const ServicesBoardUpper = styled.div`
    display:flex;    
    justify-content: space-evenly;   

`
const ServicesBoardBottom= styled.div`
display:flex;    
    justify-content: space-evenly;

`
const ServicesTitle = styled.div`
position: absolute;
  bottom: 0;
    border: 1px solid #048B90 ;
    background: #048B90;
    border-radius: 0 0 30px 30px ;
    width:151px;
    height:29px;
    padding-top:3px;
    font-size:12px;
    color: White;
    font-weight:700;
    text-align: center; 
                   
         
    `

const ServicesOne = styled.div`
    position: relative;
    border: 1px solid #FFF8F2 ;
    background: #FFF8F2;
    border-radius: 10px;
    width:151px;
    height:121px;
`
const ServicesTwo = styled.div`
position: relative;
border: 1px solid #FFF8F2 ;
    background: #FFF8F2;
    border-radius: 10px;
    width:151px;
    height:121px;
    `
const ServicesThree = styled.div`
position: relative;
border: 1px solid #FFF8F2 ;
    background: #FFF8F2;
    border-radius: 10px;
    width:151px;
    height:121px;`
const ServicesFour = styled.div`
position: relative;
border: 1px solid #FFF8F2 ;
    background: #FFF8F2;
    border-radius: 10px;
    width:151px;
    height:121px;`