import React, {useEffect} from 'react';
import FeatureStore from "../store/FeatureStore.js";
import LegalContents from "../components/features/legal-contents.jsx";
import Layout from '../components/layout/Layout';

const ContactPage = () => {
    const {LegalDetailsRequest}=FeatureStore();
    useEffect(() => {
        (async ()=>{
            await LegalDetailsRequest("contact")
        })()
    }, []);
    return (
        <Layout>
            <LegalContents/>
        </Layout>
    );
};

export default ContactPage;