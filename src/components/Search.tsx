
"use client" 
import { useState, FormEvent } from "react"
import { useRouter } from "next/navigation"
import { IconSearch } from "./Icons/Index";

export default function Search() {

    const [search, setSearch]= useState('');
    const router = useRouter();

    const handleSubmit = async(e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        setSearch('');
        router.push(`/${search}/`)
    }

    const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {

        setSearch(e.target.value);

    } 
    console.log({search})
    return (
<form className="Wiki-UI__search-form" onSubmit={handleSubmit}>

    <input
    type="text" 
    className="Wiki-UI__search-form__input-field"
    value={search}
    onChange={handleChangeSearch}
    />
<button className="Wiki-UI__utilities__ ">
    <IconSearch className="Wiki-UI__Icon" /> 
</button>

</form>
  )
}
