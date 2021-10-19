import React from 'react'
import { useEffect, useState } from 'react'
import './App.css'
const Covid = () => {

    const [data, setData] = useState([])


    const getCovidData = async () => {
        try {
            const res = await fetch("https://data.covid19india.org/data.json");
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        } catch(err) {
            console.log(err);
        }
       
    }

    useEffect(() => {
        getCovidData();
    }, [])


    return (
        <>
           <h1 className="header">🔴 LIVE</h1> 
           <h2 className="header2">COVID-19 CORONAVIRUS TRACKER</h2>
           
               
           <div className="card">
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name">COUNTRY</p>
                            <p className="card__total card__smaller">INDIA</p>
                        </div>
                    </div>
               </div>

               <div className="card">
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name">TOTAL RECOVERED</p>
                            <p className="card__total card__smaller">{data.recovered}</p>
                        </div>
                    </div>
               </div>

               
               <div className="card">
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name">TOTAL CONFIRMED</p>
                            <p className="card__total card__smaller">{data.confirmed}</p>
                        </div>
                    </div>
               </div>

               <div className="card">
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name">TOTAL DEATH</p>
                            <p className="card__total card__smaller">{data.deaths}</p>
                        </div>
                    </div>
               </div>

               <div className="card">
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name">TOTAL ACTIVE</p>
                            <p className="card__total card__smaller">{data.active}</p>
                        </div>
                    </div>
               </div>


               
               <div className="card">
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name">TOTAL UPDATED</p>
                            <p className="card__total card__smaller">{data.lastupdatedtime}</p>
                        </div>
                    </div>
               </div>
        </>
    )
}

export default Covid
