import React, {useEffect} from 'react';
import FeatureStore from "../store/FeatureStore.js";
import LegalContents from "../components/features/legal-contents.jsx";
import Layout from '../components/layout/Layout';

const ComplainPage = () => {
    const {LegalDetailsRequest}=FeatureStore();
    useEffect(() => {

        (async ()=>{
            await LegalDetailsRequest("complain")
        })()
    }, []);
    return (
        <Layout>
            <LegalContents/>
        </Layout>
    );
};

export default ComplainPage;