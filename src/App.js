

import './App.css';
import React from 'react';
import Booksearchpage from './Booksearchpage';
import Mybookself from './Mybookself';
import { Box, HStack, Text } from '@chakra-ui/react';
import { Link, Route, Routes } from 'react-router-dom';
function App() {
  const linkstyle = { textDecoration: 'none', color: 'white' }
  return (
    <>
      <Box
        justifyContent="center"
        alignItems="center"
        // position='fixed'
        top={0}
        left={0}
        right={0}
        translateY={0}
        transitionProperty="transform"
        transitionDuration=".3s"
        transitionTimingFunction="ease-in-out"
        //  backgroundColor="#18181b"
        backgroundColor="#128C7E"
      >
        <HStack spacing={8} px={10}
          py='32' display='flex' justify='space-evenly' >
          <Link style={linkstyle} to="./"  ><Text >Book Search Page</Text></Link>
          <Link style={linkstyle} to="./mybooks"  ><Text>My Book Shelf </Text></Link>
        </HStack>
      </Box>
      <Routes>
        <Route exact path='/' element={<Booksearchpage />}></Route>
        <Route exact path='/bookshell' element={<Booksearchpage />}></Route>
        <Route exact path='/mybooks' element={<Mybookself />}></Route>
      </Routes>
    </>
  )
}

export default App;
