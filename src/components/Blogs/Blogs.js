import React from 'react';

const Blogs = () => {
    return (
        <div className='container mt-5'>
            <div className='mb-5'>
                <h2>Q: Difference between javascript and nodejs</h2>
                <p>
                    JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language.
                    Java Script can only be run in browser as it is used in client side where Node.Js can run java anywhere and it is used on the Server side.
                </p>
            </div>
            <div className='mb-5'>
                <h2>Q: When should you use nodejs and when should you use mongodb</h2>
                <p>
                    Node.js is an open source server environment which uses JavaScript on the server to develop backend applications.If we want to develop a web application that runs on a server then we should use NOde.js.
                    MongoDb is a SQL database, if we want to work with document centric data then ,we should use MongoDb.
                </p>
            </div>
            <div className='mb-5'>
                <h2>Q: Differences between SQL and noSQL databases.</h2>
                <p>
                    SQL database are table based and vertically scalable.This kind of database are suitable for multi-row transactions and has ordered type data.On the other hand NoSQL database are value,document,key,graph etc based and are horizontally scalable.This database type are suitable for unstructured data like Json.
                </p>
            </div>
            <div className='mb-5'>
                <h2>Q: What is the purpose of JWT and how does it work</h2>
                <p>
                    JWT means JSON WEB TOKEN .It is used to share security information between two parties.JWT using cryptographic algorithm to ensure the data security.A JWT is formed of 3 parts and each part has its own information.
                </p>
            </div>
        </div>
    );
};

export default Blogs;