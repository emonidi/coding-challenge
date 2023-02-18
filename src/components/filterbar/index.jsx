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
        <div data-testid="filterbar" className="flex justify-around mt-10  border p-4 rounded max-w">
            <div className="flex w-1/4 items-center">
                <Label className='mr-4'>Brands:</Label>
                <Dropdown label={selectedBrand}>
                    {
                        brands.map(brand =>
                            <DropdownItem onClick={ev=>onBrandChange(brand)} key={brand}>{brand}
                            </DropdownItem>
                        )
                    }
                </Dropdown>
            </div>
            <div className='flex w-3/4 justify-center items-center'>
                <TextInput
                    data-testid={"product-search"}
                    onChange={(ev)=>setQuery(ev.target.value)}
                    className='mr-5 w-full'
                    type={"text"}
                    placeholder={`search for products from ${selectedBrand}`}
                />
               
            </div>

        </div>
    )

}