import {useEffect, useState} from "react";
import {Product} from "./StoreProductType";
import {fetchProducts} from "./StoreService";

const InventoryTable = () =>{
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        fetchProducts().then(setProducts)
    }, []);

    return (
        <>
            <h1>Generic Store Inventory Management</h1>
            <table className={"inventory"} style={{border:"2px solid black"}}>
                <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Onhand Quantity</th>
                    <th>Price</th>
                    <th>Description</th>
                </tr>
                </thead>
                <tbody>
                {products.map((product, i)=>
                    <tr key={i}>
                        <td>{product.name}</td>
                        <td>{product.quantity}</td>
                        <td>{product.price}</td>
                        <td>{product.description}</td>
                    </tr>
                )}
                </tbody>
            </table>
        </>
    )

}
export default InventoryTable