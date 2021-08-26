import React from 'react'
import styled from 'styled-components'
import {DatePickerComponent} from '@syncfusion/ej2-react-calendars';
import {     
    Link
  } from "react-router-dom";


function Resigtration() {
    const dateValue = new Date("02/05/2021 10:30 AM");
    const minDate = new Date("02/05/1900 09:00 AM");
    const maxDate = new Date("02/06/2018 06:00 PM");
    return (
        <>
         <Form>
             <Name>
                    <label>Name</label>
                    <input type="text" placeholder="Name"/>
              </Name>
                 <PhoneNumber>
                <PrimeNumber>
                    <label>Phone Number</label>
                    <input type="text" placeholder="Phone Number"/>
                 </PrimeNumber>
                 <Whatsapp>
                     <WhatsappCheckBox>
                    <label>Whatsapp Number </label>
                    <input type="checkbox" Class="checkbox" />
                            <p>Same as Phone Number</p>
                     </WhatsappCheckBox>
                    <input type="text" placeholder="Whatsapp Number"/>
                 </Whatsapp>
                 </PhoneNumber>
                 <ColTwo>
                 <Dob>
                 <label>DOB</label>
                 <DobDate>                
                    <DatePickerComponent 
                        placeholder="Choose a date and time"
                        value={dateValue}
                        min={minDate}
                        max={maxDate}
                        format="dd-MMM-yy"
                        step={60}
                        background="#FFF8F2">

                    </DatePickerComponent>
                    </DobDate>
                    
                    </Dob>
                    <Gender>
                    <label>Gender</label>
                    <ValueGender>
                    <select name="Current">
                        <option value="">M</option>
                        <option value="area2">F</option>
                        
                </select>
                </ValueGender>
                    </Gender>
                    </ColTwo>
                <EmailAddress>
                    <label>Email Address</label>
                    <input type="text" placeholder="Email Address"/>
                 </EmailAddress>
                 <ReferalCode>
                    <label>Referal Code</label>
                    <input type="text" placeholder="Referal Code"/>
                 </ReferalCode>
                 <Problem>
                    <label>Do your have any problem related to these?</label>
                    <ProblemOne>
                    <input type="checkbox" Class="checkbox"/>
                    Blood Pressure
                    </ProblemOne>
                    <ProblemTwo>
                    <input type="checkbox" Class="checkbox"/>
                    Diabetes
                    </ProblemTwo>
                    <ProblemThree>
                    <input type="checkbox" Class="checkbox"/>
                    Thyroid
                    </ProblemThree>
                    <ProblemFoure>
                    <input type="checkbox" Class="checkbox"/>
                    Kidney
                    </ProblemFoure>
                    <ProblemFoure>
                    <input type="checkbox" Class="checkbox"/>
                    Asthma
                    </ProblemFoure>
                    <ProblemFoure>
                    <input type="checkbox" Class="checkbox"/>
                    Other
                    </ProblemFoure>
                
                </Problem>
            </Form>

            <NavBar>
                <Save>
                <Link to="/UserLogedIn">   
                <img src="https://www.figma.com/file/TYMBLtZWY3mKDvr1blAToK/neostar-platform?node-id=5%3A1721" alt=""/>
                <label>Save</label>
                </Link>
                </Save>
                <Divide>
                |
                </Divide>
                <Discard>
                <Link to="/"> 
                <img src="https://www.figma.com/file/TYMBLtZWY3mKDvr1blAToK/neostar-platform?node-id=5%3A1742" alt=""/>
                <label>Discard</label>
                </Link>
                </Discard>

            </NavBar>
        </>
    )
}

export default Resigtration


const Form = styled.div`
    display: flex;
    flex-flow: column wrap;
    flex-direction: column ;
    justify-content: space-evenly;
    align-items:flex-start ;

    label{
        padding-bottom:7px;
        font-size:16px;
        font-weight:700;
    }

    input{
        background: #FFF8F2;    
        border: none;    
        height: 53px;            
        width: 319px;
        border:0px solid #eaeaea;
        border-radius: 12px;
        outline:none;       
        
        &:focus{
            border-color:#048B90;
        }


    `
const Name = styled.div`
        display: flex;
        flex-flow: column wrap;
        flex-direction: column ;
        padding:30px;     


            
            
        }
    `

const PhoneNumber = styled.div`
        display: flex;
        flex-flow: column wrap;
        flex-direction: column ;
       

    `

const PrimeNumber = styled.div`
display: flex;
flex-flow: column wrap;
flex-direction: column ;
padding:0 30px;
    `

    

const Whatsapp = styled.div`
    left:0
    display: flex;
    flex-flow: column wrap;
    flex-direction: column ;
    padding: 0 30px;
    
    
    `

const WhatsappCheckBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top:30px; 
    label{
        height:8px;
        width:180px;
    }
    input.checkbox{
        height:20px;
        width:20px;
    }
    p{
        font-size:10px;
        padding:0;
    }

    ` 

const ColTwo = styled.div`
    display: flex;
        flex-flow: row wrap;
        flex-direction: row ;
    `
const Dob = styled.div`
    left:0
    display: flex;
    flex-flow: column wrap;
    flex-direction: column ;
    padding: 30px;


    `

const DobDate = styled.div`
    width:120px;

`
const ValueGender = styled.div`
select{
    background: #FFF8F2;  
    width:120px; 
    border: none;    
    height: 40px;
    border-radius: 9px;
    option {
        text-align: center;
    }
    
`
const Gender = styled.div`
padding: 30px;
`
const EmailAddress = styled.div`
display: flex;
        flex-flow: column wrap;
        flex-direction: column ;
        padding:0 30px;   
`
const ReferalCode = styled.div`
display: flex;
        flex-flow: column wrap;
        flex-direction: column ;
        padding:30px;   
`
const Problem = styled.div`
    display: flex;
    flex-flow: column wrap;
    flex-direction: row ;
    padding: 0 30px;
    
    
`


const ProblemOne = styled.div`
    padding-right:9px;
    input.checkbox{
    height:20px;
    width:20px;
}
` 
const ProblemTwo = styled.div`
    padding-right:9px;
    input.checkbox{
    height:20px;
    width:20px;
}

` 
const ProblemThree = styled.div`
    padding-right:9px;
    input.checkbox{
    height:20px;
    width:20px;
}
` 
const ProblemFoure = styled.div`
    padding:10px 9px 10px;    
    input.checkbox{
    height:20px;
    width:20px;
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
const Save = styled.div`
    
    
`
const Divide = styled.div`

`
const Discard = styled.div`

`

