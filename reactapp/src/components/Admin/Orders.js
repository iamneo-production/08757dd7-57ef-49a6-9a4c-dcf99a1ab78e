import React, { Component } from 'react';
import AdminNavigation from './AdminNavigation';
import Footer from '../Footer';

class Orders extends Component {
    render() {
        return(
            <div>
                <AdminNavigation/>
                <div className="container mt-5 mb-5">
                    Order Page
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Orders;