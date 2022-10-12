import React from 'react'
import { useState } from 'react';
import { AppSh } from '../components/AppSh'
import { TextInput, Button, Text, NativeSelect, Card, Image, SimpleGrid, Tabs, Box, Space, Table, NumberInput, Input} from '@mantine/core';
import Layout from '../components/Layout'
import { IconPhoto, IconMessageCircle } from '@tabler/icons';

const Calcular = () => {
    const[getResult,setGetResult]=useState(0.0);
  const[Result,setResul]=useState(0.0);
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

  const [lipidos,setLipidos]=useState(0.0);
  const [kcalP,setkcakP]=useState(0.0);
  const [gkgP,setgkgP]=useState(0.0);
  const [gP,setgP]=useState(0.0);
  
  const [proteinas,setProteinas]=useState(0.0);
  const [kcalL,setkcakL]=useState(0.0);
  const [gkgL,setgkgL]=useState(0.0);
  const [gL,setgL]=useState(0.0);
  
  const [carbo,setCarbo]=useState(0.0);
  const [kcalC,setkcakC]=useState(0.0);
  const [gkgC,setgkgC]=useState(0.0);
  const [gC,setgC]=useState(0.0);

  var producto =0.0;
  
  
  const calcularMacro=()=>{
    if((carbo+proteinas+lipidos)===100){
      setkcakP((proteinas*getResult)/100)
      setgP(kcalP/4)
      setgkgP(gP/peso)
  
      setkcakL((lipidos*getResult)/100)
      setgL(kcalL/9)
      setgkgL(gL/peso)
  
      setkcakC((carbo*getResult)/100)
      setgC(kcalC/4)
      setgkgC(gC/peso)
      
    }
  
   }
   const calcularMacro2=()=>{
  
    setgP2(gkgP2*peso)
    setkcakP2(gP2*4)
    setProteinas2((kcalP2/ getResult)*100)
  
    setgL2(gkgL2*peso)
    setkcakL2(gL2*9)
    setLipidos2((kcalL2/ getResult)*100)
  
    setCarbo2(100-(proteinas2+lipidos2))
    setkcakC2((carbo2*getResult)/100)
    setgC2(kcalC2/4)
    setgkgC2(gC2/peso)
    
   }
   
   const [proteinas2,setProteinas2]=useState(0.0);
  const [kcalP2,setkcakP2]=useState(0.0);
  const [gkgP2,setgkgP2]=useState(0.0);
  const [gP2,setgP2]=useState(0.0);
  
  
  const [lipidos2,setLipidos2]=useState(0.0);
  const [kcalL2,setkcakL2]=useState(0.0);
  const [gkgL2,setgkgL2]=useState(0.0);
  const [gL2,setgL2]=useState(0.0);
  
  const [carbo2,setCarbo2]=useState(0.0);
  const [kcalC2,setkcakC2]=useState(0.0);
  const [gkgC2,setgkgC2]=useState(0.0);
  const [gC2,setgC2]=useState(0.0);
  
  const limpiar=()=>{
    setkcakP(0)
    setgP(0)
    setgkgP(0)
  setCarbo(0)
  setCarbo2(0)
  setProteinas(0)
  setProteinas2(0)
  setLipidos(0)
  setLipidos2(0);
    setkcakL(0)
    setgL(0)
    setgkgL(0)
  
    setkcakC(0)
    setgC(0)
    setgkgC(0)
    
    setkcakP2(0)
    setgP2(0)
    setgkgP2(0)
  
    setkcakL2(0)
    setgL2(0)
    setgkgL2(0)
  
    setkcakC2(0)
    setgC2(0)
    setgkgC2(0)
  }
  const fac = () => {
    switch (fa) {
      case 'Sedentario':
        setFactor(1.2)
        break;
      case 'Ligero':
        setFactor(1.3);
        break;
      case 'Moderado':
        setFactor(1.5);
        break;
      case 'Activo':
        setFactor(1.7);
        break;
      case 'Vigoroso':
        setFactor(1.9);
        break;

    }

  }


  const calculo = () => {
    fac()

    if (genero == 'Femenino') {

      setOms((parseFloat(peso) * 8.7) - (parseFloat(altura) * 25 / 100) + 865);
      setOwen(795 + (7.18 * (parseFloat(peso))));
      setMifflin((parseFloat(peso) * 10) + (parseFloat(altura) * 6.25) - (5 * parseFloat(edad)) - 161);
      setHarri(655.1 + (9.56 * parseFloat(peso)) + (1.85 * parseFloat(altura)) - (4.68 * parseFloat(edad)));
      if (edad >= 18 && edad <= 29) {
        setValencia(11.02 * (parseFloat(peso)) + 679);
      }
      else if (edad >= 30 && edad <= 59) {
        setValencia(10.92 * (parseFloat(peso)) + 677);
      }
      else if (edad >= 60) {
        setValencia(10.98 * (parseFloat(peso)) + 520);
      }


    }
    else {

      setOms((parseFloat(peso) * 11.3) + (parseFloat(altura) * 16) / 100 + 901);
      setOwen(879 + (10.2 * (parseFloat(peso))));
      setMifflin((parseFloat(peso) * 10) + (parseFloat(altura) * 6.25) - (5 * parseFloat(edad)) + 5);
      setHarri(66.5 + (13.75 * parseFloat(peso)) + (5 * parseFloat(altura)) - (6.78 * parseFloat(edad)));
      if (edad >= 18 && edad <= 29) {
        setValencia(13.37 * (parseFloat(peso)) + 747);
      }
      else if (edad >= 30 && edad <= 59) {
        setValencia(13.08 * (parseFloat(peso)) + 693);
      }
      else if (edad >= 60) {
        setValencia(14.21 * (parseFloat(peso)) + 429);
      }

    }
  }

  return (
    <AppSh>
       <Layout tituloPagina='Calcular'/>
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
          <Button onClick={calculo}>Calcular</Button>
        </SimpleGrid>
      </Card>

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

      <Box sx={{ position: 'relative' }}>
    <Card>
    <Space h="xl" />
      <Tabs defaultValue="gallery">
      <Tabs.List position="center">
        <Tabs.Tab value="gallery" icon={<IconPhoto size={14} />}   onClick={()=>limpiar()} > %</Tabs.Tab>
        <Tabs.Tab value="messages" icon={<IconMessageCircle size={14} />}  onClick={()=>limpiar()}>g/kg</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="gallery" pt="xs">      
    <Table>
      <thead>
        <tr>
          <th> </th>
          <th>%</th>
          <th>Kcal</th>
          <th>g</th>
          <th>g/Kg</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <th>Proteinas</th>
        <td> <NumberInput value={proteinas}  onChange={( val) => setProteinas(val)} /></td>
        <td> <Input disabled  value={kcalP.toFixed(2)}/> </td>
        <td> <Input disabled  value={gP.toFixed(2)}/></td>
        <td> <Input disabled   value={gkgP.toFixed(2)}/> </td>
        </tr>
      </tbody>
      <tbody>
      <tr>
        <th>Lipidos</th>
        <td> <NumberInput value={lipidos}  onChange={( val) => setLipidos(val)} /></td>
        <td> <Input disabled  value={kcalL.toFixed(2)}/> </td>
        <td> <Input disabled  value={gL.toFixed(2)}/></td>
        <td> <Input disabled   value={gkgL.toFixed(2)}/> </td>
      </tr>
      </tbody> 
      <tbody >
      <tr>
        <th>Carbohidratos</th>
        <td> <NumberInput value={carbo}  onChange={( val) => setCarbo(val)} /></td>
        <td> <Input disabled  value={kcalC.toFixed(2)}/> </td>
        <td> <Input disabled  value={gC.toFixed(2)}/></td>
        <td> <Input disabled   value={gkgC.toFixed(2)}/> </td>
      </tr>
      </tbody>
      <tbody>
        <tr>
        <th>Total</th>
        <td><Input disabled/></td>
        <td><Input disabled placeholder={getResult.toFixed(2)}/></td>
        <td> <Button  onClick={()=>calcularMacro()} variant="light" color="grape" radius="lg" size="xs" uppercase>
         Calcular
    </Button> </td>
        <td><Input disabled/></td>
        </tr>
      </tbody>
      </Table>
      </Tabs.Panel>
      <Tabs.Panel value="messages" pt="xs">
      <Table>
      <thead>
        <tr>
          <th> </th>
          <th>%</th>
          <th>Kcal</th>
          <th>g</th>
          <th>g/Kg</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <th>Proteinas</th>
        <td>  <Input disabled  value={proteinas2.toFixed(2)}/></td>
        <td> <Input disabled  value={kcalP2.toFixed(2)}/> </td>
        <td> <Input disabled  value={gP2.toFixed(2)}/></td>
        <td><NumberInput defaultValue={0.0} precision={2} min={0} step={0.01} max={10} value={gkgP2}  onChange={( val) => setgkgP2(val)}/></td>
        </tr>
      </tbody>
      <tbody>
      <tr>
        <th>Lipidos</th>
        <td>  <Input disabled  value={lipidos2.toFixed(2)}/> </td>
        <td> <Input disabled  value={kcalL2.toFixed(2)}/> </td>
        <td> <Input disabled  value={gL2.toFixed(2)}/></td>
        <td><NumberInput defaultValue={0.0} precision={2} min={0} step={0.01} max={10} value={gkgL2}  onChange={( val) => setgkgL2(val)}/></td>
      </tr>
      </tbody> 
      <tbody >
      <tr>
        <th>Carbohidratos</th>
        <td>   <Input disabled  value={carbo2.toFixed(2)}/></td>
        <td> <Input disabled  value={kcalC2.toFixed(2)}/> </td>
        <td> <Input disabled  value={gC2.toFixed(2)}/></td>
        <td> <Input disabled   value={gkgC2.toFixed(2)}/> </td>
      </tr>
      </tbody>
      <tbody>
        <tr>
        <th>Total</th>
        <td><Input disabled/></td>
        <td><Input disabled placeholder={getResult.toFixed(2)}/></td>
        <td> <Button  onClick={()=>calcularMacro2()} variant="light" color="grape" radius="lg" size="xs" uppercase>
         Calcular
    </Button> </td>
        <td><Input disabled/></td>
        </tr>
      </tbody>
      </Table>
      </Tabs.Panel>
    </Tabs>
      </Card>
      </Box>

      

    </AppSh>
  )
}

export default Calcular