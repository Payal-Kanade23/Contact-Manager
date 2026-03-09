import {Contact} from   "../models/contact.model.js";

export const createContact = async (req,res) =>{
    try{
        const {name, email,phone} = req.body;

        if(!name || !email || !phone){
           return res.status(400).json({
            message:"All fields are required"
           });
        }

        const existingCOntact = await Contact.findOne({phone:phone})
        if(existingCOntact){
            return res.status(400).json({
            message:"Contact with this phone number already exists"
        });
    }


        const contact = await Contact.create({
            name,
            email,
            phone,

        });
        res.status(201).json({
            message:"Contact created successfully",
            contact,
        });


    }catch(error){
        console.log(error);
        res.status(500).json({
            message:"Server error",
        });
    }
}

export const getAllContacts = async (req , res) =>{
    const contacts = await Contact.find();
    res.status(200).json({
        message:"Contacts fetched successfully",
        contacts,
    });

}


export const updateContact = async (req,res) =>{
    const contact = await Contact.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).json({
            message:"Contact updated successfully",
            contact,
        });
        console.log(contact);
}  


export const deleteContact = async (req,res) =>{
    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json({
        message:"Contact deleted successfully", 
    });
}