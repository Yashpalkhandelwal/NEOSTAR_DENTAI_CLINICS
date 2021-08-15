import React from 'react'
import styled from 'styled-components'

function BookingBottomNav() {
    return (
        <>
            <NavBar>
                <ConfirmBooking>
                <img src="https://www.figma.com/file/TYMBLtZWY3mKDvr1blAToK/neostar-platform?node-id=5%3A1721"/>
                <label>Confirm Booking</label>
                </ConfirmBooking>
                <Divide>
                |
                </Divide>
                <Cancel>
                <img src="https://www.figma.com/file/TYMBLtZWY3mKDvr1blAToK/neostar-platform?node-id=5%3A1742"/>
                <label>Cancel</label>
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
    font-size: 22px;
    text-align: center;
    border-radius: 30px 30px 0px 0px;
    height: 59px;
    overflow: hidden;
    background-color: #048B90;
    position: sticky;
    bottom: 0;
    width: 100%;
    display: flex;
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
margin-left: -30px;
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