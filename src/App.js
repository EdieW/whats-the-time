import React, { useState, useRef } from 'react';
import './App.css'; // Ensure you have styles here

function App() {

    const [rotationMin, setRotationMin] = useState(0); // Initial rotation angle
    const [rotationHour, setRotationHour] = useState(0); // Initial rotation angle
    const [isDragging, setIsDragging] = useState(false); // Track dragging state

    const handleMouseDown = () => {
        setIsDragging(true);
    };

    const handleMouseMove = (e, hand) => {
        if (isDragging) {
            const newRotation = rotationMin + e.movementX; // Adjust rotation based on mouse movement
            setRotationMin(newRotation);
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

	const radius = 350
	const centerRadius = 25

	const hourLen = radius * 0.5
	const hourContainerLen = hourLen
	const minLen = radius * 0.75
	const minContainerLen = minLen

	const borderLen = 20
	const borderDiameter = borderLen + 2 * radius

	const handWidth = 16
	const containerWidth = handWidth*8

	const promptWidth = 400
	const promptHeight = 150
	const promptBorderWidth = promptWidth + borderLen
	const promptBorderHeight = promptHeight + borderLen

	const width = window.innerWidth
	const height = window.innerHeight

	return (
	    <div style={{ height: '100vh', width: '100vw', backgroundColor: 'brown', position: `relative`, textAlign: `center`}}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >

            <div style={{ transform: `translateY(-100px)`}}>
                <div // CLOCK BORDER
                    style={{
                        width: `${borderDiameter}px`,
                        height: `${borderDiameter}px`,
                        backgroundColor: `black`,
                        borderRadius: `50%`,
                        position: `absolute`,
                        top: `${(height - borderDiameter)/2}px`,
                        left: `${(width - borderDiameter)/2}px`,
                    }}
                />

                <div // CLOCK
                    style={{
                        width: `${2 * radius}px`,
                        height: `${2 * radius}px`,
                        backgroundColor: `tan`,
                        borderRadius: `50%`,
                        position: `absolute`,
                        top: `${height/2 - radius}px`,
                        left: `${width/2 - radius}px`,
                    }}
                />

                <div // CLOCK CENTER
                    style={{
                        width: `${2 * centerRadius}px`,
                        height: `${2 * centerRadius}px`,
                        backgroundColor: `black`,
                        borderRadius: `50%`,
                        position: `absolute`,
                        top: `${height/2 - centerRadius}px`,
                        left: `${width/2 - centerRadius}px`,
                    }}
                />

                <div // HOUR HAND CONTAINER
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    style={{
                        width: `${containerWidth}px`,
                        height: `${hourContainerLen}px`,
                        backgroundColor: `red`,
                        borderRadius: `4px`,
                        position: `absolute`,
                        top: `${height/2 - hourContainerLen*1.25}px`,
                        left: `${width/2 - containerWidth/2}px`,
                        cursor: `grab`,
                        transform: `rotate(-30deg) rotate(${rotationHour}deg)`,
                        transformOrigin: `${containerWidth/2}px ${1.25*hourContainerLen}px`,
                        transition: `transform 0.1s ease`,
                        opacity: 70,
                    }}
                />

                <div // HOUR HAND
                    style={{
                        width: `${handWidth}px`,
                        height: `${hourLen}px`,
                        backgroundColor: `black`,
                        borderRadius: `4px`,
                        position: `absolute`,
                        top: `${height/2 - hourLen}px`,
                        left: `${width/2 - handWidth/2}px`,
                        transform: `rotate(-30deg)`,
                        transformOrigin: `${handWidth/2}px bottom`,
                    }}
                />

                <div // MINUTE HAND CONTAINER
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    style={{
                        width: `${containerWidth}px`,
                        height: `${minContainerLen}px`,
                        backgroundColor: `blue`,
                        borderRadius: `4px`,
                        position: `absolute`,
                        top: `${height/2 - minContainerLen*1.25}px`,
                        left: `${width/2 - containerWidth/2}px`,
                        cursor: `grab`,
                        transform: `rotate(45deg) rotate(${rotationMin}deg)`,
                        transformOrigin: `${containerWidth/2}px ${1.25*minContainerLen}px`,
                        transition: `transform 0.1s ease`,
                        opacity: 70,
                    }}
                />

                <div // MINUTE HAND
                    style={{
                        width: `${handWidth}px`,
                        height: `${minLen}px`,
                        backgroundColor: `black`,
                        borderRadius: `4px`,
                        position: `absolute`,
                        top: `${height/2 - minLen}px`,
                        left: `${width/2 - handWidth/2}px`,
                        transform: `rotate(45deg) rotate(${rotationMin}deg)`,
                        transformOrigin: `${handWidth/2}px bottom`,
                        transition: `transform 0.1s ease`,
                    }}
                />

            </div>

            <div // Prompt border
                style={{
                    width: `${promptWidth + borderLen}px`,
                    height: `${promptHeight + borderLen}px`,
                    backgroundColor: `black`,
                    borderRadius: `12px`,
                    position: `absolute`,
                    top: `${(height - promptBorderHeight)/2}px`,
                    left: `${(width - promptBorderWidth)/2}px`,
                    transform: `translateY(365px)`,
                }}
            />

            <div // Prompt
                style={{
                    width: `${promptWidth}px`,
                    height: `${promptHeight}px`,
                    backgroundColor: `tan`,
                    borderRadius: `8px`,
                    position: `absolute`,
                    top: `${(height - promptHeight)/2}px`,
                    left: `${(width - promptWidth)/2}px`,
                    transform: `translateY(365px)`,
                }}
            />
        </div>
	);
}

export default App;
