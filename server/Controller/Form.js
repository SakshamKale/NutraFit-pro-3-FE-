const {FormData}=require('../Model/Form') 
const handleInsertFormrData=async(req,res)=>{
    try{
        const data=req.body;
        console.log("data:",data);
        if(!(data.Name && data.Age && data.Gender && data.Hft && data.Hin && data.Wei && data.FG && data.AL || data.AMC )){
            return res.status(400).json({Message:"Missing Fields",Success:false});
        }
        const newUserform=new FormData(data);
        await newUserform.save(); 
         return res.status(200).json({ Message: "Data saved successfully", Success: true });
    }catch (error) {
    return res.status(500).json({ Message: error.message, Success: false });
  }
}

const handleGetFormrData=async(req,res)=>{
   try {
    const latest = await FormData.findOne().sort({ _id: -1 }); 
    res.json({ Success: true, data: latest });
  } catch (error) {
    res.status(500).json({ Success: false, Message: "Failed to fetch form data" });
  }
}

module.exports={handleInsertFormrData,handleGetFormrData}