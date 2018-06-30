import React, { Component } from 'react';
import './App.css';
//import Main from './Components/Main';
import './css/style.css';
import SearchMenu from './SearchMenu.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="wrapper">

      				<div className="header">
      					<div className="logo">
      						<img src={require("./img/logo2.jpg")} alt="logo" style={{float:'left'}}/>
      						<span style={{color:'#CF1259'}}> Fly</span>High
      						<div style={{clear:'both'}}></div>
      					</div>
      				</div>


              <SearchMenu />

      				<div className="container">
      					<header>
      						<h1 style={{textAlign:'left'}}>Najciekawsze miejsca</h1>
      					</header>
      					<div className="places">
      						<div className="place">
      							<div className="photo1">
      								<a href="#"><img src={require("./img/01.jpg")} alt="PLACE_1" /></a>
      							</div>
      							<p>Tajemnicza przygoda - od 199 zł</p>
      						</div>

      						<div className="place">
      							<div className="photo2">
      								<a href="#"><img src={require("./img/02.jpg")} alt="PLACE_2" /></a>
      							</div>
      							<p>Odkryj piękno natury - od 138 zł</p>
      						</div>

      						<div className="place">
      							<div className="photo3">
      								<a href="#"><img src={require("./img/03.jpg")} alt="PLACE_3" /></a>
      							</div>
      							<p>Niesamowite cuda natury - od 778 zł</p>
      						</div>

      						<div className="place">
      							<div className="photo4">
      								<a href="#"><img src={require("./img/04.jpg")} alt="PLACE_4" /></a>
      							</div>
      							<p>Zobacz Tadź Mahal - od 1254 zł</p>
      						</div>

      						<div className="place">
      							<div className="photo5">
      								<a href="#"><img src={require("./img/05.jpg")} alt="PLACE_5" /></a>
      							</div>
      							<p>Niebezpieczne i piękne zwierzęta - od 978 zł</p>
      						</div>

      						<div className="place">
      							<div className="photo6">
      								<a href="#"><img src={require("./img/06.jpg")} alt="PLACE_6" /></a>
      							</div>
      							<p>Wspaniałe winnice - od 63 zł</p>
      						</div>

      					</div>
      				</div>



      				<div className="footer">FlyHigh.com &copy; 2018 Najlepsza strona pomagająca znaleźć tanie loty jak kiedykolwiek świat widział. Wszystko zabronione.</div>

      			</div>
      </div>
    );
  }
}


export default App;
