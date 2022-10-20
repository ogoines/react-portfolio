import React, { useState } from 'react';
import HeaderNav from '../components/HeaderNav';
// import Home from './Home';
import About from './About';
// import Blog from './Blog';
// import Contact from './Contact';


export default function MainContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
    //   return <Home />;
    }
    if (currentPage === 'About') {
    //   return <About />;
    }
    if (currentPage === 'Portfolio') {
    //   return <Portfolio />;
    }
    if (currentPage === 'Resume') {
        //   return <Resume />;
        }
    if (currentPage === 'Contact') {
            //   return <Contact />;
        }
  
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <HeaderNav currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {/* {renderPage()} */}
    </div>
  );
}

