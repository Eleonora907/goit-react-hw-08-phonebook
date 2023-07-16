import { ContactItem } from 'components/contactItem/contactItem';
import { List } from './contactList.styled';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <List>
      {filteredContacts
        .map(contact => {
          return <ContactItem {...contact} key={contact.id} />;
        })
        .reverse()}
    </List>
  );
};
