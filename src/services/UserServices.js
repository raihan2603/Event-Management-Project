const EmailSend = require("../utility/EmailHelper");
const UserModel=require("../models/UserModel")
const ProfileModel=require("../models/ProfileModel")

const {EncodeToken} = require("../utility/TokenHelper");

const UserOTPService = async (req) => {
    //  try {
    //      let email=req.params.email;
    //      let code=Math.floor(100000+Math.random()*900000);

    //      let EmailText=`Your Verification Code is= ${code}`
    //      let EmailSubject='Email Verification'

    //      await EmailSend(email,EmailText,EmailSubject);

    //      await UserModel.updateOne({email:email},{$set:{otp:code}},{upsert:true})

    //      return {status:"success", message:"6 Digit OTP has been send"}
    //  }catch (e) {
    //      return {status:"fail", message:e}
    //  }


     try {
        let email=req.params.email;
        let password=req.params.password;


        await UserModel.updateOne({email:email},{$set:{password:password}},{upsert:true})

        return {status:"success", message:"Your email and password is received"}
    }catch (e) {
        return {status:"fail", message:e}
    }
}

const VerifyOTPService = async (req) => {

    try {
        let email=req.params.email;
        let password=req.params.password;

        // User Count
        let total=await UserModel.find({email:email,password:password}).count('total');
        if(total===1){

            // User ID Read
            let user_id=await UserModel.find({email:email,password:password}).select('_id');

            // User Token Create
            let token=EncodeToken(email,user_id[0]['_id'].toString())

            // // OTP Code Update To 0
            // await UserModel.updateOne({email:email},{$set:{otp:"0"}})

            return {status:"success", message:"Valid Info",token:token}

        }
        else{
            return {status:"fail", message:"Invalid info"}
        }

    }catch (e) {
        return {status:"fail", message:"Invalid info"}
    }


}




const SaveProfileService = async (req) => {
   try {
       let user_id=req.headers.user_id;
       let reqBody=req.body;
       reqBody.userID=user_id;
       await ProfileModel.updateOne({userID:user_id},{$set:reqBody},{upsert:true})
       return {status:"success", message:"Profile Save Success"}
   }catch (e) {
       return {status:"fail", message:"Something Went Wrong"}
   }
}





const ReadProfileService = async (req) => {
    try {
        let user_id=req.headers.user_id;
        let result= await ProfileModel.find({userID:user_id})
        return {status:"success", data:result}
    }catch (e) {
        return {status:"fail", message:"Something Went Wrong"}
    }
}


module.exports={
    UserOTPService,
    VerifyOTPService,
    SaveProfileService,
    ReadProfileService
}

