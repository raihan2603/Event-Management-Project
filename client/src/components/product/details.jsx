import ProductImages from "./ProductImages.jsx";
import ProductStore from "../../store/ProductStore.js";
import DetailsSkeleton from "../../skeleton/details-skeleton.jsx";

import toast from "react-hot-toast";
import WishStore from "../../store/WishStore.js";
import WishSubmitButton from "../wish/WishSubmitButton.jsx";


const Details = () => {

    const {Details}=ProductStore();
    const {WishSaveRequest,WishListRequest}=WishStore()

    const AddWish = async (productID,) => {
        let res=await WishSaveRequest(productID);
        if(res){
            toast.success("Wish Item Added");
            await  WishListRequest();
        }
    }

    if(Details===null){
        return <DetailsSkeleton/>
    }
    else {
        return (
            <div className="section-top m-0 p-0 bg-white">
                <div className="container py-4">
                    <div className="row">
                        <div className="col-md-7 p-3">
                            <ProductImages/>
                        </div>
                        <div className="col-md-5 p-3">
                            <h4>{Details[0]['title']}</h4>
                            <p className="text-muted bodySmal my-1">Category: {Details[0]['category']['categoryName']}</p>
                            <p className="bodySmal mb-2 mt-1">{Details[0]['shortDes']}</p>
                            
                            <span className="bodyXLarge">Date:{Details[0]['discountPrice']} </span>

                            <br />

                            <span className="bodyXLarge">Location: {Details[0]['location']}</span>

                            <div className="row">
                                <div className="col-4  p-2">
                                    <WishSubmitButton onClick={async ()=>{await AddWish(Details[0]['_id'])}} className="btn w-100 btn-success" text="Add to Wish"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

};
export default Details;