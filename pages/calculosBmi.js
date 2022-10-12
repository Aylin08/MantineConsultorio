import React from 'react'
import {  Button} from '@mantine/core';
const CalculosBmi = ({children,formula, setGeb, genero, setOms, peso, altura, setOwen, setMifflin, edad, setHarri, setValencia, fa, setFactor }) => {
    
      
      const factor =()=>{
        switch (fa) {
          case 'Sedentario':
            return(1.2)
            break;
          case 'Ligero':
            return(1.3);
            break;
          case 'Moderado':
            return(1.5);
            break;
          case 'Activo':
            return(1.7);
            break;
          case 'Vigoroso':
            return(1.9);
            break;
    
        }
    
      
      }
    
    
      const calculo = () => {
    
        if (genero == 'Femenino') {
          if(formula=='OMS'){
            setGeb(((parseFloat(peso) * 8.7) - (parseFloat(altura) * 25 / 100) + 865)* factor());
          }
          else if (formula=='OWEN')
          {
            setGeb((795 + (7.18 * (parseFloat(peso))))*factor())
          }
          else if(formula=='Mifflin')
          {
            setGeb(((parseFloat(peso) * 10) + (parseFloat(altura) * 6.25) - (5 * parseFloat(edad)) - 161)*factor())
          }
          else if(formula =='Harries'){
            const geb= (655.1 + (9.56 * parseFloat(peso)) + (1.85 * parseFloat(altura)) - (4.68 * parseFloat(edad)));
            const fac= geb * factor();
            const ter= geb*0.10;

            setGeb(fac+ter);
          }
          else {
            if (edad >= 18 && edad <= 29) {
              setGeb((11.02 * (parseFloat(peso)) + 679)* factor());
            }
            else if (edad >= 30 && edad <= 59) {
              setGeb((10.92 * (parseFloat(peso)) + 677)* factor());
            }
            else if (edad >= 60) {
              setGeb((10.98 * (parseFloat(peso)) + 520)*factor());
            }
          }
          
    
    
        }
        else {

          if(formula=='OMS'){
            setGeb(((parseFloat(peso) * 11.3) + (parseFloat(altura) * 16) / 100 + 901)* factor());
          }
          else if (formula=='OWEN')
          {
            setGeb((879 + (10.2 * (parseFloat(peso))))*factor())
          }
          else if(formula=='Mifflin')
          {
            setGeb(((parseFloat(peso) * 10) + (parseFloat(altura) * 6.25) - (5 * parseFloat(edad)) + 5)*factor());
          }
          else if(formula =='Harries'){
            const geb= (66.5 + (13.75 * parseFloat(peso)) + (5 * parseFloat(altura)) - (6.78 * parseFloat(edad)));
            const fac= geb * factor();
            const ter= geb*0.10;

            setGeb(fac+ter);
          }
          else {
            if (edad >= 18 && edad <= 29) {
              setGeb((13.37 * (parseFloat(peso)) + 747)*factor());
            }
            else if (edad >= 30 && edad <= 59) {
              setGeb((13.08 * (parseFloat(peso)) + 693)* factor()) ;
            }
            else if (edad >= 60) {
              setGeb((14.21 * (parseFloat(peso)) + 429)* factor());
            }
          }
          
    
          
         
          
         
    
        }
      }
  return (
    <div>
         <Button onClick={calculo}>Calcular</Button>

        
{children}
    </div>
  )
}

export default CalculosBmi