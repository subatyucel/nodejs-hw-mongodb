import { Router } from 'express';
import {
  createSendContact,
  deleteSendContact,
  getSendAllContacts,
  getSendContactById,
  updateSendContact,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createContactSchema,
  updateContactSchema,
} from '../validation/contacts.js';
import { isValidId } from '../middlewares/isValid.js';
import { authenticate } from '../middlewares/authenticate.js';

const router = Router();
router.use(authenticate);
router.get('/', ctrlWrapper(getSendAllContacts));
router.get('/:contactId', isValidId, ctrlWrapper(getSendContactById));
router.post(
  '/',
  validateBody(createContactSchema),
  ctrlWrapper(createSendContact),
);
router.patch(
  '/:contactId',
  isValidId,
  validateBody(updateContactSchema),
  ctrlWrapper(updateSendContact),
);
router.delete('/:contactId', isValidId, ctrlWrapper(deleteSendContact));

export default router;
