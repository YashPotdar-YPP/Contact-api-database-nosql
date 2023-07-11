const express = require("express")
const router = new express.Router();
const Contact = require("../model/contact-schema");


// Post contact 
router.post("/addContact", async (req, res) => {
    try {
      const phoneNumberExist = await Contact.findOne({
        phoneNumber: req.body.phoneNumber,
      });
  
      if (phoneNumberExist) {
        return res.status(400).json({ error: "Phone Number is already exists." });
      }
  
      const addContact = new Contact(req.body);
      const insertContact = await addContact.save();
      res.status(201).send(insertContact);
    } catch (e) {
      res.send(e);
    }
  });
  
  // Get contact 
  router.get("/getContact", async (req, res) => {
    try {
      const getContact = await Contact.find({});
      res.send(getContact);
    } catch (e) {
      res.send(e);
    }
  });
  
  // Get Single contact 
  router.get("/getSingleContact/:id", async (req, res) => {
    try {
      const _id = req.params.id;
      const getSingleContact = await Contact.findById({_id});
      res.send(getSingleContact);
    } catch (e) {
      res.send(e);
    }
  });
  
  // Update contact 
  router.patch("/updateContact/:id", async (req, res) => {
    try {
      const _id = req.params.id;
      const updateContact = await Contact.findByIdAndUpdate(_id , req.body , {
        new:true
      });
      res.send(updateContact);
    } catch (e) {
      res.status(500).send(e);
    }
  });
  
  // Delete contact 
  router.delete("/deleteContact/:id", async (req, res) => {
    try {
      const updateContact = await Contact.findByIdAndDelete(req.params.id)
      res.send(updateContact);
    } catch (e) {
      res.send(e);
    }
  });
  

  module.exports=router;