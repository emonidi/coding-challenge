import {render, screen, cleanup} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
import Hero from './index';

describe("Home page tests",()=>{
    
    beforeEach(()=> render(<BrowserRouter><Hero></Hero></BrowserRouter>))
   
    it('should render big text', async()=>{
         expect(await screen.getByTestId("heading").innerHTML).toEqual("The best cosmetics ever!")
    })

    it('should render the small text', async()=>{
        expect(await screen.getByTestId("paragraph").innerHTML).toEqual("Blah blah blah blah lorem ipsum and all the bells and whistles here.")
    });

    it('should render the button', async()=>{
        expect(await screen.getByTestId("cta").innerHTML).toEqual("Check out our products")
    });

})