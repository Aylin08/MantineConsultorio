import React from 'react'
import { Center, TextInput, Box, Group, Button, Text, Card, Image, Space, NumberInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import Layout from '../components/Layout'
import Appsh from '../components/Appsh'


const Imc = () => {
  const form = useForm({
    initialValues: {
      peso: '',
      altura: '',
      imc: '',
      etiqueta: '',
      color: 'black'
    },
  });

  const Calcular = () => {
    const peso = form.values.peso;
    const altura = form.values.altura;
    let etiqueta;
    let color;
    const imc = parseFloat(peso) / (parseFloat(altura) ** 2);
    if (peso == '' || altura == '' || peso == 0 || altura == 0 || peso < 0 || altura < 0) {
      etiqueta = 'Por favor verifica los datos que estás ingresando, recuerda no es posible realizar operaciones con campos vacíos o valores nulos'
      color = 'red'
      form.setValues({
        imc: 'No se puede calcular',
        etiqueta: etiqueta,
        color: color
      })

    } else {
      etiqueta = imc < 18.5 ? 'Bajo' : imc <= 22.9 ? 'Normal' : imc <= 24.9 ? 'Sobrepeso' : 'Obesidad'
      color = imc <= 18.5 ? 'blue' : imc <= 22.9 ? 'green' : 'red'
      form.setValues({

        imc: imc.toString(),
        etiqueta: etiqueta,
        color: color
      })

    }



  }

  return (
    <Appsh tituloPagina='Calcular Indice de Masa Corporal'>
      <Layout tituloPestaña='Imc' isPrivate={true}>
        <div style={{ width: 500, marginLeft: 'auto', marginRight: 'auto' }}>
          <Card shadow="sm" p="lg" radius="md" withBorder >
            <Card.Section>
              <Image
                src="https://thefoodtech.com/wp-content/uploads/2022/05/alimentacion-sostenible.jpg"
                height={160}
                alt="Norway"
              />
            </Card.Section>
            <Box sx={{ maxWidth: 300 }} mx="auto">
              <Group position="center" mt="md" mb="xs">
                <Text color='#A1C298' weight={700}>Indice de Masa Corporal</Text>
                <Text color='#A1C298'>Aquí puedes calcular el Indice de Masa Corporal del paciente, ingresando solamente el peso y altura.</Text>
              </Group>
              <form onSubmit={form.onSubmit((values) => Calcular())}>
                <NumberInput
                  label="Peso (kg)"
                  placeholder="Ingresa tu peso"
                  hideControls
                  withAsterisk
                  min={0}
                  max={300}
                  defaultValue={0.00}
                  precision={2}
                  {...form.getInputProps('peso')}
                />

                <NumberInput
                  label="Altura (m)"
                  placeholder="Ingresa tu altura (m)"
                  hideControls
                  withAsterisk
                  min={0}
                  max={2.5}
                  defaultValue={0.00}
                  precision={2}
                  {...form.getInputProps('altura')}
                />
                <Group position="center" mt="md">
                  <Button sx={(theme) => ({ backgroundColor: '#A1C298', '&:hover': { backgroundColor: theme.fn.darken('#A1C298', 0.05), }, })} compact type="submit">
                    Calcular
                  </Button>
                </Group>
                <Space h="xs" />
                <Center><Text color={form.values.color}>{form.values.etiqueta.toUpperCase()}</Text></Center>
                <Center><Text color='#FF884B' weight={700}>{form.values.imc}</Text></Center>
              </form>
            </Box>
          </Card>
        </div>
      </Layout>
    </Appsh>
  )
}

export default Imc