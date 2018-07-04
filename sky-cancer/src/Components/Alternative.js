import React from 'react'

import LinksAlt from "./LinksAlt";


var Button = React.createClass({

    getInitialState: function() {
        return {
            cssClass: 'alt_button'
        }

    },

    handleClick: function() {
        if (this.state.cssClass === 'alt_button_clicked'){
            this.setState({
                cssClass: 'alt_button'
            })
        } else {
            this.setState({
                cssClass: 'alt_button_clicked'
            })
        }

    },

    render : function() {
        return (
                <button
                    onClick={this.handleClick}
                    className={this.state.cssClass}>{this.props.text}</button>
        )
    }
});

const Alternative = () => (

    <div>
        <LinksAlt />
        <div className="search_panel">
            <Button text="Szlakiem poetów"/>
            <Button text="Sport"/>
            <Button text="Ciepło"/>
            <br/>
            <Button text="Koncerty"/>
            <Button text="Muzea"/>
            <Button text="Wydarzenia sportowe"/>
            <Button text="Krajobrazy"/>
            <br/>
            <Button text="Filmy"/>
            <Button text="Dobre jedzenie"/>
            <Button text="Wino"/>
            <Button text="Zorza polarna"/>
            <br/>
            <Button text="Tajemnicze miejsca"/>
            <Button text="Góry"/>
            <Button text="Morze i plaża"/>
        </div>
    </div>
)

export default Alternative