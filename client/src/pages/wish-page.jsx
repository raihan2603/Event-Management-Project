import React from 'react';
import WishList from "../components/wish/wish-list.jsx";
import Brands from "../components/product/brands.jsx";
import Layout from '../components/layout/Layout.jsx';

const WishPage = () => {
    return (
        <Layout>
            <WishList/>
            <Brands/>
        </Layout>
    );
};
export default WishPage;