import { useEffect, useState } from "react"

const useSingularFetch = (url) => {

    const [height, setHeight]= useState(0)
    const [name, setName] = useState("")
    const [weight, setWeight] = useState(0)

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        const fetchPokemons = async () => {
            try{
                setLoading(true)
                const response = await fetch(url) 
                if(response.status != 200){
                    throw new Error("Error en la peticion")
                }
                const data = await response.json()
                setHeight(data.height/10)
                setWeight(data.weight/10)
                setName(data.name)
                
            }catch(error){
                setError(error as any)
            }finally{
                setLoading(false)
            }
            
        }
        fetchPokemons()
    },[])
    return { height, weight, name, loading, error };
}
export default useSingularFetch