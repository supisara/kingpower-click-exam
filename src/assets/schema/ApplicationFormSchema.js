import * as yup from "yup";

const textRegex = RegExp(/^[A-Za-z ]*$/);
const numberRegex = RegExp(/^[0-9]+$/);

export const applicationFormSchema = yup.object().shape({
    title: yup.string().required(),
    firstName: yup.string().matches(textRegex, 'Please enter valid firstname').required(),
    lastName: yup.string().matches(textRegex, 'Please enter valid lastname').required(),
    birthday: yup.date().required(),
    mobilePhone: yup.string().required(),
    expectedSalary: yup.string().required().matches(numberRegex, 'Please enter valid expected salary')
});