import React from 'react'
import { TextInput, Button, Text, NativeSelect, Card, Image, SimpleGrid, Tabs } from '@mantine/core';

const Formulario = ({children, setPeso, setAltura, setEdad, setGenero, setFa, genero, fa, calculo}) => {
  return (
    <div>
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
        withAsterisk

      />

      <TextInput
        placeholder="Ingrese su altura"
        label="Altura (cm)"
        onChange={(event) => setAltura(event.currentTarget.value)}
        withAsterisk

      />

      <TextInput
        placeholder="Edad"
        label="Edad"
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
  {children}
  </div>

  )
}

export default Formulario