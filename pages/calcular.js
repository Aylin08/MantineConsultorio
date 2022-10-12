import React from 'react'
import { useState } from 'react';
import { AppSh } from '../components/AppSh'
import { TextInput, NativeSelect, Card, Image, SimpleGrid, Tabs, Text } from '@mantine/core';
import Layout from '../components/Layout'
import CalculosBmi from './calculosBmi';

const Calcular = () => {

  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [edad, setEdad] = useState(0);
  const [genero, setGenero] = useState("");
  const [harri, setHarri] = useState(0.0);
  const [omss, setOms] = useState(0.0);
  const [owen, setOwen] = useState(0.0);
  const [vale, setValencia] = useState(0.0);
  const [miffli, setMifflin] = useState(0.0);
  const [factor, setFactor] = useState(0.0);
  const [fa, setFa] = useState("");
  const [formula, setFormula] = useState("");



  return (
    <AppSh>
      <Layout tituloPagina='Calcular' />
      <Card shadow="sm" p="lg" radius="md" withBorder>
        <Card.Section>
          <Image
            src="https://img.freepik.com/vector-premium/control-indice-masa-corporal-bastante-joven-dieta-tratando-controlar-peso-corporal-imc-chica-escala-metodo-medicion-grasas-saludables-escalas-graficas-obesidad-peso-obesidad-extrema_458444-1022.jpg?w=2000"
            height={400}

          />
        </Card.Section>


        <SimpleGrid cols={3}>
          <TextInput
            placeholder="Ingrese su peso"
            label="Peso (kg)"
            onChange={(event) => setPeso(event.currentTarget.value)}
            id='w'

            withAsterisk

          />

          <TextInput
            placeholder="Ingrese su altura"
            label="Altura (cm)"
            id='h'
            onChange={(event) => setAltura(event.currentTarget.value)}
            withAsterisk

          />

          <TextInput
            placeholder="Edad"
            label="Edad"
            id='e'
            onChange={(event) => setEdad(parseFloat(event.currentTarget.value))}
            withAsterisk

          />

          <NativeSelect
            label="Seleccione el género"
            placeholder="Seleccione"
            searchable
            nothingFound="No options"
            data={['Masculino', 'Femenino']}
            value={genero}
            onChange={(event) => setGenero(event.currentTarget.value)}


          />
          <NativeSelect
            label="Seleccione el factor de actividad"
            placeholder="Seleccione"
            searchable
            nothingFound="No options"
            data={['Sedentario', 'Ligero', 'Moderado', 'Activo', 'Vigoroso']}
            value={fa}
            onChange={(event) => setFa(event.currentTarget.value)}
          />
    <NativeSelect
            label="Seleccione el factor de actividad"
            placeholder="Seleccione"
            searchable
            nothingFound="No options"
            data={['Harries', 'OMS', 'OWEN', 'Valencia', 'Mifflin']}
            value={formula}
            onChange={(event) => setFormula(event.currentTarget.value)}
          />
        </SimpleGrid>

      </Card>
      <CalculosBmi genero={genero} setOms={setOms} peso={peso} altura={altura} setOwen={setOwen} setMifflin={setMifflin} edad={edad} setHarri={setHarri} setValencia={setValencia} fa={fa} setFactor={setFactor}/>
      

      <Tabs Tabs color="lime" variant="outline" radius="md" defaultValue="gallery">
        <Tabs.List>
          <Tabs.Tab value="harris" >Harris Benedict</Tabs.Tab>
          <Tabs.Tab value="oms" >OMS</Tabs.Tab>
          <Tabs.Tab value="owen">OWEN</Tabs.Tab>
          <Tabs.Tab value="valencia">Valencia</Tabs.Tab>
          <Tabs.Tab value="mifflin">Mifflin ST- Jeor</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="harris" pt="xs">

          <Text>GEB: {harri}</Text>
          <Text>GET Harris: {(harri * 0.10) + (factor * harri)} </Text>
        </Tabs.Panel>

        <Tabs.Panel value="oms" pt="xs">
          <Text>GEB: {omss}</Text>
          <Text>G.E.T/ F.A:  {omss * factor} </Text>

        </Tabs.Panel>

        <Tabs.Panel value="owen" pt="xs">
          <Text>GEB: {owen}</Text>
          <Text>G.E.T/ F.A:  {owen * factor} </Text>
        </Tabs.Panel>

        <Tabs.Panel value="valencia" pt="xs">
          <Text>GEB: {vale}</Text>
          <Text>G.E.T/ F.A:  {vale * factor} </Text>
        </Tabs.Panel>

        <Tabs.Panel value="mifflin" pt="xs">
          <Text>GEB: {miffli}</Text>
          <Text>G.E.T/ F.A:  {miffli * factor} </Text>
        </Tabs.Panel>
      </Tabs>
    </AppSh>
  )
}

export default Calcular