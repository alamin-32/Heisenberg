import React from 'react';
import ProductDelete from '../Inventory/ProductManage/ProductDelete/ProductDelete';
import './ManageItem.css'

const ManageItem = () => {
    return (
        <div className='mb-4'>
            <h1 className='text-center mb-5 mt-3'>Manage Your Item</h1>
            <div className='manage-container container'>
                <div>
                    <ProductDelete></ProductDelete>
                </div>
            </div>
        </div>
    );
};

export default ManageItem;