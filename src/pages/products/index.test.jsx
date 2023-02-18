import { render, screen, cleanup, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import Products from './index'
import userEvent from '@testing-library/user-event'

import React from 'react';

describe("test the product page", () => {

    global.fetch = vi.fn();
    function createFetchResponse(data) {
        return { json: () => new Promise((resolve) => resolve(data)) }
    }

    const spy = vi.spyOn(global, 'fetch')
    fetch.mockResolvedValue(createFetchResponse([
        { id: "1", brand: "brand 1", name:"brand 1 cool product" },
        { id: "2", brand: "brand 1", name:"brand 1 cooler product" }, 
        { id: "3", brand: "brand 2", name:"brand 2 cool product" },
        { id: "4", brand: "brand 2", name:"brand 2 cooler product" }
    ]))

    beforeEach(() => {
        render(<Products></Products>)
    })

    afterEach(() => cleanup())

    it("should render propertly", async () => {
        await waitFor(()=>{
            expect(screen.getByTestId('filterbar')).toBeDefined()
            expect(screen.getByTestId('product-list')).toBeDefined()
        },{interval:100})
      
    })

    it("should call fetch", () => {
        expect(spy).toHaveBeenCalled()
    })
    
    it("should select the brand 1 by default in the brand dropdown", async ()=>{
       await waitFor(()=>{
        let tooltipButton = screen.getAllByTestId("flowbite-tooltip-target");
            expect(tooltipButton.at(0).textContent).toEqual("brand 1")
       })
    })

    it("should show 2 products", async ()=>{
        await waitFor(()=>{
            let products = screen.getAllByTestId("flowbite-card");
            expect(products.length).toEqual(2)
        })
    });

    it("should filter properly", async () => {
        await waitFor(async ()=>{
            let input = screen.getByTestId("product-search")
          
            await userEvent.type(input, "brand 1 cool product")
           
            let products = screen.getAllByTestId("flowbite-card");
            
            expect(input).toHaveValue("brand 1 cool product")
            expect(products.length).toEqual(1)
        })
    })
});