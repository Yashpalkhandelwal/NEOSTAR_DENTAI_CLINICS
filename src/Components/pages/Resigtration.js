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
                    <PrimeNumber>
                    <label>Email Address</label>
                    <input type="text" placeholder="Email Address"/>
                 </PrimeNumber>
                 <PrimeNumber>
                    <label>Referal Code</label>
                    <input type="text" placeholder="Referal Code"/>
                 </PrimeNumber>
                 <Problem>
               
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
overflow: hidden;
    display:grid;
    text-align: center;   
    margin-top: 10px;

    input{
        background: #FFF8F2;
        margin-right: 10px;    
        border: none;    
        height: 53px;
        margin-left: auto;
        margin-right: auto;
        width: 319px;
        border:1px solid #eaeaea;
        border-radius: 5px;
        outline:none;
    }
    
    &:focus{
        border-color:#048B90;
    }
    
    `
    const Name = styled.div`
    display:grid;

    label {
        
        text-align: left;   
        margin-left:42px;
        margin-top: 30px;
        margin-bottom: 7px;
        font-weight: 700;
        margin-right: 10px;
    }
    `

    const PhoneNumber = styled.div`
    display:grid;

    label {
        text-align: left;   
        margin-left:42px;
        margin-top: 30px;
        margin-bottom: 7px;
        font-weight: 700;
        margin-right: 10px;
    }
    `

    const PrimeNumber = styled.div`
    display:grid;

    label {
        
        text-align: left;   
        margin-left:42px;
        margin-top: 30px;
        margin-bottom: 7px;
        font-weight: 700;
        margin-right: 10px;
    }`

    

    const Whatsapp = styled.div`
    

    label {
        
        text-align: left;   
        margin-left:42px;
        margin-top: 30px;
        margin-bottom: 7px;
        font-weight: 700;
        margin-right: 10px;
    }

    input.checkbox{
        background: #FFF8F2;
        margin-right: 10px;    
        border: none;    
        height: 15px;
        margin-left: auto;
        margin-right: auto;        
        border:1px solid #eaeaea;
        border-radius: 5px;
        outline:none;
    }

    `

    const WhatsappCheckBox = styled.div`
    display:grid;
    grid-template-rows: 22px ;
    grid-gap: 10px;
    label {        
        float:left        
        text-align: center;        
        margin-top: 30px;
        margin-bottom: 7px;
        font-weight: 700;
        margin-right: 10px;
    }
    p{        
         font-size: 12px;
         margin-top:-30px;
         margin-right:-150px;
    }
   
    
    ` 

    const ColTwo = styled.div`

    `
    const Dob = styled.div`
    display:grid;
    margin-left: auto;
    margin-right: auto;
    label {
        
        text-align: left;   
        margin-left:42px;
        margin-top: 30px;
        margin-bottom: 7px;
        font-weight: 700;
        margin-right: 10px;
    }
    input {
        background: #FFF8F2;
        margin-right: 10px;    
        border: none;    
        height: 70px;
        margin-left: auto;
        margin-right: auto;
        width: 126px;
        border:1px solid #eaeaea;
        border-radius: 5px;
        outline:none;
    }

    `

    const Calenderdateandtime = styled.div`
    margin-top: 4px;    
    background: #FFF8F2;
    padding: 5px 20px;
    border-radius: 12px;
    height: 53px;
    width:183px;
    margin-left:40px;
`
const ValueGender = styled.div`
padding-top:10px;   
    
`
const Gender = styled.div`
   
    margin-top:-85px;
    margin-right:-199px;

    label {
        
          
        margin-left:-45px;
        margin-top: 30px;
        margin-bottom: 7px;
        font-weight: 700;
        margin-right: 10px;
    }

select{
    
    background: #FFF8F2;
    width:126px; 
    border: none;    
    height: 53px;
    border-radius: 9px;
    option {
        text-align: center;
    }`

    const Problem = styled.div`
    display : flex;
    flex-direction: column  ; 
    justify-content: : space-evenly;
    input.checkbox{
        background: #FFF8F2;
        margin-right: 10px;    
        border: none;    
        height: 15px;
        margin-left: auto;
        margin-right: auto;        
        border:1px solid #eaeaea;
        border-radius: 5px;
        outline:none;
    }
    
`


const ProblemOne = styled.div`
    
` 
const ProblemTwo = styled.div`
   

` 
const ProblemThree = styled.div`
   
` 
const ProblemFoure = styled.div`
   
` 