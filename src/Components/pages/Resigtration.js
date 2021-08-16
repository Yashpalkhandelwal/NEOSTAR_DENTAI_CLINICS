import React from 'react'
import styled from 'styled-components'
import {DatePickerComponent} from '@syncfusion/ej2-react-calendars';
import ResigtrationBottomNavBar from '../ResigtrationBottomNavBar'

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
                 <Calenderdateandtime>                
                    <DatePickerComponent 
                        placeholder="Choose a date and time"
                        value={dateValue}
                        min={minDate}
                        max={maxDate}
                        format="dd-MMM-yy"
                        step={60}
                        background="#FFF8F2">

                    </DatePickerComponent>
                    </Calenderdateandtime>
                    
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

            <ResigtrationBottomNavBar/>
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
        border:1px solid #eaeaea;
        border-radius: 5px;
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

const Calenderdateandtime = styled.div`

`
const ValueGender = styled.div`
select{
    background: #FFF8F2;  
    width:126px; 
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