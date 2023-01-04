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
            <MovProperties style={{borderColor:`var(--${detalles[1].type.name})`}}>
                <div>
                    <div className="move_label">Tipo</div>
                    <div className="pill" style={{backgroundColor:`var(--${detalles[1].type.name})`}}>
                        <div className="type_list">
                            {detalles[1].type.name}
                        </div>
                    </div>
                </div>
                <div>
                    <div className="move_label">Potencia</div>
                    <div className="move_detail">{power}</div>
                </div>
                <div>
                    <div className="move_label">Usos</div>
                    <div className="move_detail">{detalles[1].pp}</div>
                </div>
                <div>
                    <div className="move_label">Precision</div>
                    <div className="move_detail">{accuracy}</div>
                </div>
                <div>
                    <div className="move_label">Efecto</div>
                    <div className="move_detail">{detalles[1].effect_entries[0].effect}</div>
                </div>
            </MovProperties>
        </ContenedorMov>
    );
}


const ContenedorMov = styled.div`
    display: flex;
    flex-direction: column;
    margin: .5rem;
    width: calc(25% - 1rem);
    height: 460px;
    padding: 1rem;
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

    .pill{
        text-transform: uppercase;
        font-size: 1rem;
        padding: 0.2rem 0.4rem;
        border: 1px solid #aaa;
        border-radius: 25px;
        color: #fff;
        margin: 0.1rem;
        width: 25%;
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