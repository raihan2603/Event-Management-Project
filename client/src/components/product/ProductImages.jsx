import ProductStore from "../../store/ProductStore.js";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"

const ProductImages = () => {
    const {Details}=ProductStore();
    let images=[
        {original: Details[0]['details']['img1'], thumbnail: Details[0]['details']['img1']},
        
    ]

    return (
        <div>
            <ImageGallery autoPlay={true} items={images}/>
        </div>
    );
};
export default ProductImages;