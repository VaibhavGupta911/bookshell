import React, { useEffect, useState } from "react";
import { Box, Heading, VStack } from '@chakra-ui/react';
import { nanoid } from "nanoid";

function Mybookself() {
    var [bookname, setBookname] = useState([])

    useEffect(() => {
        const interval = setInterval(() => {
            setBookname(JSON.parse(localStorage.getItem('book')) || []);
            console.log('This will run every 10 second');
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <> <Box backgroundColor="#128C7E" justifyContent="center"
            alignItems="center"
            height='100vh'>
            <VStack paddingTop={32} paddingBottom={32} spacing={16} >
                <Heading as='h1' size='lg' color='white'>Book Shelf</Heading>
            </VStack>
            <div className="menu-div2-card">
                {
                    bookname.map(
                        (e) => (
                            <div key={nanoid()} id={nanoid()} className="card-div">
                                <div className="card-heading">
                                    <h5 className="card-title">Book Name: {e.name}</h5>

                                </div>
                                <p className="card-description">Edition Count: {e.edition_count}</p>
                                {/* Delete Button */}
                               {/* <button className="card-button"  >Delete</button>*/} 
                            </div>
                        )
                    )
                }
            </div>
            
        </Box>
            {/*  {bookname.map(
                (e) => (<div>Book Name ={e}</div>)
          )}*/}
          
        </>
    )
}

export default Mybookself;