import React, { useEffect, useState } from 'react';

const Clock = () => {

    const componente = {
        fecha: new Date(),
        edad: 3500,
        nombre: "Iván",
        apellido: "Alagastino"
    }

    const [compon, setCompon] = useState(componente);
   
    function tick() {
        setCompon({
            fecha: new Date(),
            edad: compon.edad + 1,
            nombre: "Iván",
            apellido: "Alagastino"
        })
    }


    useEffect(() => {
        const cambio = setInterval(() => tick(), 1000);
        return () => {
            clearInterval(cambio);
        };
    });


    return (
        <div>
            <h2>
                Hora Actual: {compon.fecha.toLocaleTimeString()}
            </h2>
            <h3>
                Nombre: {compon.nombre } {compon.apellido}
            </h3>
            <h1>Edad:   {compon.edad} </h1>
        </div>
    );
}

export default Clock;
