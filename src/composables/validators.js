import { reactive } from "vue";

const errors = reactive({});

const useFormValidation = () => {
  const validateNameField = (fieldName, fieldValue) => {
    errors[fieldName] =
      fieldValue === "" ? "The " + fieldName + " field is required" : "";
  };

  const validateAmountField = (fieldName, fieldValue) => {
    errors[fieldName] =
      fieldValue === "" ? "The " + fieldName + " field is required" : "";
  };

  const validateTermField = (fieldName, fieldValue) => {
    errors[fieldName] =
      fieldValue === "" ? "The " + fieldName + " field is required" : "";
  };

  return { errors, validateNameField, validateAmountField, validateTermField };
};

export default useFormValidation;
