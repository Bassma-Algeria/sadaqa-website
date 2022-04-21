import hidePasswordIcon from '../../public/svg/see_password_icon.svg';
import seePasswordIcon from '../../public/svg/hide_password_icon.svg';
import { wilayas } from './wilayas';

export const getLoginInputsData = (isSeePasswordIcon, setIsSeePasswordIcon, errors) => [
  {
    label: 'Email Adress',
    name: 'email',
    placeholder: 'email@example.com',
    type: 'text',
    errorMessage: errors,
  },
  {
    label: 'Password',
    name: 'password',
    placeholder: '&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;',
    type: 'password',
    errorMessage: errors,
    iconUrl: isSeePasswordIcon ? seePasswordIcon.src : hidePasswordIcon.src,
    changeSeePasswordIconState: {
      isSeePasswordIcon,
      setIsSeePasswordIcon,
    },
  },
];

export const signupInputData = (
  errors,
  choosenWilayaId,
  isSeePasswordIcon,
  setIsSeePasswordIcon,
  isSeeConfirmPasswordIcon,
  setIsSeeConfirmPasswordIcon,
) => {
  return {
    createNormalUserInputData: createNormalUserInputData(
      errors,
      choosenWilayaId,
      isSeePasswordIcon,
      setIsSeePasswordIcon,
      isSeeConfirmPasswordIcon,
      setIsSeeConfirmPasswordIcon,
    ),
    createAssociationInputData: createAssociationInputData(
      errors,
      choosenWilayaId,
      isSeePasswordIcon,
      setIsSeePasswordIcon,
      isSeeConfirmPasswordIcon,
      setIsSeeConfirmPasswordIcon,
    ),
  };
};

export const userTypesInputsData = [
  {
    text: 'I wanna donate and help others.',
    roleId: 1,
  },
  {
    text: 'I wanna found donations.',
    roleId: 1,
  },
  {
    text: 'I wanna donate and found donations.',
    roleId: 1,
  },
  {
    text: 'We are an Association.',
    roleId: 2,
  },
];

const createNormalUserInputData = (
  errors,
  choosenWilayaId,
  isSeePasswordIcon,
  setIsSeePasswordIcon,
  isSeeConfirmPasswordIcon,
  setIsSeeConfirmPasswordIcon,
) => [
  {
    label: 'First name',
    name: 'firstName',
    placeholder: 'John',
    type: 'text',
    errorMessage: errors,
  },
  {
    label: 'Last name',
    name: 'lastName',
    placeholder: 'Smith',
    type: 'text',
    errorMessage: errors,
  },
  {
    label: 'Gender',
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
    label: 'Birthday',
    name: 'birthday',
    placeholder: 'DD/MM/YYYY',
    type: 'date',
    errorMessage: errors,
  },
  {
    label: 'Wilaya',
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
    label: 'Commune',
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
    label: 'Phone Number',
    name: 'phoneNum',
    placeholder: 'XX XX XX XX XX',
    type: 'text',
    errorMessage: errors,
  },
  {
    label: 'Email Adress',
    name: 'email',
    placeholder: 'example@gmail.com',
    type: 'text',
    errorMessage: errors,
  },
  {
    label: 'Password',
    name: 'password',
    placeholder: '&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;',
    type: 'password',
    errorMessage: errors,
    iconUrl: isSeePasswordIcon ? seePasswordIcon.src : hidePasswordIcon.src,
    changeSeePasswordIconState: {
      isSeePasswordIcon,
      setIsSeePasswordIcon,
    },
  },
  {
    label: 'Confirm Password',
    name: 'confirmPassword',
    placeholder: '&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;',
    type: 'password',
    errorMessage: errors,
    iconUrl: isSeeConfirmPasswordIcon ? seePasswordIcon.src : hidePasswordIcon.src,
    changeSeePasswordIconState: {
      isSeePasswordIcon: isSeeConfirmPasswordIcon,
      setIsSeePasswordIcon: setIsSeeConfirmPasswordIcon,
    },
  },
];

const createAssociationInputData = (
  errors,
  choosenWilayaId,
  isSeePasswordIcon,
  setIsSeePasswordIcon,
  isSeeConfirmPasswordIcon,
  setIsSeeConfirmPasswordIcon,
) => [
  {
    label: 'Association Name',
    name: 'associationName',
    placeholder: 'Full Association Name',
    type: 'text',
    errorMessage: errors,
  },
  {
    label: 'Wilaya',
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
    label: 'Commune',
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
    label: 'Phone Number',
    name: 'phoneNum',
    placeholder: 'XX XX XX XX XX',
    type: 'text',
    errorMessage: errors,
  },
  {
    label: 'Email Adress',
    name: 'email',
    placeholder: 'example@gmail.com',
    type: 'text',
    errorMessage: errors,
  },
  {
    label: 'Password',
    name: 'password',
    placeholder: '&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;',
    type: 'password',
    errorMessage: errors,
    iconUrl: isSeePasswordIcon ? seePasswordIcon.src : hidePasswordIcon.src,
    changeSeePasswordIconState: {
      isSeePasswordIcon,
      setIsSeePasswordIcon,
    },
  },
  {
    label: 'Confirm Password',
    name: 'confirmPassword',
    placeholder: '&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;',
    type: 'password',
    errorMessage: errors,
    iconUrl: isSeeConfirmPasswordIcon ? seePasswordIcon.src : hidePasswordIcon.src,
    changeSeePasswordIconState: {
      isSeePasswordIcon: isSeeConfirmPasswordIcon,
      setIsSeePasswordIcon: setIsSeeConfirmPasswordIcon,
    },
  },
];
