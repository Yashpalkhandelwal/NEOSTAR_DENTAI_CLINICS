import React from 'react'
import {     
    Link
  } from "react-router-dom";

import styled from 'styled-components'

function Searchbar() {
    return (
        <TopBody>
           
            <SearchTab>
                
                 <input type="text" placeholder="Phone Number"/>
                
                 <Link to="/booking"><Button ><i class="icon-search"> Search</i></Button></Link>
                
            </SearchTab>
            <H1>World's Fastest Growing Dental Chain</H1>

        </TopBody>
    )
}

export default Searchbar

const TopBody = styled.div`
   
`
const H1 = styled.h1`
    font-size: 20px;
    text-align: center;
    color: Black;
    padding: 0px 0px px 0 ;
`
const SearchTab = styled.div`
    text-align: center;   
    padding: 20px 0;
    input{
        background: #FFF8F2;    
        border: none;    
        height: 49px;            
        width: 328px;
        border:0px solid #eaeaea;
        border-radius: 12px;
        outline:none;       
        
        &:focus{
            border-color:#048B90;
        }
    }
  
`

const Button = styled.button`
    margin-left: 10px;    
    background-color: #048B90;
    padding:6px;
    border: 1px soild ;
    border-radius: 15px;
    width:150px;
    letter-spacing: 2px;
    color:White;

    &:hover{
        border: 2px soild #048287;
        letter-spacing: 3px;
    }
    
`