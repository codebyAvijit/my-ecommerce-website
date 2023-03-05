import { Card, Button, Form, Row, Col } from 'react-bootstrap'
import { CartContext } from '../CartContext'
import { useContext } from 'react'

function ProductCard(props) {
    const product = props.product
    const cart = useContext(CartContext)
    const productQuantity = cart.getProductQuantity(product.id)
    console.log(cart.items);

    return (
        <Card className="img-thumbnail mb-2" style={{ width: "400px", height: "500px" }}>
            <Card.Img variant="top" src={product.image} style={{ height: "300px", objectFit: "cover" }} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>₹{product.price}</Card.Text>
                {productQuantity > 0 ?
                    <>
                        <Form as={Row}>
                            <Form.Label column='true' sm='6'>
                                In Cart : {productQuantity}
                            </Form.Label>
                            <Col sm='6'>
                                <Button sm='6' className='mx-2' onClick={() => cart.addOneToCart(product.id)}>+</Button>
                                <Button sm='6' className='mx-2'
                                    onClick={() => cart.removeOneFromCart(product.id)}>-</Button>
                            </Col>
                        </Form>
                        <Button variant='danger' onClick={() => cart.deleteFromCart(product.id)} className='my-2'>Remove Form Cart</Button>
                    </>
                    :
                    <Button variant="primary" onClick={() => {
                        cart.addOneToCart(product.id)
                    }}>Add to Cart</Button>
                }
            </Card.Body>
        </Card>

    )
}
export default ProductCard