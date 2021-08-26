import React from 'react'
import Searchbar from '../Searchbar'
import Silder from '../Silder'
import TreatmentList from '../TreatmentList'
import Navfooter from '../Navfooter'


function Home() {
    return (
        <div>
            <Searchbar />
            <Silder/>
            <TreatmentList/>
            <Navfooter/>
        </div>
    )
}

export default Home
