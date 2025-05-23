import {render, screen} from "@testing-library/react";
import {describe, it, expect, vi} from "vitest";
import InventoryTable from "../InventoryTable.tsx";
import * as storeService from "../StoreService"


describe('InventoryTable', ()=>{

    it('should display a table', async () => {
        render(<InventoryTable/>)
        expect(screen.getByRole("table", {class: "inventory"})).toBeVisible()
    });

    it('should return a row with a product name of beans', async ()=>{
        const product = {id : 1, name : 'beans', quantity : 30, price : 2.49, description : 'for eating'}
        vi.spyOn(storeService,'fetchProducts').mockResolvedValue([product])
        await render(<InventoryTable/>)
        expect(await screen.getByText('beans')).toBeVisible()
    })

    it('should render table rows and find row with product name of soap and price of 1.79',async () => {
        // vi.spyOn(storeService, 'fetchProducts').mockResolvedValue([])
        await render(<InventoryTable/>)
        expect(await screen.findByText('soap')).toBeVisible()
        expect(await screen.findByText('1.79')).toBeVisible()
    });



})