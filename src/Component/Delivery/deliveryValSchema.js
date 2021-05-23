import * as Yup from 'yup';
import deliveryForm from './delFormModel';
const {
    formField: {
      firstName,
      lastName,
      address1,
      city,
      zipcode,
      country,
    }
  } = deliveryForm;

const deliveryValSchema = 
    Yup.object().shape({
        [firstName.name]: Yup.string().required(`${firstName.requiredErrorMsg}`),
        [lastName.name]: Yup.string().required(`${lastName.requiredErrorMsg}`),
        [address1.name]: Yup.string().required(`${address1.requiredErrorMsg}`),
        [city.name]: Yup.string()
          .nullable()
          .required(`${city.requiredErrorMsg}`),
        [zipcode.name]: Yup.string()
          .required(`${zipcode.requiredErrorMsg}`)
          .test(
            'len',
            `${zipcode.invalidErrorMsg}`,
            val => val && val.length === 5
          ),
        [country.name]: Yup.string()
          .nullable()
          .required(`${country.requiredErrorMsg}`)
      });

export default deliveryValSchema;