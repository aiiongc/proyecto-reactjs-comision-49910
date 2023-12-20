import { useState, useEffect } from "react"
import { MOCK_DATA } from "../mock/data"
import { useParams } from "react-router-dom"

const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(MOCK_DATA)
        }, 1000);

    })
}

const ItemListContainer = () => {
    const [tienda, setTienda] = useState ([])

    const { categoria } = useParams()


    useEffect(() => {
        getData()
            .then((data) => {
                const items = categoria 
                                ? data.filter(prod => prod.category === categoria)
                                : data

                setTienda( items )
            })
    }, [categoria])

    return (
        <section>
            <h1>Tienda</h1>
            <section className="productContainer">
                { tienda.map((item) => (
                    <div className="productCard" key={item.id}>
                        <img className="productImg"  src={item.img} alt={item.name}/>
                        <h2>{item.name}</h2>
                        <h3>{item.artist}</h3>
                        <p>{item.description}</p>
                        <p className="price">${item.price}</p>
                    </div>
                ))}
            </section>
        </section>
    )

}
export default ItemListContainer