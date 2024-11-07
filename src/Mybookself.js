import React, { useEffect, useState } from "react";
import { Box, Heading, VStack } from '@chakra-ui/react';
import { nanoid } from "nanoid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
function Mybookself() {
    const [bookname, setBookname] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setBookname(JSON.parse(localStorage.getItem('book')) || []);
            console.log('This will run every 2 seconds');
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const deleteBook = (bookToDelete) => {
        const updatedBooks = bookname.filter(book => book.name !== bookToDelete.name);
        setBookname(updatedBooks);
        localStorage.setItem('book', JSON.stringify(updatedBooks));
    };

    return (
        <> 
            <Box backgroundColor="#128C7E" justifyContent="center" alignItems="center" height='100vh'>
                <VStack paddingTop={32} paddingBottom={32} spacing={16}>
                    <Heading as='h1' size='lg' color='white'>Book Shelf</Heading>
                </VStack>
                
                <div className="menu-div2-card">
                    {
                        bookname.map((e) => (
                            <div key={nanoid()} className="card-div">
                                <div className="card-heading">
                                    <h5 className="card-title">Book Name: {e.name}</h5>
                                </div>
                                <p className="card-description">Edition Count: {e.edition_count}</p>
                                
                                {/* Delete Icon Button */}
                                <FontAwesomeIcon icon={faTrash}  onClick={() => deleteBook(e)} />
                            </div>
                        ))
                    }
                </div>
            </Box>
        </>
    );
}

export default Mybookself;