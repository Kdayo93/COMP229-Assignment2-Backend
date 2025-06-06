import express from 'express';
import {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContactById,
  deleteAllContacts
} from '../controllers/contact.controller.js';

const contactRouter = express.Router();

contactRouter.get('/', getAllContacts);
contactRouter.get('/:id', getContactById);
contactRouter.post('/', createContact);
contactRouter.put('/:id', updateContact);
contactRouter.delete('/:id', deleteContactById);
contactRouter.delete('/', deleteAllContacts);


export { contactRouter };

