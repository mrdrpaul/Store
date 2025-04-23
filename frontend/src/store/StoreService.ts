import {Product} from "./StoreProductType";

export function fetchProducts():Promise<Product[]> {
    const mockedProducts: Product[] = [
        {
            "id": 1,
            "name": "tomato",
            "quantity":30,
            "price":2.32,
            "description":"for throwing"
        },
        {
            "id": 2,
            "name": "soap",
            "quantity":24,
            "price": 1.79,
            "description":"for cleaning"
        },
        {
            "id": 3,
            "name": "bacon",
            "quantity":300,
            "price":6.78,
            "description":"for eating"
        },
    ]
}