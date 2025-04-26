import Details from "../components/product/details.jsx";

import {useParams} from "react-router-dom";
import Brands from "../components/product/brands.jsx";
import ProductStore from "../store/ProductStore.js";
import {useEffect} from "react";
import Layout from "../components/layout/Layout.jsx";
const ProductDetails = () => {
    const {BrandList,DetailsRequest,ReviewListRequest,BrandListRequest}=ProductStore();
    const {id}=useParams();

    useEffect(() => {
        (async ()=>{
            await DetailsRequest(id);
            await ReviewListRequest(id);
            BrandList===null?await BrandListRequest():null
        })()
    }, [id]);


    return (
        <Layout>
            <Details/>
            <Brands/>
        </Layout>
    );
};
export default ProductDetails;