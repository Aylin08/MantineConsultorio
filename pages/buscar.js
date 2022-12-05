import { Group, TextInput, Button, Card, AppShell, Stack, Table } from '@mantine/core'
import React from 'react'
import { useState } from 'react';
import Appsh from '../components/Appsh';
import Layout from '../components/Layout';


const Buscar = () => {
    /**Creation and declaration of variables*/
    const [search, setSearch] = useState('');
    const [entradaFilter, setEntradaFilter] = useState([]);
    /**connection with firebase*/
    const busqueda = async () => {
        const url = 'https://alimentos-be10e-default-rtdb.firebaseio.com/SMAE.json'
        const respuesta = await fetch(url)
        const entradas = await respuesta.json()
        /**firebase data return*/
        if (search != '' || search < 0) {
            setEntradaFilter(entradas.filter(entrada => {
                return entrada.Alimento.toLowerCase().includes(search.toLowerCase());
            }));
            console.log(entradaFilter);
        }
        else {
            alert('No has ingresado datos para buscar');
        }

    }
    /**Food Finder View */
    return (
        <Layout tituloPestaña='Buscador' isPrivate={true}>
            <Appsh tituloPagina='Buscador alimentos'>
                <Stack sx={
                    (theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0], height: 300 })} >
                    <Group>
                        <TextInput label="¿Qué deseas buscar?"
                            placeholder=""
                            id="busca"
                            value={search}
                            onChange={(event) => setSearch(event.currentTarget.value)}
                        />

                    </Group>
                    <Group><Button onClick={busqueda} sx={(theme) => ({ backgroundColor: '#FAAD82', '&:hover': { backgroundColor: theme.fn.darken('#FFD482', 0.05), }, })} > Buscador </Button> </Group>

                    <Table>
                        <thead>
                            <tr>
                                <th > Alimento </th>
                                <th > Categoría </th>
                                <th > Energia </th>
                                <th > Fibra </th>
                            </tr> </thead>
                        <tbody>

                            <td> {
                                entradaFilter.map((entrada, index) => {
                                    return (<p key={index} > {entrada.Alimento} </p>
                                    )
                                })}
                            </td>
                            <td> {
                                entradaFilter.map((entrada, index) => {
                                    return (<p key={index} > {entrada.Categoría} </p>
                                    )
                                })
                            }
                            </td>
                            <td> {
                                entradaFilter.map((entrada, index) => {
                                    return (<p key={index} > {entrada.EnergíaKcal} Kcal</p>
                                    )
                                })
                            }
                            </td>
                            <td> {
                                entradaFilter.map((entrada, index) => {
                                    return (<p key={index} > {entrada.Fibra} g</p>
                                    )
                                })
                            }
                            </td>
                        </tbody>
                    </Table>
                </Stack>
            </Appsh>
        </Layout>
    )
}
export default Buscar