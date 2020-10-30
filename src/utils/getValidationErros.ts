import { ValidationError } from 'yup';

interface ValidationErrors {
  [key: string]: string;
}

function getValidationErros(errors: ValidationError): ValidationErrors {
  const validationErrors: ValidationErrors = {};

  errors.inner.forEach(error => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}

export default getValidationErros;
