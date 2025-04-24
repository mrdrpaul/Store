import {render, screen} from "@testing-library/react";
import {describe, expect, it} from "vitest";
import StorePage from "../StorePage.tsx";
import userEvent from "@testing-library/user-event"

describe('Store', ()=>{

    it('should display the page title in a heading', async () => {
        render(<StorePage/>)
        expect(screen.getByRole("heading", {name: "Generic Store Inventory Management"})).toBeVisible()
    });

    it('should find an input box', async () => {
        render(<StorePage/>)
        expect(screen.getByRole("textbox")).toBeVisible()
    });

    it('should find all the inputs to add a new product', async () => {
        render(<StorePage/>)
        expect(screen.getByPlaceholderText("product name")).toBeInTheDocument()
        expect(screen.getByPlaceholderText("product price")).toBeInTheDocument()
        expect(screen.getByPlaceholderText("product description")).toBeInTheDocument()

    });

    it('should find a button to submit a new item', async () => {
        render(<StorePage/>)
        expect(screen.getByRole("button", {name:"Add Product"})).toBeVisible()
    });

    it('should add a new product to the list of products', async () => {
        render(<StorePage/>)

        const productName = screen.getByPlaceholderText("product name")
        const productPrice = screen.getByPlaceholderText("product price")
        const productDescription = screen.getByPlaceholderText("product description")
        const addProductButton = screen.getByRole("button", {name: "Add Product"})

        await userEvent.type(productName,"beans")
        await userEvent.type(productPrice, "2.49")
        await userEvent.type(productDescription,"For bean parties")
        await userEvent.click(addProductButton)
    });


})