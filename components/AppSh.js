import React, { children } from 'react'
import Link from 'next/link';
import {AppShell, Navbar, Title,  Stack} from '@mantine/core';

export const AppSh = ({children}) => {
  return (
    <div>
        <AppShell
   
   padding="md"
   navbar  ={<Navbar width={{ base: 300 }} height={500} p="xs">
<Stack>
     <Link color="lime" radius="lg" href="/" passHref>
     Inicio
     </Link>

     <Link color="lime" radius="lg" href='/Bmi'>
    BMI
     </Link>

     <Link  color="lime" radius="lg" href="/calcular" passHref>
     Calcular
     </Link>
     <Link  color="lime" radius="lg" href="/buscador" passHref>
     Buscador
     </Link>
     <Link  color="lime" radius="lg" href="/datos" passHref>
     Datos
     </Link>
     </Stack>
   
   </Navbar>}
   
   header={<Title height={60} p="xs" > Bienvenido</Title>}
   styles={(theme) => ({
     main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.white },
   })}
 >
 {children}
 </AppShell>
    </div>
  )
}
