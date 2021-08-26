import React from 'react'
import Searchbar from '../Searchbar'
import Silder from '../Silder'
import TreatmentList from '../TreatmentList'


function Home() {
    return (
        <div>
            <Searchbar />
            <Silder/>
            <TreatmentList/>
        </div>
    )
}

export default Home
