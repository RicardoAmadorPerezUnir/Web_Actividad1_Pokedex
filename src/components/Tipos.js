import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Tipo } from "./Tipo";

export function Tipos() {
  const [types, setTypes] = useState([]);
  const [typeDetails, setTypeDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTypes() {
      const result = await axios.get("https://pokeapi.co/api/v2/type");
      setTypes(result.data.results.filter((x)=>x.name!=="unknown"&&x.name!=="shadow"));
    }
    fetchTypes();
  }, []);
  
  var aux=[];
  useEffect(() => {
    if(types.length>0)
      types.forEach((type)=>{
        async function fetchTypeDetails(type) {
            const result = await axios.get(type.url);
            aux.push([type.name, result.data]); 
            if(aux.length===types.length){
              setTypeDetails(aux);
              setLoading(false);
            }
        }
        fetchTypeDetails(type);
      })
  }, [types]);

  return (
    !loading?<ContenedorListaTipos className="fondo">
    {typeDetails.map((x)=><Tipo detalles={x}/> )}
    </ContenedorListaTipos>:
      <div className="text-center">
          <div className="spinner-border text-danger spinner-border-lg" style={{width:"10rem", height:"10rem", marginTop:"250px"}} role="status"></div>
      </div>
  )
}


const ContenedorListaTipos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
`;
