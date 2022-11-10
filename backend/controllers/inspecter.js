import InspectorModel from "../models/inspector.js";
import mongoose from "mongoose";

export const createInspector = async(req,res)=>{
    const inspector = req.body;
    const newInspector = new InspectorModel({
        ...inspector,
        creator: req.userId,
        createdAt: new Date().toISOString()
    });
    try{
        await newInspector.save();
        res.status(201).json(newInspector);
    }catch(error){
        res.status(404).json({message: "Something went wrong"});
    }
};

export const getInspector = async(req,res)=>{
    const {id} = req.params
    try{
        const inspector = await InspectorModel.findById(id);
        res.status(200).json(inspector)
    }catch(error){

        res.status(404).json({message: "Something went wrong"});
    }
};

export const getInspectors = async(req,res)=>{
    try{
        const inspectors = await InspectorModel.find();
        res.status(200).json(inspectors)
    }catch(error){

        res.status(404).json({message: "Something went wrong"});
    }
};

export const deleteInspector = async (req, res) => {
    const { id } = req.params;
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: `No inspector exist with id: ${id}` });
      }
      await InspectorModel.findByIdAndRemove(id);
      res.json({ message: "Inspector deleted successfully" });
    } catch (error) {
      res.status(404).json({ message: "Something went wrong" });
    }
};


  export const updateInspector = async(req,res)=>{
    const {id} = req.params;
    const {firstName, lastName, address, nic, email, phone} = req.body;

    try{

        const updatedInspector ={
            firstName,
            lastName,
            address,
            nic,
            email,
            phone,
            _id: id
        }
        await InspectorModel.findByIdAndUpdate(id, updatedInspector, {new:true});
        res.json(updatedInspector);
    }catch(error){
        res.status(404).json({message: "Something went wrong"});
    }
    
};
