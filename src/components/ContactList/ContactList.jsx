import { useSelector, useDispatch } from 'react-redux';
import { phonebookOperations, phonebookSelectors } from '../../redux/phonebook';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactListItem from '../ContactListItem';
import styles from './ContactList.module.css';

export default function ContactList() {

  const contacts = useSelector(phonebookSelectors.getVisibleContacts);
  const dispatch = useDispatch();
  const onRemoveContact = id => dispatch(phonebookOperations.removeContact(id));

  return (
    <CSSTransition in={contacts.length > 0} classNames={styles.contactsFilter} timeout={250} unmountOnExit>
      <TransitionGroup component="ul" className={styles.listContacts}>
          {contacts.map(({ id, name, number }) => (
              <CSSTransition key={id} timeout={250} classNames={styles}>
                <ContactListItem
                  id={id}  
                  name={name}
                  number={number}
                  onRemove={() => onRemoveContact(id)}
                  />
              </CSSTransition>
          ))}
        </TransitionGroup>
    </CSSTransition>
  )
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  onRemoveContact: PropTypes.func,
};