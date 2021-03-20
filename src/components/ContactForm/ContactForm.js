import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { phonebookOperations } from '../../redux/phonebook';
import {phonebookSelectors} from '../../redux/phonebook';
import { CSSTransition } from 'react-transition-group';
import Notification from '../Notification';
import shortid from 'shortid';
import styles from './ContactForm.module.css';


export default function ContactForm() {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [error, setError] = useState(false);

  const contacts = useSelector(phonebookSelectors.getAllContacts);
  const dispatch = useDispatch();
  const onAddContact = useCallback(() =>
    dispatch(phonebookOperations.addContact({ name, number })),
  [name, number, dispatch]);
    
  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();
    
  const handleChange = event => {    
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      
      case 'number':
        setNumber(value);
        break;
      
      default:
        return;
    }
  };   
    
  const handleSubmit = event => {
      event.preventDefault();

      const double = contacts.filter(
        contact => contact.name === event.target.elements[0].value,
    );

    if (double.length) {
      setError(!error);
    
      return setTimeout(() => {
        setError(false)
      }, 2500);
    }

    clear();
    onAddContact(name, number);
  }
    
  const clear = () => {
    setName('');
    setNumber('');
  }
    
    return (
      <div className={styles.containerForm}>
        <CSSTransition
          in={error && Boolean(name)}
          classNames={styles}
          timeout={250}
          unmountOnExit
        >
        <Notification name={name} />
        </CSSTransition>
          <form className={styles.form} onSubmit={handleSubmit}>
                <label className={styles.labelForm} htmlFor={nameInputId}>
                    Name
                    <input className={styles.inputForm}
                        type="text"
                        name="name"
                        value={name}
                        placeholder=""
                        id={nameInputId}
                        onChange={handleChange}
                    />
                </label>
                <label className={styles.labelForm} htmlFor={numberInputId}>
                    Number
                    <input className={styles.inputForm}
                        type="number"
                        name="number"
                        value={number}
                        placeholder=""
                        id={numberInputId}
                        onChange={handleChange}
                    />
          </label>
          
            <button
              disabled={!name && !number < 1}
              className={styles.btnForm}
              type="submit">Add contact
            </button>
          </form>
      </div>
    )
}