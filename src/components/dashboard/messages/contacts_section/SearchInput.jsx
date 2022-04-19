import React from "react";
import { useDispatch } from "react-redux";

// styles
import styles from "../../../../styles/dashboard.module.scss";

// redux
import {
  getContacts,
  getSearchedContacts,
} from "../../../../redux/actions/messagesActions";

const SearchInput = ({ searchTerm, setSearchTerm }) => {
  const dispatch = useDispatch();

  const handleSearchInputChange = (e) => {
    const inputValue = e.target.value;

    if (inputValue === "") dispatch(getContacts());
    else dispatch(getSearchedContacts(inputValue));

    setSearchTerm(inputValue);
  };

  return (
    <input
      className={styles.searchInput}
      type="text"
      placeholder="Search"
      value={searchTerm}
      onChange={handleSearchInputChange}
    />
  );
};

export default SearchInput;
