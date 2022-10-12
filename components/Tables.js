import React from 'react'
import { Table } from '@mantine/core';

const Tables = () => {
  
   return(
<Box sx={{ position: 'relative' }}>
                    
 <Card>
     <Space h="xl" />
     <Tabs defaultValue="gallery">
        <Tabs.List position="center">
        <Tabs.Tab value="gallery" icon={<IconPhoto size={14} />} onClick={() => limpiar()} > %</Tabs.Tab>
         <Tabs.Tab value="messages" icon={<IconMessageCircle size={14} />} onClick={() => limpiar()}>g/kg</Tabs.Tab>
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
                                            <td> <NumberInput value={proteinas} onChange={(val) => setProteinas(val)} /></td>
                                            <td> <Input disabled  value={kcalP.toFixed(2)} /> </td>
                                            <td> <Input disabled  value={gP.toFixed(2)} /></td>
                                            <td> <Input disabled  value={gkgP.toFixed(2)} /> </td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <th>Lipidos</th>
                                            <td> <NumberInput value={lipidos} onChange={(val) => setLipidos(val)} /></td>
                                            <td> <Input disabled  value={kcalL.toFixed(2)} /> </td>
                                            <td> <Input disabled  value={gL.toFixed(2)} /></td>
                                            <td> <Input disabled  value={gkgL.toFixed(2)} /> </td>
                                        </tr>
                                    </tbody>
                                    <tbody >
                                        <tr>
                                            <th>Carbohidratos</th>
                                            <td> <NumberInput value={carbo} onChange={(val) => setCarbo(val)} /></td>
                                            <td> <Input disabled  value={kcalC.toFixed(2)} /> </td>
                                            <td> <Input disabled  value={gC.toFixed(2)} /></td>
                                            <td> <Input disabled  value={gkgC.toFixed(2)} /> </td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <th>Total</th>
                                            <td><Input disabled  /></td>
                                            <td><Input disabled  placeholder={getResult.toFixed(2)} /></td>
                                            <td> <Button onClick={() => calcularMacro()} variant="light" color="grape" radius="lg" size="xs" uppercase>
                                                Calcular
                                            </Button> </td>
                                            <td><Input disabled  /></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Tabs.Panel>
                            <Text>{error}</Text>
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
                                            <td>  <Input disabled  value={proteinas2.toFixed(2)} /></td>
                                            <td> <Input disabled  value={kcalP2.toFixed(2)} /> </td>
                                            <td> <Input disabled  value={gP2.toFixed(2)} /></td>
                                            <td><NumberInput defaultValue={0.0} precision={2} min={0} step={0.01} max={10} value={gkgP2} onChange={(val) => setgkgP2(val)} /></td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <th>Lipidos</th>
                                            <td>  <Input disabled  value={lipidos2.toFixed(2)} /> </td>
                                            <td> <Input disabled  value={kcalL2.toFixed(2)} /> </td>
                                            <td> <Input disabled  value={gL2.toFixed(2)} /></td>
                                            <td><NumberInput defaultValue={0.0} precision={2} min={0} step={0.01} max={10} value={gkgL2} onChange={(val) => setgkgL2(val)} /></td>
                                        </tr>
                                    </tbody>
                                    <tbody >
                                        <tr>
                                            <th>Carbohidratos</th>
                                            <td>   <Input disabled  value={carbo2.toFixed(2)} /></td>
                                            <td> <Input disabled  value={kcalC2.toFixed(2)} /> </td>
                                            <td> <Input disabled  value={gC2.toFixed(2)} /></td>
                                            <td> <Input disabled  value={gkgC2.toFixed(2)} /> </td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <th>Total</th>
                                            <td><Input  /></td>
                                            <td><Input  placeholder={getResult.toFixed(2)} /></td>
                                            <td> <Button onClick={() => calcularMacro2()} variant="light" color="grape" radius="lg" size="xs" uppercase>
                                                Calcular
                                            </Button> </td>
                                            <td><Input  /></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Tabs.Panel>
                        </Tabs>
                    </Card>
                </Box>
  )
}

export default Tables