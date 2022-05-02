import { useEffect, useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        console.log('ok')
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return { products, setProducts }
}
export default useProducts