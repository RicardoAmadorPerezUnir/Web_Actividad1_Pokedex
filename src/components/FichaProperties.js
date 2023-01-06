import React from "react";
import styled from "styled-components";


export const FichaProperties = ({data}) => {

    var types = data.types.map((type) => {
        return <div className="pill" style={{backgroundColor:`var(--${type.type.name})`}}>{type.type.name}</div>
    });
    var stats = data.stats.map((stat) => {
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
                {data.height /10} m
            </div>
            <div className="pokeData">
                <div className="dataLabel">
                    Peso:
                </div>
                {data.weight /10} kg
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
    font-size: 13px;
    margin: .8rem;

    .fichaTypes {
        margin-bottom: .7rem;
    }
    .pokeData {
        display: flex;
        flex-direction: row;
        margin-bottom: .5rem;
    }
    .dataLabel {
        font-family: "dogica_pixelbold";
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