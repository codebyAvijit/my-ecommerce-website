import { Row, Col } from 'react-bootstrap';
import { productsArray } from '../Products';
import ProductCard from '../components/ProductCard';

function Store() {
    const fanGearProducts = productsArray.slice(6);
    const videoGamesProducts = productsArray.slice(0, 6);

    return (
        <div>
            <h1 className="text-center title">Welcome to the store!</h1>

            <h1 className="text-center mb-5 subtitle">Video Games</h1>

            <Row xs={1} md={3} className="g-4">
                {videoGamesProducts.map((product, index) => (
                    <Col key={index} align="center">
                        <ProductCard product={product} />
                    </Col>
                ))}
            </Row>

            {fanGearProducts.length > 0 && (
                <div>
                    <h1 className="text-center mb-5 subtitle">Fan Gear</h1>

                    <Row xs={1} md={3} className="g-4">
                        {fanGearProducts.map((product, index) => (
                            <Col key={index} align="center">
                                <ProductCard product={product} />
                            </Col>
                        ))}
                    </Row>
                </div>
            )}
        </div>
    );
}

export default Store;
