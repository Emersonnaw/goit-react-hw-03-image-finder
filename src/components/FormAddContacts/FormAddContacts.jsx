
import { nanoid } from 'nanoid' 
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Container, Title, FormCastom, LabelCastom, InputCastom,Button } from './FormAddContacts.styled';
import PropTypes from 'prop-types';


let userSchema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().required(),
  
});
const initialValues = {
  name: '',
  number: '',
};
export const FormAddContacts = (onGetValue) => {
  
  const handleSubmit = (values, { resetForm }) => {
    const id = { id: nanoid() };
    onGetValue({ ...id, ...values });
    console.log({ ...id, ...values });
    
    resetForm();
  
  }
  
  return (
    <Container>
    <Title>Phonebook</Title>
    <Formik initialValues={initialValues}  validationSchema={userSchema} onSubmit={handleSubmit}>
    <FormCastom>
      <LabelCastom>
        Name
        <InputCastom

        type="text"
        name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
            />
          <ErrorMessage name="name" />
        </LabelCastom>
        
        <LabelCastom>
          Number
          <InputCastom
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            />
          <ErrorMessage name="number" />
        </LabelCastom>
       <Button  type="submit"> Add contact </Button>
    </FormCastom>
    </Formik>
  </Container>
  );
  
};
   

FormAddContacts.PropTypes = {
  onGetValue: PropTypes.func.isRequired
}












// import React, { Component } from "react";
// const INITIAL_VALUE = {
//   contacts: [],
//   name: "",
// };

// class FormAddContacts extends Component {
//   state = {
//     ...INITIAL_VALUE,
//   };

//   handleChange = evt => {
//     const { name, value } = evt.target;
//     this.setState({ [name]:value });
//   };

//   handleSubmitChange = evt => {
//     evt.preventDefault();

   
//   }
//   render() {
//     const { name } = this.state;
//     return (
//       <form >
//         <label>
//           Name
//         <input
//                   onChange={this.handleChange}
//           type="text"
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//         />

//         </label>
//       <button  type="submit"> Add contact </button>
//       </form>
//     );
//   }
// }

// export default FormAddContacts;








