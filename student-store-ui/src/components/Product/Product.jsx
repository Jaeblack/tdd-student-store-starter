import { Routes, Route, Link, useParams } from 'react-router-dom'

export default function Product() {
    const params = useParams()


    return (
    < div id="Product">
        <h1>Product - {params.productId}</h1>
    </div >
    )
}
