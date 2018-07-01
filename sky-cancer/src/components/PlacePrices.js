import React from 'react'

const PlacePrices = () => (
  <div className="PlacePrices">
		<div className="places_prices">
			<fieldset>
			<h2 style={{color: '#c91d5f'}}> Miejsca wybrane dla Ciebie: </h2>
			<table align='center'>
				<tr>
				<td><img className="small_photo" src={require("../img/11.JPG")} /></td>
				<td><button className="place_button"> Wiedeń </button></td>
				<td className="price">  57zł </td>
				<td><button className="flights"> Loty </button></td>
				</tr>
				<tr>
				<td><img className="small_photo" src={require("../img/08.JPG")} /></td>
				<td><button className="place_button"> Bergen </button></td>
				<td className="price">  78zł </td>
				<td><button className="flights"> Loty </button></td>
				</tr>
				<tr>
				<td><img className="small_photo" src={require("../img/10.JPG")} /></td>
				<td><button className="place_button"> Cagliari </button></td>
				<td className="price">  138zł </td>
				<td><button className="flights"> Loty </button></td>
				</tr>
				<tr>
				<td><img className="small_photo" src={require("../img/09.JPG")} /></td>
				<td><button className="place_button"> Lizbona </button></td>
				<td className="price">  199zł </td>
				<td><button className="flights"> Loty </button></td>
				</tr>
				<tr>
				<td><img className="small_photo" src={require("../img/07.JPG")} /></td>
				<td><button className="place_button"> Porto </button></td>
				<td className="price">  239zł </td>
				<td><button className="flights"> Loty </button></td>
				</tr>
			</table>
			</fieldset>
		</div>
  </div>
)

export default PlacePrices
