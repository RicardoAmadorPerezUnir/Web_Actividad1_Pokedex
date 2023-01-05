import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Movimiento } from "./Movimiento";

export function Movimientos() {
  const [moves, setMoves] = useState([]);
  const [moveDetails, setMoveDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMoves() {
      const result = await axios.get("https://pokeapi.co/api/v2/move?offset=390&limit=52");
      setMoves(result.data.results);
    }
    fetchMoves();
  }, []);
  
  var aux=[];
  useEffect(() => {
    if(moves.length>0)
      moves.forEach((type)=>{
        async function fetchMoveDetails(type) {
            const result = await axios.get(type.url);
            aux.push([type.name, result.data]); 
            if(aux.length===moves.length){
              setMoveDetails(aux);
              setLoading(false);
            }
        }
        fetchMoveDetails(type);
      })
  }, [moves]);

  return (
    !loading?<ContenedorListaMoves className="fondo">
    {moveDetails.map((x)=><Movimiento detalles={x}/> )}
    </ContenedorListaMoves>:
      <div className="text-center">
        <div className="spinner-border text-danger spinner-border-lg" style={{width:"10rem", height:"10rem", marginTop:"250px"}} role="status"></div>
      </div>
  )
}


const ContenedorListaMoves = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
`;
