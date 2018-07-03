import React from 'react'

const Home = () => (
    <div className="container">
        <header>
            <h1 style={{textAlign:'left'}}>Najciekawsze miejsca</h1>
        </header>
        <div className="places">
            <div className="place">
                <div className="photo1">
                    <a href="#"><img src={require("../img/01.jpg")} alt="PLACE_1" /></a>
                </div>
                <p>Tajemnicza przygoda - od 199 zł</p>
            </div>

            <div className="place">
                <div className="photo2">
                    <a href="#"><img src={require("../img/02.jpg")} alt="PLACE_2" /></a>
                </div>
                <p>Odkryj piękno natury - od 138 zł</p>
            </div>

            <div className="place">
                <div className="photo3">
                    <a href="#"><img src={require("../img/03.jpg")} alt="PLACE_3" /></a>
                </div>
                <p>Niesamowite cuda natury - od 778 zł</p>
            </div>

            <div className="place">
                <div className="photo4">
                    <a href="#"><img src={require("../img/04.jpg")} alt="PLACE_4" /></a>
                </div>
                <p>Zobacz Tadź Mahal - od 1254 zł</p>
            </div>

            <div className="place">
                <div className="photo5">
                    <a href="#"><img src={require("../img/05.jpg")} alt="PLACE_5" /></a>
                </div>
                <p>Niebezpieczne i piękne zwierzęta - od 978 zł</p>
            </div>

            <div className="place">
                <div className="photo6">
                    <a href="#"><img src={require("../img/06.jpg")} alt="PLACE_6" /></a>
                </div>
                <p>Wspaniałe winnice - od 63 zł</p>
            </div>

        </div>
    </div>
)

export default Home
