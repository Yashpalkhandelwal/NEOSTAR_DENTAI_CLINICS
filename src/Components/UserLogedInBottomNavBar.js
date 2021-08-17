import React from 'react'
import styled from 'styled-components'
import {     
    Link
  } from "react-router-dom";


function BookingBottomNav() {
    return (
        <>
            <NavBar>
                <ConfirmBooking>
                <Link to="/Booking">   
                <img src="https://www.figma.com/file/TYMBLtZWY3mKDvr1blAToK/neostar-platform?node-id=5%3A1721"/>
                <label>Book Appoinment</label>
                </Link>
                </ConfirmBooking>
                <Divide>
                |
                </Divide>
                <Cancel>
                <img src="https://www.figma.com/file/TYMBLtZWY3mKDvr1blAToK/neostar-platform?node-id=5%3A1742"/>
                <label>ToothCare</label>
                </Cancel>

            </NavBar>
        </>
    )
}

export default BookingBottomNav

const NavBar = styled.div`
    padding:5px;
    font-weight: 700;
    color: white;
    font-size: 20px;
    text-align: center;
    border-radius: 30px 30px 0px 0px;
    height: 59px;
    overflow: hidden;
    background-color: #048B90;
    position: sticky;
    bottom: 0;
    width: 100%;
    display: flex;
    a{
        text-decoration: none;
        color: White;
    }
`
const ConfirmBooking = styled.div`
    
    margin-right: auto;
    img{
        padding-right:10px;
        margin: 15px 0 0 10px;        
    }
`
const Divide = styled.div`
margin-top: -6px;
margin-left: 0px;
font-size: 40px;
font-weight: 400;
`
const Cancel = styled.div`
margin-right: auto;
img{
    padding-right:10px;
    margin: 15px 0px 0 30px;        
}
    
`