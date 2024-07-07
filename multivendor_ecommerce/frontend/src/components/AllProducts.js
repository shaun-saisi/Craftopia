import React, { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct';

function AllProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/products/')
            .then((response) => response.json())
            .then((data) => {
                console.log('Fetched data:', data);  // Debug log
                if (data.results && Array.isArray(data.results)) {
                    setProducts(data.results);  // Set products to data.results array
                } else {
                    console.error('Unexpected data format:', data);
                }
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <section className='container mt-4'>
            <h3 className="mb-4">
                <span className='text-warning'>All Products</span>
            </h3>
            <div className="row mb-4">
                {
                    products.length > 0 ? (
                        products.map((product, index) => (
                            <SingleProduct key={index} product={product} />
                        ))
                    ) : (
                        <p>No products available.</p>
                    )
                }
            </div>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </section>
    );
}

export default AllProducts;
