import connectDB from "../../../utils/database"
import { ItemModel } from "../../../utils/schemaModels"

const getAllItems = async(req,res)=>{
  try{
    await connectDB()
    const allItems = await ItemModel.find()
    return res.status(200).json({message:"アイテムの読み取り成功（オール）",allItems: allItems})
}catch(error){
  return res.status(400).json({message:"アイテム読み取りに失敗しました（オール）"})
}
  }

export default getAllItems


