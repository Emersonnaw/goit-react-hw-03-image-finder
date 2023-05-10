// , ErrorMessage
import { Formik} from 'formik';
// import { string } from 'yup';
import { Header, FormCastom, Button, Span, FieldCastom} from './Searchbar.styled';
// import PropTypes from 'prop-types';

// let schema = {
//     searchQuery: string().min(2).max(15)
// };
let initialValue = {
    search:''
};

export const Searchbar = ({onFormData}) => {
    
    const handleSubmit = (values, { resetForm }) => {
         onFormData(values);
        console.log(values);
        resetForm();
    }
    
    return (
       <Header > 
            <Formik initialValues={initialValue} onSubmit={handleSubmit}>
                <FormCastom autoComplete="off">
                    <Button type="submit" >
                        <Span>Search</Span>
                    </Button>

                    <FieldCastom
                       
                        autoFocus
                        placeholder="Search images and photos"
                        type="text"
                        name="search"
                     
                    />
                </FormCastom>
            </Formik>
        </Header>
        
    );
};