import {
    Button,
    Dropdown, 
    Label, 
    TextInput
} from 'flowbite-react';
import { DropdownItem } from 'flowbite-react/lib/esm/components/Dropdown/DropdownItem';
import { useEffect, useState } from 'react';

export default function FilterBar({ brands, selectedBrand, onBrandChange, onQueryChange}) {
    const [query, setQuery] = useState('') 

    useEffect(()=>{
        onQueryChange(query)
    },[query])

    return (
        <div data-testid="filterbar" className="flex flex-col sm:flex-row md:flex-row justify-around mt-10  border p-4 rounded max-w">
            <div className="flex md:w-1/2 w-full items-center">
                <Label className='mr-4'>Brands:</Label>
                <Dropdown label={selectedBrand}>
                    {
                        brands.map(brand =>
                            <DropdownItem onClick={ev=>{
                                onBrandChange(brand)
                                setQuery("")
                            }} key={brand}>{brand}
                            </DropdownItem>
                        )
                    }
                </Dropdown>
            </div>
            <div className='flex sm:w-1/2 sm:mt-0 mt-5 justify-center items-center'>
                <TextInput
                    data-testid={"product-search"}
                    value={query}
                    onChange={(ev)=>setQuery(ev.target.value)}
                    className='mr-5 w-full'
                    type={"text"}
                    placeholder={`search for products from ${selectedBrand}`}
                />
               
            </div>

        </div>
    )

}