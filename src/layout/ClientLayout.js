import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ClientLayout = (props) => {
    const { children } = props;
    return (
        <div>
            <Header />
            { children }
            <Footer />
        </div>
    );
}

export default ClientLayout;