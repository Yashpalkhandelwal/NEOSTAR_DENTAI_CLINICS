import React from 'react'
import styled from 'styled-components'
import {     
    Link
  } from "react-router-dom";

function Navfooter() {
    return (
        <NavBar>
        <ConfirmBooking>
        <Link to="/Booking">   
        <img src="user_images/Confirm_booking_icon.png" alt=""/>
        <label>Book Appoinment</label>
        </Link>
        </ConfirmBooking>
        <Divide>
        |
        </Divide>
        <ToothCare>
        <Link to="/">
        <img src="https://www.figma.com/file/TYMBLtZWY3mKDvr1blAToK/neostar-platform?node-id=5%3A1742" alt=""/>
        <label>Tooth Care</label>
        </Link>
        </ToothCare>

    </NavBar>

    )
}

export default Navfooter


const NavBar = styled.div`
    bottom: 0;    
    font-weight: 700;
    color: white;
    font-size: 22px;
    text-align: center;
    border-radius: 30px 30px 0px 0px;
    height: 59px;
    overflow: hidden;
    background-color: #048B90;
    position: sticky;     
    display: flex;
    justify-content:space-evenly ;
    padding-top:10px;
    img{
        padding-right:10px;
          
    }
    a{
        text-decoration: none;
        color: White;
    }
`
const ConfirmBooking = styled.div`    
   
`
const Divide = styled.div`

`
const ToothCare = styled.div`


`