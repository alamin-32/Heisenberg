import { useEffect, useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        console.log('ok')
        fetch(' https://glacial-coast-36884.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return { products, setProducts }
}
export default useProducts