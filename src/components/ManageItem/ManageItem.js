import React from 'react';
import ProductAdd from '../Inventory/ProductManage/productAdd/ProductAdd';
import ProductDelete from '../Inventory/ProductManage/ProductDelete/ProductDelete';
import './ManageItem.css'

const ManageItem = () => {
    return (
        <div>
            <h1 className='text-center mb-5 mt-3'>Manage Your Item</h1>
            <div className='manage-container container'>
                <div>
                    <ProductDelete></ProductDelete>
                </div>
                {/* <div>
                    <ProductAdd></ProductAdd>
                </div> */}
            </div>
        </div>
    );
};

export default ManageItem;