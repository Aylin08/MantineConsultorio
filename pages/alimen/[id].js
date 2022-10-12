export const getStaticPaths = async ()=>
{
    const res = await fetch('https://alimentos-b401e-default-rtdb.firebaseio.com/SMAE.json');
    const data = await res.json()
    const paths = data.map(path => {
        return {
            params:{
                id : path.id.toString()
               
                }
            }
    })
    return {
        paths :paths,
        fallback:false,
    }

}

export const getStaticProps = async (context)=>{
    const Alimento = context.params.Alimento;

    const res = await fetch('https://alimentos-b401e-default-rtdb.firebaseio.com/SMAE.json'+ Alimento );
    const data = await res.json();
    console.log(data);
    return{
        props:{
            post:data
        }
    }
}