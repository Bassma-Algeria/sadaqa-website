import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';

// styles
import styles from '../../../../../styles/dashboard.module.scss';

// helpers
import { getSocialLinkInputData } from '../../../../../data/settingsInputsData';
import { getSocialLink } from '../../../../../utils/dashboardHelpers';

// components
import { BaseInput } from '../../../../common/inputs/Input';

const InputsList = ({ inputValues, setInputValues }) => {
  const { errors } = useSelector(state => state.UI);
  const [inputData, setInputData] = useState([]);

  useEffect(() => {
    setInputData(getSocialLinkInputData(errors));
  }, [errors]);

  return inputData.map((socialLink, index) => {
    return (
      <SocialLinkInput
        key={index}
        socialIcon={socialLink.socialIcon}
        inputData={socialLink}
        inputValues={inputValues}
        setInputValues={setInputValues}
      />
    );
  });
};

const SocialLinkInput = ({ socialIcon, inputData, inputValues, setInputValues }) => {
  const handleInputChange = e => {
    const platformName = e.target.name.split('Link')[0];

    const newSocialAccounts = inputValues.socialAccounts.map(socialAccount => {
      if (socialAccount.platform === platformName) {
        return {
          platform: socialAccount.platform,
          link: e.target.value,
        };
      }
      return { ...socialAccount };
    });

    setInputValues({ ...inputValues, socialAccounts: newSocialAccounts });
  };

  return (
    <div className={styles.socialLink}>
      <div className={styles.socialIconContainer}>
        <Image src={socialIcon} alt="social media icon" />
      </div>
      <BaseInput {...inputData}>
        <input
          id={inputData.name}
          name={inputData.name}
          placeholder={inputData.placeholder}
          type="text"
          onChange={handleInputChange}
          value={getSocialLink(inputData.name.split('Link')[0], inputValues.socialAccounts)}
        />
      </BaseInput>
    </div>
  );
};

export default InputsList;
