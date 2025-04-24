import InventoryTable from "./InventoryTable";
import {useState} from "react";
import {Product} from "./StoreProductType";

export const StorePage = ({}) =>{
    const [newProduct, setNewProduct] = useState<Omit<Product,"id">>({
        name: "",
        quantity: 0,
        price: 0,
        description:""
    })
return(
    <>
        <form>
            <input type={"text"} name={"Name"} placeholder={"product name"} required/>
            <input type={"number"} name={"Price"} placeholder={"product price"} required/>
            <input type={"text"} name={"Description"} placeholder={"product description"} required/>
            <button type="submit">Add Product</button>

        </form>
    <InventoryTable/>
    </>
)
}
export default StorePage