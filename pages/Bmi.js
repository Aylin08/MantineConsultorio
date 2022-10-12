import { TextInput, Group } from '@mantine/core';
import { useState } from 'react';
import { AppSh } from '../components/AppSh';
import Metodos from './metodos';
import Layout from '../components/Layout';
const Bmi = () => {

  const [peso, setPeso] = useState(0.0);
  const [altura, setAltura] = useState(0.0);
  const [bmii, setBmii] = useState(0.0);
  const [resultado, setResultado] = useState("");

  return (
    <AppSh>
<Layout tituloPagina='BMI'/>
      <Group position="center">
        <TextInput
          placeholder="Ingrese su peso"
          label="Peso (kg)"
          id='w'
          onChange={(event) => setPeso(event.currentTarget.value)}
          withAsterisk

        />

        <TextInput
          placeholder="Ingrese su altura"
          label="Altura (m)"
          id='h'
          onChange={(event) => setAltura(event.currentTarget.value)}
          withAsterisk

        />
        <Metodos peso={peso} altura={altura} bmii={bmii} setResultado={setResultado} resultado={resultado} setBmii={setBmii}></Metodos>
       

      </Group>
    </AppSh>
  )
}


export default Bmi


