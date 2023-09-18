import React from "react";
import Card from "./Card";

const App = () => {
    return (
        <div className="container">
            <h1>Music I like</h1>

            <div className="row g-3">
                <div className="col">
                <Card 
                albumTitle="Revolver"
                albumDescription="Revolver is the seventh studio albums by the English rock band the Beatles. Released on 5 August 1966, it was the Beatles' final recording project before their retirement as live performers and marked the group's most overt use of studio technology up to that time, building on the advances of their late 1965 release Rubber Soul."
                imgURL="https://m.media-amazon.com/images/I/91ffeWzPNpL._SL1500_.jpg"
                buttonText="OK"
                test=''
                />
            </div>
            <div className="col">
                <Card 
                albumTitle="Rubber Soul"
                albumDescription={"Rubber Soul is the sixth studio albums by the English rock band the Beatles. It was released on 3 December 1965 in the United Kingdom, on EMI's Parlophone label, accompanied by the non-albums double A-side single \"Day Tripper\" / \"We Can Work It Out\"."}
                imgURL="https://m.media-amazon.com/images/I/81EF5zXRFdL._SL1500_.jpg"
                buttonText="OK"
                />
            </div>
            <div className="col">
                <Card 
                albumTitle="Please Please Me"
                albumDescription="Please Please Me is the debut studio albums by the English rock band the Beatles."
                imgURL="https://m.media-amazon.com/images/I/61LdKbic+wL.jpg"
                buttonText="OK"
                />
                </div>
            </div>            
        </div>
    );
}

export default App;