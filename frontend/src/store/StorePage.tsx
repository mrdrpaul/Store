export const StorePage = ({}) =>{
    const inventory=[
        {
            "name": "tomato",
            "quantity":30,
            "price":`$${2.32}`,
            "description":"for throwing"
        },
        {
            "name": "soap",
            "quantity":24,
            "price":`$${1.79}`,
            "description":"for cleaning"
        },
        {
            "name": "bacon",
            "quantity":300,
            "price":`$${6.78}`,
            "description":"for eating"
        },
    ]
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
                {inventory.map((item, i)=>
                    <tr key={i}>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>{item.price}</td>
                        <td>{item.description}</td>
                    </tr>
                )}
                </tbody>
            </table>
        </>
    )
}
export default StorePage