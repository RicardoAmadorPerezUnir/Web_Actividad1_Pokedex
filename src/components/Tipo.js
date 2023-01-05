import React from "react";
import styled from "styled-components";

export const Tipo = ({detalles}) => {
    var double_damage_from = (detalles[1].damage_relations.double_damage_from).length>0?(detalles[1].damage_relations.double_damage_from).map((x) => {
        return <div className="pill" style={{backgroundColor:`var(--${x.name})`}}>{x.name}</div>
    }):"-";
    var double_damage_to = (detalles[1].damage_relations.double_damage_to).length>0?(detalles[1].damage_relations.double_damage_to).map((x) => {
        return <div className="pill" style={{backgroundColor:`var(--${x.name})`}}>{x.name}</div>
    }):"-";
    var half_damage_to = (detalles[1].damage_relations.half_damage_to).length>0?(detalles[1].damage_relations.half_damage_to).map((x) => {
        return <div className="pill" style={{backgroundColor:`var(--${x.name})`}}>{x.name}</div>
    }):"-";
    var half_damage_from = (detalles[1].damage_relations.half_damage_from).length>0?(detalles[1].damage_relations.half_damage_from).map((x) => { 
        return <div className="pill" style={{backgroundColor:`var(--${x.name})`}}>{x.name}</div>
    }):"-";
    var no_damage_from = (detalles[1].damage_relations.no_damage_from).length>0?(detalles[1].damage_relations.no_damage_from).map((x) => {
        return <div className="pill" style={{backgroundColor:`var(--${x.name})`}}>{x.name}</div>
    }):"-";
    var no_damage_to = (detalles[1].damage_relations.no_damage_to).length>0?(detalles[1].damage_relations.no_damage_to).map((x) => {
        return <div className="pill" style={{backgroundColor:`var(--${x.name})`}}>{x.name}</div>
    }):"-";


    return (
        <ContenedorTipo style={{borderColor:`var(--${detalles[0]})`}}>
            <TipoNombre>
                {detalles[0]}
            </TipoNombre>
            <TypeProperties style={{borderColor:`var(--${detalles[0]})`}}>
                <div>
                    <div className="efect_name">Efectivo contra</div>
                    <div className="type_list">{double_damage_to}</div>
                </div>
                <div>
                    <div className="efect_name">Debil contra</div>
                    <div className="type_list">{double_damage_from}</div>
                </div>
                <div>
                    <div className="efect_name">No efectivo contra</div>
                    <div className="type_list">{half_damage_to}</div>
                </div>
                <div>
                    <div className="efect_name">Resistente contra</div>
                    <div className="type_list">{half_damage_from}</div>
                </div>
                <div>
                    <div className="efect_name">Inmune a</div>
                    <div className="type_list">{no_damage_from}</div>
                </div>
                <div>
                    <div className="efect_name">Inútil contra</div>
                    <div className="type_list">{no_damage_to}</div>
                </div>
            </TypeProperties>
        </ContenedorTipo>
    );
}


const ContenedorTipo = styled.div`
    background-color: #fff;
    display: flex;
    flex-direction: row;
    margin: .5rem;
    width: calc(33% - 1rem);
    height: 450px;
    padding: 1.5rem;
    border: 10px solid;
    border-radius: 10px;
`;

const TipoNombre = styled.div`
    text-transform: capitalize;
    font-size: 1.5em;
    font-weight: bold;
    text-align: center;
    margin-bottom: 1em;
    display:flex;
    justify-content: center;
    align-items: center;
    width: 28%;
`;

const TypeProperties = styled.div`
    display: flex;
    flex-direction: column;
    width: 72%;
    justify-content: center;
    border-left: 3px dashed;

    .efect_name{
        padding: 0.1rem;
        font-weight: bold;
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