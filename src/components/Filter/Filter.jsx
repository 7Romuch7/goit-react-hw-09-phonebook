import { connect } from "react-redux";
import * as phonebookActions from '../../redux/phonebook';
import { phonebookSelectors } from '../../redux/phonebook';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';


const Filter = ({ value, onChangeFilter }) => {
  return (
    
    <div className={styles.containerFilter}>
      <label className={styles.titleFilter}>
        Find contact by name
        <input
          type="text"
          className={styles.inputFilter}
          name='filter'
          value={value}
          onChange={onChangeFilter}
        />
      </label>
      </div>
      
  );
}

Filter.defaultProps = {
  value: '',
  number: '',
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,

  onChangeFilter: PropTypes.func,
};

const mapStateToProps = state => ({
  value: phonebookSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChangeFilter: event => dispatch(phonebookActions.filterContact(event.target.value))
})


export default connect(mapStateToProps, mapDispatchToProps)(Filter);