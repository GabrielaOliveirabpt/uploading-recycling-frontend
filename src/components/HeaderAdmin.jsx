import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

class HeaderAdmin extends React.Component {
    logout = () => {
        localStorage.removeItem('token')
        this.props.history.push('/admin/login')
    }
    render() {

        return (

            <React.Fragment>
                <Navbar bg="success" expand="lg">

                    <Navbar.Brand className="pb-0 pt-0">
                        <Nav.Link className="pb-0 pt-0" href="/">
                            <img src="../images/logo.svg" className="d-inline-block align-top m-1 logo-image" alt="logo" /> &nbsp;
                        <span className=" text-white pl-1 specialFont">WasteAid</span>
                        </Nav.Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">

                        <Nav className="">
                            <Nav.Link className="nav-text text-grey" href="/admin/tickets" exact="true" activeclassname="active"><span className="pb-1 hover">Admin Tickets</span></Nav.Link>
                            <Nav.Link className="nav-text text-grey" href="/items" activeclassname="active"><span className="pb-1 hover">Tickets Approved</span></Nav.Link>
                            {/* map is disabled, because I am not sure what to display */}
                            <Nav.Link className="nav-text text-grey" eventKey="/mapSearch/default" activeclassname="active" ><button className="nav-text text-grey button-admin-header" onClick={this.logout}>Logout</button></Nav.Link>

                        </Nav>

                    </Navbar.Collapse>
                </Navbar>

            </React.Fragment>
        )
    }
}

export default HeaderAdmin
