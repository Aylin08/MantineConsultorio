import React, { useState } from 'react'
import { Button, TextInput, PasswordInput, Container, AppShell, Card, Group, Text, Image, Center } from '@mantine/core'
import Link from 'next/link';
import Layout from '../components/Layout';
import firebase from '../firebase/firebase';
import store from '../utils/store'
import { useRouter } from 'next/router'

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  async function onLogin() {
    if (email == '' || pass == '') {
      alert(`verifica tus campos`);
    } else {
      await firebase.auth.loginUsuario(email, pass)
        .then(response => {
          store.setUsuario(response.user.accessToken);
          router.push('/inicio');
        })
        .catch(e => {
          alert(`Usuario no registrado`);
        })
    }
  }

  return (
    <Layout>
      <AppShell
        sx={(theme) => ({ backgroundColor: '#FAAD82' })}>
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
            <Text weight={700} align="center" style={{ fontFamily: 'Greycliff CF, sans-serif' }} >Iniciar Sesión</Text>
            <TextInput label="Ingrese su E-mail" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)}
              withAsterisk />
            <PasswordInput
              placeholder="Ingrese su contraseña"
              label="Contraseña"
              value={pass} onChange={(e) => setPass(e.target.value)}
              withAsterisk
            />
            <Group position="center" mt="md" mb="xs">
              <br></br>
              <Button sx={(theme) => ({ backgroundColor: '#FAAD82', '&:hover': { backgroundColor: theme.fn.darken('#FFD482', 0.05), }, })} onClick={onLogin} >
                Iniciar sesion
              </Button>
              <p></p>
              <Link href='/registro'>
                <Button sx={(theme) => ({ backgroundColor: '#FAAD82', '&:hover': { backgroundColor: theme.fn.darken('#FFD482', 0.05), }, })}>
                  Registrarse
                </Button>
              </Link>
            </Group>
          </Card>
        </Container>
      </AppShell>
    </Layout>
  )
}

export default Login