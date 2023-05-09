// , ErrorMessage
import { Formik, Form } from 'formik';
import {string} from 'yup';
// import PropTypes from 'prop-types';

let schema = {
    searchQuery: string().min(2).max(15)
};
const initialValue = {
    searchQuery: '',
};

export const Searchbar = () => {
    
     const handleSubmit = (values, { resetForm }) => {
    // onFormData(values);
         console.log(values);zcx
    resetForm();
    }
    
    return (
        <header class="searchbar">

            <Formik initialValue={initialValue} validationSchema={schema} onSubmit={handleSubmit}>
                <Form class="form">
                    <button type="submit" class="button">
                    <span class="button-label">Search</span>
                    </button>

                    <input
                    // class="input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    />
                </Form>
            </Formik>
 
</header>


    );
}