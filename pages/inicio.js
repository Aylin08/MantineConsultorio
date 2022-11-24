import React from 'react'
import Appsh from '../components/Appsh'
import Layout from '../components/Layout'
import { Container, Card, Group, Text, Image, Center } from '@mantine/core'
const Inicio = () => {
  return (

    <Layout tituloPestaña='Inicio' isPrivate={true}>
      <Appsh tituloPagina="Bienvenido" >
        <Container size={400} px={0} >
          <Card shadow="sm" p="lg" radius="md" withBorder
            style={{
              width: 400,
              marginLeft: 'auto',
              marginRight: 'auto',
              height: 300,
              position: 'absolute',
              transform: 'translate(-50%, -50%)',
              top: '40%',
              left: '50%',
            }}>
            <Card.Section>
              <Center>
                <Image
                  src="https://mir-s3-cdn-cf.behance.net/projects/404/a53a7748241921.Y3JvcCwxMjcyLDk5NSwwLDM2NA.jpg"
                  height={60}
                  width={60}

                />
              </Center>
            </Card.Section>
            <Text weight={700} align="center" style={{ fontFamily: 'Greycliff CF, sans-serif' }} >Bienvenidos (as)</Text>

            <Group position="center" mt="md" mb="xs">
              <Text>En esta página podras realizar algunas de las tantas funciones que realizan los nutriólogos. </Text>
              <Image
                src="https://www.playmedic.com/wp-content/uploads/2017/02/redaccion-contenido-salud.png"
                height={100}
                width={200}

              />
            </Group>
          </Card>
        </Container>
      </Appsh>

    </Layout>
  )
}

export default Inicio