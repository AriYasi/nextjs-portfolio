"use client";

import { useState, useEffect } from 'react';

let baffle = require('baffle');

export default function Title() {
    useEffect(() => {
        //Create baffle new object and target it to an element with a .obfuscation class identifier
        const obfuscateTarget = baffle('.obfuscation');
        obfuscateTarget.set({
            characters: "█▓█ ▒░/▒░ █░▒▓/ █▒▒ ▓▒▓/█<░▒ ▓/░>",
            speed: 75
        });

        obfuscateTarget.start();
        
        //Create a new promise with a setTimeout function, lets the title element load before ending the obfuscation animation
        const completeObfuscateAnimation = timeout => new Promise(resolve => {
            setTimeout(() => {
                setTimeout(() => {
                    resolve('OK')
                }, timeout)
            }, timeout);
        });
        
        completeObfuscateAnimation(1000)
        .then(result => {
            obfuscateTarget.reveal(1000);
        });
    });


    return(
        <>
            <div className="text-2xl text-main pb-4 obfuscation md:text-6xl">
                ARTUR YASINSKIY
            </div>
        </>
    );
}