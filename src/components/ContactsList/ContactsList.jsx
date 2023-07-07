import PropTypes from 'prop-types';
import { Contact } from './Contact/Contact';
import { ContactsFilter } from './ContactsFilter/ContactsFilter';
import { Title, List } from './ContactsList.styled';

export const ContactsList = ({
  title,
  contacts,
  }) => {

  return (
    <div>
      <Title>{title}</Title>

      <ContactsFilter />

      <List>
        {contacts.map(item => {
          return <Contact values={item} key={item.id} />;
        })}
      </List>
    </div>
  );
};

ContactsList.propTypes = {
  title: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
};
