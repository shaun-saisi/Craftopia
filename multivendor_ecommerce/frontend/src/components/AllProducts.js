import logo from '../logo.svg';
import SingleProduct from './SingleProduct';

function AllProducts(){
    return (
        <section className='container mt-4'>
             {/* Latest Products*/}
          <h3 className="mb-4"><span className='text-warning'>AllProducts</span> </h3>
            
          <div className="row mb-4">
            <SingleProduct title="Trousers"/>
            <SingleProduct title="Trousers"/>
            <SingleProduct title="Trousers"/>
            <SingleProduct title="Trousers"/>
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />

          </div>
           {/* Latest Products end */}

             <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                    </li>
                </ul>
            </nav>
        </section>
    )
}

export default AllProducts;