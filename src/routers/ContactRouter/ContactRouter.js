import { Component } from 'react';
import { connect } from "react-redux";
import Title from '../../components/Title';
import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
import Filter from '../../components/Filter';
import Loader from '../../components/Loader';
import { phonebookOperations, phonebookSelectors } from '../../redux/phonebook';
import styles from './ContactRouter.module.css';

class ContactRouter extends Component {

  componentDidMount() {
    this.props.fetchContact();
  }

  render() {
    return (
      <div className={styles.wrapperPhonebook} >
        <Title title='Phonebook'/>
        <ContactForm />
        <Filter />
        {this.props.isLoadingContacts && <Loader/>}
        <ContactList />
     </div>
    )
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: phonebookSelectors.getLoading(state)
})

const mapDispatchToProps = dispatch => ({
fetchContact: () => dispatch(phonebookOperations.fetchContact())
})

export default connect( mapStateToProps, mapDispatchToProps )(ContactRouter);
