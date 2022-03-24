import { useSelector } from 'react-redux';
// import { getVisibleContacts } from '../redux/phonebook-selectors';
// import * as actions from '../redux/phonebook-actions';
import { useDeleteContactMutation } from '../../services/contactsAPI';

import s from './Contacts.module.css';

export default function ContactsList({ contacts }) {
  const filterValue = useSelector(state => state.filter);
  // const dispatch = useDispatch();

  // const onDelete = id => dispatch(actions.deleteContact(id));
  const [deleteContact] = useDeleteContactMutation();

  return (
    <ul className={s.list}>
      {contacts &&
        contacts
          .filter(({ name }) => name.toLowerCase().includes(filterValue))
          .map(contact => (
            <li key={contact.id} className={s.item}>
              {contact.name}: {contact.number}
              <button onClick={() => deleteContact(contact.id)}>Delete</button>
            </li>
          ))}
    </ul>
  );
}
