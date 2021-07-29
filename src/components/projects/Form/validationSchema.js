// Yup schema to validate a project form

import * as Yup from 'yup';

const MESSAGES = {
  REQUIRED: 'This field is required',
  TOO_LONG: 'The entered text is too long',
  TOO_SHORT: 'The entered text is too short',
};

export default Yup.object({
  projectName: Yup.string().min(2, MESSAGES.TOO_SHORT).max(30, MESSAGES.TOO_LONG).required(MESSAGES.REQUIRED),
  description: Yup.string().min(2, MESSAGES.TOO_SHORT).max(200, MESSAGES.TOO_LONG).required(MESSAGES.REQUIRED),
  managerId: Yup.string().typeError(MESSAGES.REQUIRED).required(MESSAGES.REQUIRED),
  assigneeId: Yup.string().typeError(MESSAGES.REQUIRED).required(MESSAGES.REQUIRED),
  status: Yup.boolean().typeError(MESSAGES.REQUIRED).required(MESSAGES.REQUIRED),
});
