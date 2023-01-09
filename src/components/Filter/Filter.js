import { Container } from 'components/Filter/Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import { getFilter } from 'redux/filter/selectors';
// import { getContacts } from 'redux/contacts/selectors';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const handleOnChange = e => dispatch(setFilter(e.target.value));
  // const contacts = useSelector(getContacts);

  return (
    <Container>
      <div>
        <label htmlFor={filter}>Find contacts by name</label>
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={handleOnChange}
        />
      </div>
    </Container>
  );
}
