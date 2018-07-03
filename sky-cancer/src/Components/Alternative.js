import React from 'react'

import Links from "./Links";

const Alternative = () => (

    <div>
        <Links />
        <div className="search_panel">
            <button className="alt_button" type="button">Szlakiem poetów</button>
            <button className="alt_button" type="button">Spacery</button>
            <button className="alt_button" type="button">Sport</button>
            <button className="alt_button" type="button">Ciepło</button>
            <br/>
            <button className="alt_button" type="button">Koncerty</button>
            <button className="alt_button" type="button">Muzea</button>
            <button className="alt_button" type="button">Wydarzenia sportowe</button>
            <button className="alt_button" type="button">Krajobrazy</button>
            <br/>
            <button className="alt_button" type="button">Filmy</button>
            <button className="alt_button" type="button">Dobre jedzenie</button>
            <button className="alt_button" type="button">Wino</button>
            <button className="alt_button" type="button">Zorza polarna</button>
            <br/>
            <button className="alt_button" type="button">Tajemnicze miejsca</button>
            <button className="alt_button" type="button">Góry</button>
            <button className="alt_button" type="button">Morze i plaża</button>
        </div>
    </div>
)

export default Alternative