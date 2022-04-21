import { wilayas } from './wilayas';

// images and icons
import hidePasswordIcon from '../../public/svg/see_password_icon.svg';
import seePasswordIcon from '../../public/svg/hide_password_icon.svg';
import facebookIcon from '../../public/svg/facebook_input.svg';
import instagramIcon from '../../public/svg/instagram_input_icon.svg';
import linkedinIcon from '../../public/svg/linkedin_input_icon.svg';
import whatsappIcon from '../../public/svg/whatsapp_input_icon.svg';
import viberIcon from '../../public/svg/viber_input_icon.svg';

export const getEditPersonalInformationInputData = (errors, choosenWilayaId) => [
  {
    label: 'Association Name*',
    name: 'associationName',
    placeholder: 'Full Association Name',
    type: 'text',
    errorMessage: errors,
  },
  {
    label: 'First name*',
    name: 'firstName',
    placeholder: 'John',
    type: 'text',
    errorMessage: errors,
  },
  {
    label: 'Last name*',
    name: 'lastName',
    placeholder: 'Smith',
    type: 'text',
    errorMessage: errors,
  },
  {
    label: 'Username*',
    name: 'username',
    placeholder: '@exmaple_',
    type: 'text',
    errorMessage: errors,
  },
  {
    label: 'Gender*',
    name: 'gender',
    placeholder: 'Tab to choose :',
    type: 'dropdown',
    errorMessage: errors,
    options: [
      {
        name: 'gender',
        value: 'Male',
      },
      {
        name: 'gender',
        value: 'Female',
      },
    ],
  },
  {
    label: 'Wilaya*',
    name: 'wilaya',
    placeholder: 'Tab to choose :',
    type: 'dropdown',
    errorMessage: errors,
    options: wilayas.map(wilaya => {
      return {
        name: 'wilaya',
        value: wilaya.id + ' - ' + wilaya.name.toLowerCase(),
      };
    }),
  },
  {
    label: 'Commune*',
    name: 'commun',
    placeholder: 'Tab to choose :',
    type: 'dropdown',
    errorMessage: errors,
    options: choosenWilayaId
      ? wilayas[choosenWilayaId - 1].communes.map(commune => {
          return {
            name: 'commun',
            value: commune,
          };
        })
      : [{ name: 'commun', value: '' }],
  },
  {
    label: 'Birthday*',
    name: 'birthday',
    placeholder: 'DD/MM/YYYY',
    type: 'date',
    errorMessage: errors,
  },
  {
    label: 'Phone Number*',
    name: 'phoneNum',
    placeholder: 'XX XX XX XX XX',
    type: 'text',
    errorMessage: errors,
  },
];

export const getSocialLinkInputData = errors => {
  return [
    {
      label: '',
      name: 'facebookLink',
      placeholder: 'Facebook link',
      type: 'text',
      errorMessage: errors,
      socialIcon: facebookIcon,
    },
    {
      label: '',
      name: 'instagramLink',
      placeholder: 'Instagram link',
      type: 'text',
      errorMessage: errors,
      socialIcon: instagramIcon,
    },
    {
      label: '',
      name: 'linkedinLink',
      placeholder: 'LinkedIn link',
      type: 'text',
      errorMessage: errors,
      socialIcon: linkedinIcon,
    },
    {
      label: '',
      name: 'whatsappLink',
      placeholder: 'Whatsapp link',
      type: 'text',
      errorMessage: errors,
      socialIcon: whatsappIcon,
    },
    {
      label: '',
      name: 'viberLink',
      placeholder: 'Viber link',
      type: 'text',
      errorMessage: errors,
      socialIcon: viberIcon,
    },
  ];
};

export const getEditCredentialsInputData = (
  errors,
  isSeeOldPasswordIcon,
  setIsSeeOldPasswordIcon,
  isSeeNewPasswordIcon,
  setIsSeeNewPasswordIcon,
  isSeeConfirmNewPasswordIcon,
  setIsSeeConfirmNewPasswordIcon,
) => [
  {
    label: 'Email Adress',
    name: 'email',
    placeholder: 'example@gmail.com',
    type: 'text',
    errorMessage: errors,
  },
  {
    label: 'Old Password',
    name: 'oldPassword',
    placeholder: '&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;',
    type: 'password',
    errorMessage: errors,
    iconUrl: isSeeOldPasswordIcon ? seePasswordIcon : hidePasswordIcon,
    changeSeePasswordIconState: {
      isSeePasswordIcon: isSeeOldPasswordIcon,
      setIsSeePasswordIcon: setIsSeeOldPasswordIcon,
    },
  },
  {
    label: 'New Password',
    name: 'newPassword',
    placeholder: '&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;',
    type: 'password',
    errorMessage: errors,
    iconUrl: isSeeNewPasswordIcon ? seePasswordIcon : hidePasswordIcon,
    changeSeePasswordIconState: {
      isSeePasswordIcon: isSeeNewPasswordIcon,
      setIsSeePasswordIcon: setIsSeeNewPasswordIcon,
    },
  },
  {
    label: 'Confirm New Password',
    name: 'confirmNewPassword',
    placeholder: '&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;',
    type: 'password',
    errorMessage: errors,
    iconUrl: isSeeConfirmNewPasswordIcon ? seePasswordIcon : hidePasswordIcon,
    changeSeePasswordIconState: {
      isSeePasswordIocn: isSeeConfirmNewPasswordIcon,
      setIsSeePasswordIcon: setIsSeeConfirmNewPasswordIcon,
    },
  },
];
