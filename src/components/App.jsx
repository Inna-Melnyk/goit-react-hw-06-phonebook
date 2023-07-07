import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'Redux/selectors';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Container } from './App.styled';

// const CONTACT_LS_KEY = 'saved-contacts';

// const useLocalStorage = (key, defaultValue) => {
//   const [state, setState] = useState(
//     () => {
//       return JSON.parse(localStorage.getItem(key)) ?? defaultValue
//     }
//   );

//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(state));
//   }, [key, state]);

//   return [state, setState];
// };

export const App = () => {
  const contacts = useSelector(getContacts);

  const filter = useSelector(getFilter);

  const normalizedFilter = filter.toLowerCase();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <Container>
      <ContactForm title={'phonebook'} />

      <ContactsList
        title={'contacts'}
        contacts={filteredContacts}
      />
    </Container>
  );
};
