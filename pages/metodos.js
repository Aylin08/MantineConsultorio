import React from 'react'
import { Button, Text} from '@mantine/core';

const Metodos = ({children, peso, altura, bmii, setResultado, resultado,setBmii}) => {
  
  
    const calBmi = () => {
        setBmii(parseFloat(peso) / (parseFloat(altura) ** 2));
    
        if (bmii <= 18.5) {
          setResultado('Estas bajo ' + ' tu bmi es:' + bmii.toFixed(2))
        }
        else {
          if (bmii <= 24.9) {
            setResultado('Peso normal ' + ' tu bmi es:' + bmii.toFixed(2))
          }
          else {
            if (bmii <= 29.9) {
              setResultado('Sobrepeso ' + ' tu bmi es:' + bmii.toFixed(2))
            }
            else {
              setResultado('Obesidad ' + ' tu bmi es:' + bmii.toFixed(2))
            }
          }
        }
      }
    
  return (
    <div> 
       <Button color="lime" radius="md" onClick={calBmi}>
          Calcular
        </Button>
       <Text>{resultado}</Text>
       
     {children}
     </div>
  )
}

export default Metodos