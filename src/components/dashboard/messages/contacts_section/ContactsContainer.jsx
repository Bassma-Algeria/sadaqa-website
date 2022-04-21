import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { ReactSVG } from 'react-svg';

// styles
import styles from '../../../../styles/dashboard.module.scss';

// images and icons
import ContactsIcon from '../../../../../public/svg/contacts.svg';

// redux
import { addContact, getContacts } from '../../../../redux/actions/messagesActions';

// helpers
import {
  chatParticipantExistInContactsList,
  getContactsContainerHeight,
} from '../../../../utils/messagesHelpers';

// components
import Spinner from '../../../common/loaders/Spinner';
import Contact from './Contact';

const ContactsContainer = ({ contactsSection, searchTerm }) => {
  const {
    contacts: { isDataLoaded: isContactsLoaded },
  } = useSelector(state => state.messages);

  const dispatch = useDispatch();
  const contactsContainer = useRef(null);
  const [contactsContainerHeight, setContactsContainerHeight] = useState(0);

  useEffect(() => {
    dispatch(getContacts());
    setContactsContainerHeight(getContactsContainerHeight(contactsSection, contactsContainer));

    const resizeHandler = () => {
      setContactsContainerHeight(getContactsContainerHeight(contactsSection, contactsContainer));
    };
    window.addEventListener('resize', resizeHandler);

    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

  return (
    <div
      className={styles.contactsContainer}
      style={{ height: contactsContainerHeight }}
      ref={contactsContainer}
    >
      {!isContactsLoaded ? (
        <div style={{ height: '100%', width: '100%' }}>
          <Spinner style={{ fontSize: 8, top: '40%', color: '#000' }} />
        </div>
      ) : (
        <ContactsList searchTerm={searchTerm} />
      )}
    </div>
  );
};

const ContactsList = ({ searchTerm }) => {
  const {
    contacts: { data: contacts, isDataLoaded: isContactsLoaded },
  } = useSelector(state => state.messages);

  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      isContactsLoaded &&
      router.query.chatParticipantId &&
      !searchTerm &&
      !chatParticipantExistInContactsList(Number(router.query.chatParticipantId), contacts)
    ) {
      dispatch(addContact(router.query.chatParticipantId));
    }
  }, [router.query.chatParticipantId, isContactsLoaded]);

  return contacts.length === 0 ? (
    <div className={styles.noContacts}>
      <ReactSVG src={ContactsIcon.src} />
      <p>No contacts found.</p>
    </div>
  ) : (
    contacts.map((contact, index) => {
      return <Contact key={index} {...contact} />;
    })
  );
};

export default ContactsContainer;
