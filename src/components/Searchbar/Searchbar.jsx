// , ErrorMessage
import { Formik, Field, Form} from 'formik';
// import { string } from 'yup';
// import { Header, FormCastom, Button, Span, } from './Searchbar.styled';
// import PropTypes from 'prop-types';

// let schema = {
//     searchQuery: string().min(2).max(15)
// };
let initialValue = {
    search:''
};

export const Searchbar = () => {
    
    const handleSubmit = (values, { resetForm }) => {
        // onFormData(values);
        console.log(values);
        resetForm();
    }
    
    return (
       <header > 
            <Formik initialValues={initialValue} onSubmit={handleSubmit}>
                <Form autoComplete="off">
                    <button type="submit" >
                        <span>Search</span>
                    </button>

                    <Field
                        
                        type="text"
                        name="searchQuery"
                     
                    />
                </Form>
            </Formik>
        </header>
        
    );
};