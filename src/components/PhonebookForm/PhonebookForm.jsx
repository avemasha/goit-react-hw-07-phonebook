import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from '../store/operations';
import { Formik } from 'formik';
import { Notify } from 'notiflix';
import { Input, Forma, Label, Button, ErMessage } from './PhonebookForm.styled';
import { selectContacts } from 'components/store/selectors';

const formValues = {
  name: '',
  phone: '',
};

export const PhonebookForm = () => {
  const dispatch = useDispatch();
const contacts = useSelector(selectContacts);

const isContactExists = (newContact) => {
  return contacts.some(
    (contact) =>
      contact.name.toLowerCase() === newContact.name.toLowerCase() ||
      contact.phone === newContact.phone
  );
};

  const handleSubmit = (values, { resetForm }) => {
    if (isContactExists(values)) {
      Notify.warning
      ('Contact with the same name or phone number already exists!');
    } else {
      dispatch(addContacts(values));
    }

    resetForm();
  };

  return (
    <Formik initialValues={formValues} onSubmit={handleSubmit}>
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
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErMessage name="phone" component="p" />
        </Label>
        <Button type="submit">Add contact</Button>
      </Forma>
    </Formik>
  );
};
