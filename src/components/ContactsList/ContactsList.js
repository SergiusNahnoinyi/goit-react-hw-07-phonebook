// import { useSelector, useDispatch } from 'react-redux';
// import { getVisibleContacts } from '../redux/phonebook-selectors';
// import * as actions from '../redux/phonebook-actions';
import { useDeleteContactMutation } from '../../services/contactsAPI';

import s from './Contacts.module.css';

export default function ContactsList({ contacts }) {
  // const contacts = useSelector(getVisibleContacts);
  // const dispatch = useDispatch();

  // const onDelete = id => dispatch(actions.deleteContact(id));
  const [deleteContact] = useDeleteContactMutation();

  return (
    <ul className={s.list}>
      {contacts &&
        contacts.map(contact => (
          <li key={contact.id} className={s.item}>
            {contact.name}: {contact.number}
            <button onClick={() => deleteContact(contact.id)}>Delete</button>
          </li>
        ))}
    </ul>
  );
}
