import React from 'react'
import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"


export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ['Web Developer', 'Graphic Designer']
        })

    }, [])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imageContainer">
                    <img src="assets/profile.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello, I'm</h2>
                    <h1>Luis Martinez</h1>
                    <h3>Freelance <span ref={textRef}></span></h3>
                </div>
                <a href="#skills">
                    <img src="assets/arrow.png" alt="" />
                </a>
            </div>
        </div>
    )
}
