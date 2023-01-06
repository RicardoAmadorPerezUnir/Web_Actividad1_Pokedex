import React from "react";
import styled from "styled-components";

/*
Campos a leer
----------------
move.name
move.power
move.pp
move.accuracy
move.effect_entries[0].effect
move.type.name
*/

export const Movimiento = ({detalles}) => {
    var accuracy = detalles[1].accuracy===null?"-":detalles[1].accuracy + "%";
    var power = detalles[1].power===null?"-":detalles[1].power;

    return (
        <ContenedorMov>
            <MovNombre>
                {detalles[0]}
            </MovNombre>
            <MovProperties className="font-size-moves" style={{borderColor:`var(--${detalles[1].type.name})`}}>
                <div>
                    <div className="move_label font-bold">Tipo</div>
                    <div className="pill" style={{backgroundColor:`var(--${detalles[1].type.name})`}}>
                        <div className="type_list">
                            {detalles[1].type.name}
                        </div>
                    </div>
                </div>
                <div>
                    <div className="move_label font-bold">Potencia</div>
                    <div className="move_detail">{power}</div>
                </div>
                <div>
                    <div className="move_label font-bold">Usos</div>
                    <div className="move_detail">{detalles[1].pp}</div>
                </div>
                <div>
                    <div className="move_label font-bold">Precision</div>
                    <div className="move_detail">{accuracy}</div>
                </div>
                <div>
                    <div className="move_label font-bold">Efecto</div>
                    <div className="move_detail effect">{detalles[1].effect_entries[0].effect}</div>
                </div>
            </MovProperties>
        </ContenedorMov>
    );
}


const ContenedorMov = styled.div`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    margin: 1%;
    width: 23%;
    height: 550px;
    padding: 1rem;
    border-radius: 16px;
`;

const MovNombre = styled.div`
    text-transform: capitalize;
    font-size: 1.5em;
    font-weight: bold;
    text-align: center;
    margin-bottom: 1em;
    display:flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const MovProperties = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    border-top: 3px dotted;
    padding-top: 1.5rem;
    margin-bottom: 1rem;
    gap: 1rem;

    .pill{
        text-transform: uppercase;
        padding: 0.3rem .6rem;
        border: 1px solid #aaa;
        border-radius: 25px;
        color: #fff;
        margin: 0.4rem auto;
        width: 30%;
      }

    .move_label{
        padding: 0.1rem;
        font-weight: bold;
        text-align: center;
    }
    
    .move_detail{
        padding: 0.1rem;
        text-align: center;
    }

    .effect{
        height: 120px;
        text-align: center;
        overflow: hidden;
        overflow-y: auto;
        padding: 4px;
    }

    .type_list{
        padding: 0.1rem;
        justify-content: center;
        text-transform: capitalize;
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
        flex-wrap: wrap;
    }
`;