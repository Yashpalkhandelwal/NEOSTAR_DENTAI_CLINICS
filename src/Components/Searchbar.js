import React from 'react'
import {     
    Link
  } from "react-router-dom";

import styled from 'styled-components'

function Searchbar() {
    return (
        <TopBody>
            <H1>World's Fastest Growing Dental Chain</H1>

            <SearchTab>
                 <Search type="text" placeholder="Search.."/>
                 <Link to="/booking"> <Button >Search</Button></Link>
                
            </SearchTab>
        </TopBody>
    )
}

export default Searchbar

const TopBody = styled.div`
    top:0;
    left:0;
    background: #FFF8F2;
    height: 200px;
`
const H1 = styled.h1`
    font-size: 20px;
    text-align: center;
    color: Black;
    padding: 30px 0px 30px 0 ;
`
const SearchTab = styled.div`
    text-align: center;   
  
`

const Search = styled.input`  
    margin-right: 10px;    
    border: none;    
    height: 40px;
    margin-left: auto;
    margin-right: auto;
    width: 280px;
    border:1px solid #eaeaea;
    border-radius: 5px;
    outline:none;

    
    &:focus{
        border-color:#048B90;
    }
    
    
    `
const Button = styled.button`
    margin-left: 10px;    
    background-color: #048B90;
    padding:6px;
    border: 1px soild ;
    border-radius: 6px;
    width:90px;

    &:hover{
        border: 2px soild #048287;
    }
    
`