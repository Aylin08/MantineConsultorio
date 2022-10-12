import React from 'react'
import Head from 'next/head'



const Layout = ({children, tituloPagina}) => {
  return (
    <div >
      <Head>
        <title>
          BMI-{tituloPagina}
        </title>
      </Head>
   
        {children}
       
    </div>
  )
}

export default Layout