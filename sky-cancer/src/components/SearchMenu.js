import React, {Component} from 'react';
import { Link } from 'react-router-dom'


const SearchMenu = () => (
  <div className="SearchMenu">
      <div className="menu">
      <div className="input_panel">
        <div className="place_input">
          <form>
              <div style={{float:'left',marginRight:'20px'}}>
                <label htmlFor="from_input">Z</label>
                <input id="from_input" type="text" value="Gdziekolwiek" readOnly />
               </div>

              <div style={{float:'left'}}>
                <label htmlFor="to_input">Do</label>
                <input id="to_input" type="text" value="Gdziekolwiek" readOnly />
              </div>

               <div style={{clear:'both'}}></div>
          </form>
        </div>


        <div className="date_input">
          <form>
              <div style={{float:'left',marginRight:'20px'}}>
                <label htmlFor="departure_input">Wylot</label>
                <input id="departure_input" type="text" value="Dowolny" readOnly />
               </div>

              <div style={{float:'left'}}>
                <label htmlFor="return_input">Powrót</label>
                <input id="return_input" type="text" value="Dowolny" readOnly />
              </div>

              <Link to="/place_prices">
              <div className="submit_container" >
                <input type="submit" value="Szukaj" />
              </div>
              </Link>


               <div style={{clear:'both'}}></div>
          </form>
        </div>
        <div style={{clear:'both'}}></div>
      </div>

      <div className="search_panel">
        <button className="search_button" type="button">Więcej opcji</button>
        <button className="search_button" type="button">Co Cię interesuje?</button>
      </div>
    </div>
  </div>
)

export default SearchMenu;
