import React from 'react'
import styled from 'styled-components'
import {DateTimePickerComponent} from '@syncfusion/ej2-react-calendars';
import {     
    Link
  } from "react-router-dom";

function Booking() {
    const dateValue = new Date("02/05/2021 10:30 AM");
  const minDate = new Date("02/05/2021 09:00 AM");
  const maxDate = new Date("02/06/2022 06:00 PM");
    return (
        <div>
            <form>
            <Clinics>
            <Map>
                <img src="https://img.freepik.com/free-vector/city-map-background-blue-tone_99087-101.jpg?size=626&ext=jpg"/>
            </Map>
            <InputClinic>
                <label>City & Clinic</label>
                    <select name="Current">
                        <option value=""></option>
                        <option value="area2">area2</option>
                        <option value="area3">area3</option>
                        <option value="area4">area5</option>
                </select>
            </InputClinic>           
            </Clinics>
             <Calender>   
                 <label>Date and Time</label>
                 <Calenderdateandtime>
                    <DateTimePickerComponent 
                        placeholder="Choose a date and time"
                        value={dateValue}
                        min={minDate}
                        max={maxDate}
                        format="dd-MMM-yy HH:mm"
                        step={60}
                        background="#FFF8F2">

                    </DateTimePickerComponent>
                    </Calenderdateandtime>
            </Calender>
            <ProblemDescription>
                <label>Problem Description</label>
                <Problem>
                <ProblemFisrt>
                    <ProblemOne>
                    <input type="checkbox"/>
                        Problem 1
                    </ProblemOne>
                    <ProblemTwo>
                    <input type="checkbox"/>
                        Problem 2
                    </ProblemTwo>
                    <ProblemThree>
                    <input type="checkbox"/>
                        Problem 3
                    </ProblemThree>
                    <ProblemFoure>
                    <input type="checkbox"/>
                        Problem 4
                    </ProblemFoure>
                </ProblemFisrt>
                <ProblemSecond>
                    <ProblemOne>
                   <input type="checkbox"/>Problem 5
                        
                    </ProblemOne>
                    <ProblemTwo>
                    <input type="checkbox"/>Problem 6
                       
                    </ProblemTwo>
                    <ProblemThree>
                    <input type="checkbox"/>Problem 7
                       
                    </ProblemThree>
                    <ProblemFoure>
                    <input type="checkbox"/>Problem 8
                       
                    </ProblemFoure>
                </ProblemSecond>
                </Problem>
                    <textarea rows="4" cols="50" placeholder="Tell us something about your problem to better treat you..."/>

            </ProblemDescription>
            <Tearmsandcondition>
            <input type="checkbox"/><label>By booking an appointment through us you agree to give consent for treatment (if taken) to NeoStar.</label>

            </Tearmsandcondition>
            </form>

            <NavBar>
                <ConfirmBooking>
                <Link to="/resigtration">   
                <img src="https://www.figma.com/file/TYMBLtZWY3mKDvr1blAToK/neostar-platform?node-id=5%3A1721"/>
                <label>Confirm Booking</label>
                </Link>
                </ConfirmBooking>
                <Divide>
                |
                </Divide>
                <Cancel>
                <Link to="/"> 
                <img src="https://www.figma.com/file/TYMBLtZWY3mKDvr1blAToK/neostar-platform?node-id=5%3A1742"/>
                <label>Cancel</label>
                </Link>
                </Cancel>

            </NavBar>
            </div>
    )
}

export default Booking

const Clinics = styled.div`
    overflow: none; 
    text-align: center;
`

const Map = styled.div`
   img{
    margin:30px 0px 0 0px; ;
    width:322px;
    height:215px;
    border-radius: 30px;
    position: relative ;
    }
`

const InputClinic = styled.div`  
    
        display: flex;
        align-items: center;
        justify-content: center;   
        background: #FFF8F2;
        border-radius: 30px;
        
        height: 80px;
        margin-top: -20px;
        width: 100%;
        padding-top: 10px;
     label {
        font-weight: 700;
         margin-right: 10px;
     }
     select{
        width:200px; 
        border: none;    
        height: 40px;
        border-radius: 9px;
        option {
            text-align: center;
        }
     }
    
`
const Calender = styled.div`
     
     margin: 10px 30px;
     label {
         padding-left:19px;
         margin-top: 10px;
         font-weight: 700;
         margin-right: 10px;
     }
    
`
const Calenderdateandtime = styled.div`
     
    margin-top: 4px;
    display: flex;
    align-items: center;
    justify-content: center;  
    background: #FFF8F2;
    padding: 5px 20px;
    border-radius: 12px;
    height: 70px;
`

const ProblemDescription = styled.div`
    display: grid;
    margin: 10px 30px;
    label {
        padding-left:19px;
        margin-top: 10px;
        font-weight: 700;
        margin-right: 10px;
    }
    textarea{
        background: #FFF8F2;
        border: 1px soild black;    
        height: 90px;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        border:1px solid #eaeaea;
        border-radius: 5px;
        outline:none;
    }

`
const Problem = styled.div`
    display: flex;
    padding: 20px;    
`
const ProblemFisrt = styled.div`
`
const ProblemSecond = styled.div`
    margin-left: auto;
    order: 2;    
`
const ProblemOne = styled.div`
    padding-bottom:5px;
` 
const ProblemTwo = styled.div`
    padding-bottom:5px;

` 
const ProblemThree = styled.div`
    padding-bottom:5px;
` 
const ProblemFoure = styled.div`
    padding-bottom:5px;
` 

const Tearmsandcondition = styled.div`
    align-items: center;
    text-align: center;   
    margin-bottom:10px;
    label{
        padding-left:5px;
        letter-spacing: 2px;
        font-size: 9px;
    }
    input{
       margin-left:5px;
    }
`

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
const Cancel = styled.div`

`