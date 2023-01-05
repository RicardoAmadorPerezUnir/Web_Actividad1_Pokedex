import React from "react";
import styled from "styled-components";


export const FichaProperties = ({props}) => {

    var types = props.data.types.map((type) => {
        return <div className="pill" style={{backgroundColor:`var(--${type.type.name})`}}>{type.type.name}</div>
    });
    var stats = props.data.stats.map((stat) => {
        return <li>{stat.stat.name}: {stat.base_stat}</li>
    });

    return (
        <FichaEquipoProperties>
            <div className="fichaTypes">
                    <TiposDiv>{types}</TiposDiv>
            </div>
            <div className="pokeData">
                <div className="dataLabel">
                    Altura:
                </div>
                {props.data.height /10} m
            </div>
            <div className="pokeData">
                <div className="dataLabel">
                    Peso:
                </div>
                {props.data.weight /10} kg
            </div>
            <div className="pokeDataStats">
                <div className="dataLabel">
                    Estadísticas:
                </div>
                <ul className="pokeLi">{stats}</ul>
            </div>
        </FichaEquipoProperties>
    );
}


const FichaEquipoProperties = styled.div`
    font-size: 15px;

    .fichaTypes {
        margin-bottom: .5rem;
    }
    .pokeData {
        display: flex;
        flex-direction: column;
        margin-bottom: .5rem;
    }
    .dataLabel {
        font-weight: bold;
        margin-right: .5rem;
    }
    .pokeDataStats {
        display: flex;
        flex-direction: column;
        margin-bottom: .5rem;
    }
`;

const TiposDiv = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
`;