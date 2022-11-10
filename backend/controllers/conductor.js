import ConductorModel from "../models/conductor.js";
import mongoose from "mongoose";

export const createConductor = async(req,res)=>{
    const conductor = req.body;
    const newConductor = new ConductorModel({
        ...conductor,
        creator: req.userId,
        createdAt: new Date().toISOString()
    });
    try{
        await newConductor.save();
        res.status(201).json(newConductor);
    }catch(error){
        res.status(404).json({message: "Something went wrong"});
    }
};

export const getConductor = async(req,res)=>{
    const {id} = req.params
    try{
        const conductor = await ConductorModel.findById(id);
        res.status(200).json(conductor)
    }catch(error){

        res.status(404).json({message: "Something went wrong"});
    }
};

export const getConductors = async(req,res)=>{
    try{
        const conductors = await ConductorModel.find();
        res.status(200).json(conductors)
    }catch(error){

        res.status(404).json({message: "Something went wrong"});
    }
};

export const deleteConductor = async (req, res) => {
    const { id } = req.params;
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: `No conductor exist with id: ${id}` });
      }
      await ConductorModel.findByIdAndRemove(id);
      res.json({ message: "Conductor deleted successfully" });
    } catch (error) {
      res.status(404).json({ message: "Something went wrong" });
    }
};


  export const updateConductor = async(req,res)=>{
    const {id} = req.params;
    const {firstName, lastName, address, nic, email, phone} = req.body;

    try{

        const updatedConductor ={
            firstName,
            lastName,
            address,
            nic,
            email,
            phone,
            _id: id
        }
        await ConductorModel.findByIdAndUpdate(id, updatedConductor, {new:true});
        res.json(updatedConductor);
    }catch(error){
        res.status(404).json({message: "Something went wrong"});
    }
    
};
