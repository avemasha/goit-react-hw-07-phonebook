import { useDispatch } from 'react-redux';
import { addContacts } from '../store/contactsSlice';
import { Formik } from 'formik';
import {Notify} from 'notiflix';
import { useSelector } from 'react-redux/es/hooks/useSelector';

import { Input, Forma, Label, Button, ErMessage } from './PhonebookForm.styled';


const formValues = {
  name: '',
  number: '',
};

export const PhonebookForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);


  const handleSubmit = (values, { resetForm }) => {
    const isContactExists = contacts.some(contact => contact.text.name.toLowerCase() === values.name.toLowerCase());
    
    if(isContactExists){
     return Notify.failure('Oops, this contact already exists.')
      
    }

    dispatch(addContacts(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={formValues}
     
      onSubmit={handleSubmit}
    >
      <Forma autoComplete="off">
        <Label htmlFor="name">
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErMessage name="name" component="p" />
        </Label>
        <Label htmlFor="number">
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErMessage name="number" component="p" />
        </Label>
        <Button type="submit">Add contact</Button>
      </Forma>
    </Formik>
  );
  

  
};




