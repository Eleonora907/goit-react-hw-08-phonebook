import { ContactForm } from "components/contactForm/contactForm";
import { ContactList } from "components/contactList/contactList";
import { EditForm } from "components/editForm/editForm";
import { Filter } from "components/filter/filter";
import { Loader } from "components/loader/loader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContactsThunk } from "redux/operations";
import { selectContacts, selectError, selectIsEditing, selectLoading, selectUser } from "redux/selectors";

const PhoneBookPage = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const user = useSelector(selectUser);
  const isEditing = useSelector(selectIsEditing);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const countTotalContacts = () => {
    return contacts.length;
  };

  const total = countTotalContacts();

  return (
    <div>
      <h1>{user.name}'s Phonebook</h1>
      {isEditing ? <EditForm /> : <ContactForm />}
      <h2>Contacts</h2>

      {total === 0 ? (
        'There is no contacts in your phonebook!'
      ) : (
        <>
          <Filter />
          <ContactList />
        </>
      )}
      {isLoading && !error && isEditing && <Loader />}
    </div>
  );
};

export default PhoneBookPage;