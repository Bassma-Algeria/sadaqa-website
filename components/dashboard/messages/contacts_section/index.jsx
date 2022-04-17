import React, { useRef, useState } from "react";

// styles
import styles from "../../../../styles/dashboard.module.scss";

// components
import SearchInput from "./SearchInput";
import ContactsContainer from "./ContactsContainer";

const ContactsSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const contactsSection = useRef(null);

  return (
    <section className={styles.contactsSection} ref={contactsSection}>
      <h1>Messages</h1>
      <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ContactsContainer
        contactsSection={contactsSection}
        searchTerm={searchTerm}
      />
    </section>
  );
};
export default ContactsSection;
