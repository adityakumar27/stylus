import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './Screen/HomeScreen';
import ProductScreen from './Screen/ProductScreen';

const App= () => {
  return (
    
    <Router>
     <Header />
     <main className='py-4'>
       <Container>
         <Route path='/' compoent={HomeScreen} exact />
         <Route path='/product/:id' compoent={ProductScreen}  />
       </Container>
      </main>
     <Footer />
    </Router>
  )
}

export default App;
