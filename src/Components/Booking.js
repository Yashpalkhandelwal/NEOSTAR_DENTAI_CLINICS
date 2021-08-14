import React from 'react'
import styled from 'styled-components'
import {DateTimePickerComponent} from '@syncfusion/ej2-react-calendars';

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
                <label for="dog-names">City & Clinic</label>
                    <select name="Current">
                        <option value=""></option>
                        <option value="area2">area2</option>
                        <option value="area3">area3</option>
                        <option value="area4">area5</option>
                </select>
            </InputClinic>           
            </Clinics>
             <Calender>   
                 <label for="dog-names">Date and Time</label>
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
            </form>

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
        font-weight: 600;
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
         padding-left:10px;
         margin-top: 10px;
         font-weight: 600;
         margin-right: 10px;
     }

     DateTimePickerComponent{
        
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
