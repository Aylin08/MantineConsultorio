import { Group, TextInput, Button, Card } from '@mantine/core'
import React from 'react'
import { useState } from 'react';
import { AppSh } from '../components/AppSh'


const buscador = () => {
  const [search, setSearch] = useState('');
  const [entradaFilter, setEntradaFilter]=useState([]);

  const busqueda = async () => {
    const url = 'https://alimentos-b401e-default-rtdb.firebaseio.com/SMAE.json'
    const respuesta = await fetch(url)
    const entradas = await respuesta.json()

    setEntradaFilter(entradas.filter(entrada => {
      return entrada.Alimento.toLowerCase().includes(search.toLowerCase());

    }));  
console.log(entradaFilter);
  }
  return (
    <AppSh>
      <Group>
        <TextInput
          label="¿Qué deseas buscar?"
          placeholder=""
          id="busca"
          value={search}
          onChange={(event) => setSearch(event.currentTarget.value)}
        />
        <Button onClick={busqueda}> Buscador</Button>

        <div>
          {entradaFilter.map((entrada, index)=>{
            return (
              <p key={index}>{entrada.Alimento }</p>
            )
            

          })}
        </div>
      </Group>

    </AppSh>

  )
}



export default buscador