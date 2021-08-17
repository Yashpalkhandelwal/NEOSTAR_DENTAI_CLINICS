import React from 'react'
import {     
    Link
  } from "react-router-dom";
import styled from 'styled-components'

function Header() {
    return (
        <Nav>
            <Link to="/Home">  
            <Logo src="/images/logo.svg"/>
            </Link>
            <NavMenu>
               
            </NavMenu>
            <Link to="/UserLogedIn">  
            <span>Log In</span>
            </Link>
            <p>&nbsp; / &nbsp;</p>
            <Link to="/Resigtration">
            <span> Sing Up</span>
            </Link>
        </Nav>
    )
}

export default Header


const Nav = styled.nav `
    color:black;
    height:70px;
    background:White;    
    box-shadow: rgb(0 0 0 / 1%) 0px 2px 3px -1px,
        rgb(0 0 0 / 7%)0px 16px 10px -10px;
    display:flex;
    align-items:center;
    padding: 0 36px;
    overflow-x : hidden;
    span{
        
        font-size:13px;
        letter-spacing: 1.42px;
        position: relative;   
        color:whiter

        &:after{
            
            content:"";
            height:2px;
            background:white;
            position:absolute;      
            left:0;
            right:0;
            bottom:-6px;
            opacity:0;
            transform-origin: left center;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94)0s;
            transform:scaleX(0);
                }
            }
            a{
                text-decoration: none;
                color: Black;
                font-weight: 700;
            }
`

const Logo = styled.img `
    width:80px;
    
`
const NavMenu = styled.div `
    display:flex;
    flex: 1;
    margin-left:25px;
    align-items:center;
    a{
        display:flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
    
        img {
            height:20px;
             }
        span{
        font-size:13px;
        letter-spacing: 1.42px;
        position: relative;   

        &:after{
            content:"";
            height:2px;
            background:white;
            position:absolute;      
            left:0;
            right:0;
            bottom:-6px;
            opacity:0;
            transform-origin: left center;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94)0s;
            transform:scaleX(0);
                }
            }
        &:hover {
            span:after{           
            transform: scaleX(1);
            opacity:1;
                }
            }
    }
    
    


`
