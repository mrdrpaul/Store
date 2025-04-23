import {render, screen} from "@testing-library/react";
import {describe, expect} from "vitest";
import StorePage from "../StorePage.tsx";

describe('Store', ()=>{

    it('should display the page title in a heading', async () => {
        render(<StorePage/>)
        expect(screen.getByRole("heading", {name: "Generic Store Inventory Management"})).toBeVisible()
    });

    it()

})