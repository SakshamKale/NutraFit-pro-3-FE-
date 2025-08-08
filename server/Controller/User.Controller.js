const {UserData}=require('../Model/User.js') 

const handleInsertUserData=async(req,res)=>{
    try{
        const data=req.body;
        console.log("data:",data);
        if(!(data.email && data.password)){
            return res.status(400).json({Message:"Missing Fields",Succes:false});
        }
        const newUSer=UserData.create(data);
        // const newUser=new UserData(data);
        // await newUser.save(); 
         return res.status(200).json({ Message: "Data saved successfully", Success: true });
    }catch (error) {
    return res.status(500).json({ Message: error.message, Success: false });
  }
}
const handleCheckUserData=async(req,res)=>{
    try{
        const data=req.body;
        const user=await UserData.findOne({email:data.email});
        
    if (!user) {
      return res.status(404).json({ Message: "User not found", Success: false });
    }

    if (user.password !== data.password) {
      return res.status(401).json({ Message: "Incorrect password", Success: false });
    }

    res.status(200).json({ Message: "Login successful", Success: true });
    }catch (error) {
    return res.status(500).json({ Message: error.message, Success: false });
  }
}


module.exports={handleInsertUserData,handleCheckUserData};