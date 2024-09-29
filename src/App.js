import React, { useState } from 'react';
import './App.css'; // Ensure you have styles here

function App() {
    const [rotationMin, setRotationMin] = useState(0); // Initial rotation angle for minute hand
    const [rotationHour, setRotationHour] = useState(0); // Initial rotation angle for hour hand
    const [isDragging, setIsDragging] = useState(false); // Track dragging state
    const [activeHand, setActiveHand] = useState(null); // Track which hand is active

    const width = window.innerWidth;
    const height = window.innerHeight;

    const sensitivity = 0.8

    const handleMouseDown = (hand) => {
        setIsDragging(true);
        setActiveHand(hand);
    };

    const handleMouseMove = (e) => {
        if (isDragging) {
            const deltaX = e.movementX * sensitivity; // Get mouse movement in X direction
            if (activeHand === "m") {
                setRotationMin(rotationMin + deltaX); // Adjust rotation for minute hand
            } else if (activeHand === "h") {
                setRotationHour(rotationHour + deltaX); // Adjust rotation for hour hand
            }
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        setActiveHand(null); // Reset active hand when mouse is released
    };

    const radius = 350;
    const centerRadius = 25;
    const containerOpacity = 0.05; //Change opacity of containers for debugging

    const hourLen = radius * 0.5;
    const minLen = radius * 0.75;

    const borderLen = 20;
    const borderDiameter = borderLen + 2 * radius;

    const handWidth = 16;
    const containerWidth = handWidth * 6;

    const promptWidth = 400;
    const promptHeight = 150;
    const promptBorderWidth = promptWidth + borderLen;
    const promptBorderHeight = promptHeight + borderLen;

    return (
        <div
            style={{ height: '100vh', width: '100vw', backgroundColor: 'brown', position: 'relative', textAlign: 'center' }}
            onMouseMove={handleMouseMove} // Attach mouse move to the main container
            onMouseUp={handleMouseUp} // Attach mouse up to the main container
            onMouseLeave={handleMouseUp} // Ensure mouse up is called when leaving the container
        >
            <div style={{ transform: `translateY(-100px)` }}>
                {/* CLOCK BORDER */}
                <div style={{
                    width: `${borderDiameter}px`,
                    height: `${borderDiameter}px`,
                    backgroundColor: `black`,
                    borderRadius: `50%`,
                    position: `absolute`,
                    top: `${(height - borderDiameter) / 2}px`,
                    left: `${(width - borderDiameter) / 2}px`,
                }} />

                {/* CLOCK */}
                <div style={{
                    width: `${2 * radius}px`,
                    height: `${2 * radius}px`,
                    backgroundColor: `tan`,
                    borderRadius: `50%`,
                    position: `absolute`,
                    top: `${height / 2 - radius}px`,
                    left: `${width / 2 - radius}px`,
                }} />

                {/* CLOCK CENTER */}
                <div style={{
                    width: `${2 * centerRadius}px`,
                    height: `${2 * centerRadius}px`,
                    backgroundColor: `black`,
                    borderRadius: `50%`,
                    position: `absolute`,
                    top: `${height / 2 - centerRadius}px`,
                    left: `${width / 2 - centerRadius}px`,
                }} />

                {/* HOUR HAND */}
                <div style={{
                    width: `${handWidth}px`,
                    height: `${hourLen}px`,
                    backgroundColor: `black`,
                    borderRadius: `4px`,
                    position: `absolute`,
                    top: `${height / 2 - hourLen}px`,
                    left: `${width / 2 - handWidth / 2}px`,
                    transform: `rotate(-30deg) rotate(${rotationHour}deg)`,
                    transformOrigin: `${handWidth / 2}px bottom`,
                    transition: `transform 0.1s ease`,
                }} />

                {/* MINUTE HAND */}
                <div style={{
                    width: `${handWidth}px`,
                    height: `${minLen}px`,
                    backgroundColor: `black`,
                    borderRadius: `4px`,
                    position: `absolute`,
                    top: `${height / 2 - minLen}px`,
                    left: `${width / 2 - handWidth / 2}px`,
                    transform: `rotate(45deg) rotate(${rotationMin}deg)`,
                    transformOrigin: `${handWidth / 2}px bottom`,
                    transition: `transform 0.1s ease`,
                }} />

                {/* HOUR HAND CONTAINER */}
                <div
                    onMouseDown={() => handleMouseDown("h")} // Set active hand on mouse down
                    style={{
                        width: `${containerWidth}px`,
                        height: `${hourLen}px`,
                        backgroundColor: `red`,
                        borderRadius: `80px`,
                        position: `absolute`,
                        top: `${height / 2 - hourLen * 1.15}px`,
                        left: `${width / 2 - containerWidth / 2}px`,
                        cursor: `grab`,
                        transform: `rotate(-30deg) rotate(${rotationHour}deg)`,
                        transformOrigin: `${containerWidth / 2}px ${1.15 * hourLen}px`,
                        transition: `transform 0.1s ease`,
                        opacity: `${containerOpacity}`,
                    }}
                />

                {/* MINUTE HAND CONTAINER */}
                <div
                    onMouseDown={() => handleMouseDown("m")} // Set active hand on mouse down
                    style={{
                        width: `${containerWidth}px`,
                        height: `${minLen}px`,
                        backgroundColor: `blue`,
                        borderRadius: `80px`,
                        position: `absolute`,
                        top: `${height / 2 - minLen * 1.1}px`,
                        left: `${width / 2 - containerWidth / 2}px`,
                        cursor: `grab`,
                        transform: `rotate(45deg) rotate(${rotationMin}deg)`,
                        transformOrigin: `${containerWidth / 2}px ${1.1 * minLen}px`,
                        transition: `transform 0.1s ease`,
                        opacity: `${containerOpacity}`,
                    }}
                />
            </div>

            {/* Prompt Border */}
            <div style={{
                width: `${promptWidth + borderLen}px`,
                height: `${promptHeight + borderLen}px`,
                backgroundColor: `black`,
                borderRadius: `12px`,
                position: `absolute`,
                top: `${(height - promptBorderHeight) / 2}px`,
                left: `${(width - promptBorderWidth) / 2}px`,
                transform: `translateY(365px)`,
            }} />

            {/* Prompt */}
            <div style={{
                width: `${promptWidth}px`,
                height: `${promptHeight}px`,
                backgroundColor: `tan`,
                borderRadius: `8px`,
                position: `absolute`,
                top: `${(height - promptHeight) / 2}px`,
                left: `${(width - promptWidth) / 2}px`,
                transform: `translateY(365px)`,
            }} />
        </div>
    );
}

export default App;
