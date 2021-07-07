import React from "react";
import "./style.css"

const Footer = () => {
    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <footer className="bg-light text-secondary text-center">
                <p>
                    <a href="https://github.com/mirrorlessmind.com" target="_blank">Cigi Tipton</a> | {(new Date().getFullYear())}
                </p>
            </footer>
        </div>
    );
} 

export default Footer;