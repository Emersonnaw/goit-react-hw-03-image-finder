
import { Formik} from 'formik';
import { ImSearch} from "react-icons/im";
import { Header, FormCastom, Button, Span, FieldCastom } from './Searchbar.styled';
import PropTypes from 'prop-types';

let initialValue = {
    search:''
};

export const Searchbar = ({onFormData}) => {
    const handleSubmit = (values, { resetForm }) => {
        onFormData(values);
        resetForm();
    }
    
    return (
       <Header > 
            <Formik initialValues={initialValue} onSubmit={handleSubmit}>
                <FormCastom autoComplete="off">
                    <Button type="submit" >
                        <ImSearch/>
                        <Span>Search</Span>
                    </Button>

                    <FieldCastom
                        autoFocus
                        type="text"
                        name="search"
                        placeholder="Search images and photos"
                    />
                </FormCastom>
            </Formik>
        </Header>
        
    );
};

Searchbar.propTypes = {
    onFormData: PropTypes.func.isRequired,

};