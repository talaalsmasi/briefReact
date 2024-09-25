import React from 'react';
import ProductData from "@/assets/jsonData/product/ProductData.json"
import SingleProductGrid from '@/components/product/SingleProductGrid';
import SingleProductList from '@/components/product/SingleProductList';
import PaginationV2 from '../pagination/PaginationV2';

const ShopPageContent = () => {
    return (
        <>
            <div className="validtheme-shop-area default-padding">
                <div className="container">
                    <div className="shop-listing-contentes">
                        <div className="row item-flex center">
                            <div className="col-lg-7">
                                <div className="content">
                                    <nav>
                                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                            <button className="nav-link active" id="grid-tab-control" data-bs-toggle="tab" data-bs-target="#grid-tab" type="button" role="tab" aria-controls="grid-tab" aria-selected="true">
                                                <i className="fas fa-th-large"></i>
                                            </button>
                                            <button className="nav-link" id="list-tab-control" data-bs-toggle="tab" data-bs-target="#list-tab" type="button" role="tab" aria-controls="list-tab" aria-selected="false">
                                                <i className="fas fa-th-list"></i>
                                            </button>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-lg-5 text-right">
                                <p>
                                    Showing 1–10 of 47 results
                                </p>
                                <select name="cars" id="cars">
                                    <option value="volvo">Short by latest</option>
                                    <option value="saab">Short by Recent</option>
                                    <option value="mercedes">Short by Popular</option>
                                    <option value="audi">Short by Relevant</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tab-content tab-content-info text-center" id="shop-tabContent">
                                <div className="tab-pane fade show active" id="grid-tab" role="tabpanel" aria-labelledby="grid-tab-control">
                                    <ul className="vt-products columns-4">
                                        {ProductData.map(product =>
                                            <SingleProductGrid product={product} key={product.id} />
                                        )}
                                    </ul>
                                </div>
                                <div className="tab-pane fade" id="list-tab" role="tabpanel" aria-labelledby="list-tab-control">
                                    <ul className="vt-products colums-2">
                                        {ProductData.map(product =>
                                            <SingleProductList product={product} key={product.id} />
                                        )}
                                    </ul>
                                </div>
                            </div>
                            <nav className="woocommerce-pagination">
                                <ul className="page-numbers">
                                    <PaginationV2 />
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShopPageContent;