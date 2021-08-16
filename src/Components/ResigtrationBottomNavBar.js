import React from 'react'
import styled from 'styled-components'
import {     
    Link
  } from "react-router-dom";


function BookingBottomNav() {
    return (
        <>
            <NavBar>
                <Save>
                <Link to="/">   
                <img src="https://www.figma.com/file/TYMBLtZWY3mKDvr1blAToK/neostar-platform?node-id=5%3A1721"/>
                <label>Save</label>
                </Link>
                </Save>
                <Divide>
                |
                </Divide>
                <Discard>
                <img src="https://www.figma.com/file/TYMBLtZWY3mKDvr1blAToK/neostar-platform?node-id=5%3A1742"/>
                <label>Discard</label>
                </Discard>

            </NavBar>
        </>
    )
}

export default BookingBottomNav

const NavBar = styled.div`
    bottom: 0;
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
    
    width: 100%;
    display: flex;
`
const Save = styled.div`
    
    margin-right: auto;
    margin-left: auto;
    img{
        padding-right:10px;
        margin: 15px 0 0 10px;        
    }
`
const Divide = styled.div`
margin-top: -6px;
margin-right: auto;
margin-left: auto;
font-size: 40px;
font-weight: 400;
`
const Discard = styled.div`
margin-right: auto;
margin-left: auto;
img{
    padding-right:10px;
    margin: 15px 0px 0 30px;        
}
    
`