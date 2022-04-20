import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';

// styles
import styles from '../../../../../styles/dashboard.module.scss';

// helpers
import { getDefaultProfilePic, getProfilePic } from '../../../../../utils/usersHelpers';

// components
import Button from '../../../../common/buttons/Button';

const ProfileImageInput = ({ inputValues, setInputValues }) => {
  const {
    profileInfo: {
      generalInfo: { gender },
      profilePic: { link: profilePic },
    },
  } = useSelector(state => state.authUser);

  const fileInput = useRef(null);

  const [picToShow, setPicToShow] = useState(getProfilePic(profilePic, gender).src);
  const [isFileChoosenIsImage, setIsFileChoosenIsImage] = useState(true);

  const handleFileInputChange = e => {
    const file = e.target.files[0];
    setIsFileChoosenIsImage(true);

    if (!file?.type.includes('image')) setIsFileChoosenIsImage(false);
    else {
      setInputValues({ ...inputValues, profilePic: file });
      setPicToShow(URL.createObjectURL(file));
    }
  };

  const handleDeleteBtnClick = () => {
    setInputValues({ ...inputValues, profilePic: null });
    setPicToShow(getDefaultProfilePic(gender).src);
  };

  return (
    <div className="relative">
      <p className={styles.label}>Profile Picture</p>

      <div className={styles.changeProfilePicContainer}>
        <div className={styles.imgContainer}>
          <img src={picToShow} alt="profilePic" onLoad={e => URL.revokeObjectURL(e.target.src)} />
        </div>

        <Button type="button" onClick={() => fileInput.current.click()} primary size="sm">
          Upload New picture
        </Button>

        <Button
          type="button"
          primary
          disabled={picToShow === getDefaultProfilePic(gender)}
          size="sm"
          onClick={handleDeleteBtnClick}
          className={styles.discardButton}
        >
          Delete
        </Button>

        <input
          type="file"
          name="profilePic"
          accept="image/*"
          multiple={false}
          ref={fileInput}
          onChange={handleFileInputChange}
          style={{ display: 'none' }}
        />
      </div>

      {!isFileChoosenIsImage && (
        <p className="text-sm absolute bottom-0" style={{ color: '#c40707', left: 162 }}>
          Only images accepted
        </p>
      )}
    </div>
  );
};
export default ProfileImageInput;
