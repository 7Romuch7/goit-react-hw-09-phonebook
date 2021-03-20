import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Title from '../../components/Title';
import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
import Filter from '../../components/Filter';
import Loader from '../../components/Loader';
import { phonebookOperations, phonebookSelectors } from '../../redux/phonebook';
import styles from './ContactRouter.module.css';

export default function ContactRouter() {

  const isLoadingContacts = useSelector(phonebookSelectors.getLoading);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(phonebookOperations.fetchContact());
  }, [dispatch]);

    return (
      <div className={styles.wrapperPhonebook} >
        <Title title='Phonebook'/>
        <ContactForm />
        <Filter />
        {isLoadingContacts && <Loader/>}
        <ContactList />
     </div>
    )
}
