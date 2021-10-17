import React, { Component } from "react";
import AdminNavigation from "./AdminNavigation";
import {Col, Row, Table, Image, Button} from 'react-bootstrap';
import Footer from "../Footer";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartPlus, faEdit, faTrash} from '@fortawesome/free-solid-svg-icons'

class AdminProducts extends Component{

    constructor(props){
        super(props);
        this.state = {
            email: localStorage.getItem("email")
        };
    }

    render(){

        if(this.state.email !== "admin"){
            this.props.history.push("/login");
        }

        return(
            <div>
                <AdminNavigation history={this.props.history}/>
                <div className="container mt-5 mb-5">
                    <Button variant="warning" size="sm" className="mb-3"><FontAwesomeIcon icon={faCartPlus} /><b> ADD PRODUCTS</b></Button>
                    <Row>
                        <Col lg={12}>
                        <Table bordered hover id="adminDashboard">
                            <thead>
                                <tr>
                                <th>Images</th>
                                <th>Instrument Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <Image src="https://images.unsplash.com/photo-1617161034978-3aa9d79a9f57?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aW5zdHJ1bWVudHxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" rounded width="100px" height="100px"/>
                                    </td>
                                    <td>Product Name</td>
                                    <td>599</td>
                                    <td>1</td>
                                    <td>
                                        <Button variant="warning" size="sm" ><FontAwesomeIcon icon={faEdit} /><b> EDIT</b></Button>{' '}
                                        <Button variant="danger" size="sm" ><FontAwesomeIcon icon={faTrash} /><b> DELETE</b></Button>
                                    </td>
                                    </tr>
                                <tr>
                                    <td>
                                        <Image src="https://images.unsplash.com/photo-1617161034978-3aa9d79a9f57?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aW5zdHJ1bWVudHxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" rounded width="100px" height="100px"/>
                                    </td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>
                                        <Button variant="warning" size="sm" ><FontAwesomeIcon icon={faEdit} /><b> EDIT</b></Button>{' '}
                                        <Button variant="danger" size="sm" ><FontAwesomeIcon icon={faTrash} /><b> DELETE</b></Button>
                                    </td>
                                </tr>
                            </tbody>
                            </Table>
                        </Col>
                    </Row>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default AdminProducts