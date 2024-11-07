
import { Box, Heading, Input, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { nanoid } from "nanoid";

function Booksearchpage() {
    const [search, setSearch] = useState("");
    const [pdata, setPdata] = useState([]);
    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    const apiData = () => {
        console.log("Hello Doing Search")
        let t11 = "https://openlibrary.org/search.json?q=".concat(search).concat("&limit=10&page=1");
        console.log("OK i got api")
        console.log(t11)
        // fetch(t11).then(response => {
        //     return response.json()
        // }).then(data => {
        //     setPdata(data.docs)
        // })

        async function fetchfunction() {
            const data = await fetch(t11);
            console.log(data)
            const json = await data.json();
            console.log("json",json)
            setPdata(json.docs)
            console.log("jsondata",json.docs)
        }
        fetchfunction();
    }

    function save(e, f) {
        console.log(e)
        var new_book = e;
        var new_edition = f;
        console.log(new_book);
        if (localStorage.getItem('book') == null) {
            localStorage.setItem('book', '[]');
        }
        var old_book = JSON.parse(localStorage.getItem('book'));
        old_book.push({ name: new_book, edition_count: new_edition });
        localStorage.setItem('book', JSON.stringify(old_book));
    }
    return (
        <>
            <Box backgroundColor='#128C7E' justifyContent="center"
                alignItems="center"
                height='100vh'>
                <VStack paddingTop={32} paddingBottom={32} spacing={16} >
                    <Heading as='h1' size='lg' color='white'>Search Book</Heading>
                    <Input type='text' placeholder='Enter Book name' width='max-content' padding={6} borderRadius={6} value={search} onChange={handleChange} autoComplete="off" />
                    <button className="card-button" onClick={apiData} padding={8} borderRadius={6} border='none' cursor='pointer' >
                        <Text padding={4} >Search</Text>
                    </button>
                </VStack>
                <div className="menu-div2-card">
                    {
                        pdata.map(
                            (a) => (
                                <div key={nanoid()} id={nanoid()} className="card-div">
                                    <div className="card-heading">
                                        <h5 className="card-title">Book Name: {a.title}</h5>
                                    </div>
                                    <p className="card-description">Edition Count: {a.edition_count}</p>
                                    <button className="card-button" key={a.title} onClick={() => save(a.title, a.edition_count)}>Add Book</button>
                                </div>
                            )
                        )
                    }
                </div>

            </Box>

        </>
    )
}

export default Booksearchpage;
