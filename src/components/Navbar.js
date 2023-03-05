import React, { useState, useContext } from 'react'
import { Button, Container, Navbar, Modal } from 'react-bootstrap'
import { CartContext } from '../CartContext'
import CartProduct from './CartProduct'

function NavbarComponent() {
    const cart = useContext(CartContext)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const checkout = async () => {
        await fetch('http://localhost:4000/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                items: cart.items
            })
        }).then((response) => {
            return response.json()
        })
            .then((response) => {
                if (response.url) {
                    window.location.assign(response.url)
                }
            })
    }



    const productCount = cart.items.reduce((sum, product) =>
        sum + product.quantity, 0
    )

    return (
        <>
            <Navbar expand='sm' className='fixed-top custom-nav'
            >
                <Navbar.Brand className='logo-heading' href='/'>Ecommerce Store</Navbar.Brand >
                <Navbar.Toggle />
                <Navbar.Collapse className='justify-content-end'>
                    <Button className='btn-warning ml-2 cart-button' onClick={handleShow}>Cart ({productCount}) Items</Button>
                </Navbar.Collapse>
            </Navbar>

            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {productCount > 0 ?
                        <>
                            <p>Items in your cart : </p>
                            {cart.items.map((currentProduct, index) => (
                                <CartProduct
                                    key={index}
                                    id={currentProduct.id} quantity={currentProduct.quantity} />
                            ))}
                            <h1>Total : ₹{cart.getTotalCost().toFixed(2)}</h1>

                            <Button className="btn-success"
                                onClick={checkout}
                            >
                                Purchase Items!!
                            </Button>
                        </>
                        :
                        <h1>This is modal</h1>
                    }
                </Modal.Body>
            </Modal>
        </>
    )
}
export default NavbarComponent;