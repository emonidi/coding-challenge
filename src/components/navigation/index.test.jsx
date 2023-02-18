import {render, screen, cleanup} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Navigation from '../navigation'
import '@testing-library/jest-dom'


describe("Navbar tests", async ()=>{
    global.window.location = {
        ancestorOrigins: null,
        hash: null,
        host: 'localhost',
        port: '80',
        protocol: 'http:',
        hostname: 'localhost',
        href: 'http://localhost/',
        origin: 'http://dummy.com',
        pathname: "/",
        search: null,
        assign: null,
        reload: null,
        replace: null,
    };
    
    afterEach(()=>cleanup())
    
    it("should render the '/' link as active",async ()=>{
        render(<BrowserRouter><Navigation></Navigation></BrowserRouter>)
        expect((await screen.findByText("Home")).className).toContain("text-blue-700")
    })

    it("should render the '/products' link as active", async ()=>{
        global.window.location.pathname = "/products"
        render(<BrowserRouter><Navigation></Navigation></BrowserRouter>)
        expect((await screen.findByText("Products")).className).toContain("text-blue-700")
    })
    
})