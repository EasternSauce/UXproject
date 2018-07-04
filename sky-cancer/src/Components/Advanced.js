import React from 'react'

import LinksAdv from "./LinksAdv";

const Advanced = () => (

    <div>
        <LinksAdv />
        <div className="input_panel">
            <form><br/>
            <input type="checkbox" className="marginL" /> Okoliczne lotniska<br/>
            <input type="checkbox" className="marginL" /> Unikaj przesiadek wymagających wizy<br/>
            <input type="checkbox" className="margin" /> Tylko loty bezpośrednie<br/>

                        <div className="place_input">

                                <div className="classBtn">
                                    <label htmlFor="from_input">Klasa podróży</label>
                                    <select id="from_input" value="Ekonomiczna">
                                        <option value="Ekonomiczna">Ekonomiczna</option>
                                        <option value="Biznes">Biznes</option>
                                        <option value="Dowolna">Dowolna</option>
                                    </select>
                                </div>

                                <div className="optionsBtn">
                                    <label htmlFor="to_input">Ilość osób</label>
                                    <input id="to_input" type="text" value="1" />
                                </div>

                                <div className="optionsBtn">
                                    <label htmlFor="departure_input">Przesiadki</label>
                                    <select id="from_input" value="Długie">
                                        <option value="Długie">Długie</option>
                                        <option value="Krótkie">Krótkie</option>
                                        <option value="Dowolne">Dowolne</option>
                                    </select>
                                </div>

                                <div className="left">
                                    <label htmlFor="return_input">Linie lotnicze</label>
                                    <select id="from_input" value="Dowolne" className="marginB">
                                        <option value="Dowolne">Dowolne</option>
                                        <option value="Ryanair">Ryanair</option>
                                        <option value="Wizzair">Wizzair</option>
                                        <option value="EasyJet">EasyJet</option>
                                        <option value="Lufthansa">Lufthansa</option>
                                        <option value="LOT">LOT</option>
                                    </select>
                                </div>
                                <div className="clear"></div>

                        </div>
                    <br/><br/>
            </form>
        </div>
    </div>
)

export default Advanced