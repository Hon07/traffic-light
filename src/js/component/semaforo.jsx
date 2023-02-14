import React, { useState } from 'react';

const TrafficLight = () => {
    const [color, setColor] = useState("");
    const [colors, setColors] = useState(["red", "yellow", "green"]);

    function selectColor(lightColor, index) {
        return (
            <div
                key={index}
                onClick={() => setColor(lightColor)}
                className={color == lightColor ? `selected light ${lightColor}` : `light ${lightColor}`}>
            </div>
        );
    }

    function eliminar(colorIndex) {
        let newColors = [...colors];
        newColors.splice(colorIndex, 1);
        setColors(newColors);
    }

    function nuevoColor() {
        if (colors.length < 4) {
            let nuevoColor = [...colors, "blue"];
            setColors(nuevoColor);
        }
    }

    return (
        <div className="container">
            <div className="poste"></div>
            <div className="semaforo">
                {
                    colors.map(selectColor)
                }
            </div>
            <div>
                <div className="btn-group mt-3 btn btn-primary" role="group" aria-label="Basic example">
                    <button onClick={() => nuevoColor()} type="button" className="btn btn-primary" style={{backgroundColor: "pink"}}>Añadir Color</button>
                    <button onClick={() => eliminar(3)} type="button" className="btn btn-primary" style={{backgroundColor: "red"}}>Eliminar Color</button>
                </div>
            </div>
        </div>
    );
};

export default TrafficLight;

