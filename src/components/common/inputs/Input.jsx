import React, { useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactSVG } from "react-svg";
import { useState } from "react";

const StyledInput = styled.div`
  ${tw`w-full relative`}

  label {
    ${tw`text-lg ml-2 font-medium`}
  }

  input {
    ${tw`w-full mb-8 mt-2 px-5 py-3.5`}

    border: 1px solid  rgba(0,0,0, 0.15);
    border-radius: 16px;
    outline: none;
    border-color: ${(props) => props.errorMessage && "#c407077d"};
  }

  input:focus {
    border-color: rgba(0, 0, 0, 0.3);
  }

  p {
    ${tw`absolute ml-2`}
    bottom: 10%;
    font-size: 0.75rem !important;
    color: #c40707;
    display: ${(props) => (props.errorMessage ? "block" : "none")};
  }

  svg {
    ${tw`absolute h-auto right-5 cursor-pointer`}
    bottom: 50%;
    transform: translateY(62%);
    width: 25px;
    fill: rgba(0, 0, 0, 0.15);
  }

  @media only screen and (max-width: 600px) {
    label {
      font-size: 16px;
    }
    input {
      ${tw`p-3 px-4 mb-5 mt-0`}
      font-size: 14px;
    }
    p {
      font-size: 10px !important;
      bottom: 3%;
    }
  }
`;

const Input = (props) => {
  const handleInputChange = (e) => {
    props.setInputValues({
      ...props.inputValues,
      [props.name]: e.target.value,
    });
  };

  return (
    <>
      {props.type !== "password" ? (
        <PlainTextInput {...props} handleInputChange={handleInputChange} />
      ) : (
        <PasswordInput {...props} handleInputChange={handleInputChange} />
      )}
    </>
  );
};

const BaseInput = (props) => {
  return (
    <StyledInput errorMessage={props.errorMessage?.[props.name]}>
      <label htmlFor={props.name}>{props.label}</label>
      {props.children}

      <p>{props.errorMessage?.[props.name]}</p>
      {props.iconUrl && (
        <ReactSVG onClick={props.handleIconClick} src={props.iconUrl} />
      )}
    </StyledInput>
  );
};

const PlainTextInput = (props) => {
  return (
    <BaseInput {...props}>
      <input
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
        type={props.type}
        value={props.inputValues[props.name]}
        onChange={props.handleInputChange}
      />
    </BaseInput>
  );
};

const PasswordInput = (props) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const { isSeePasswordIcon, setIsSeePasswordIcon } =
    props.changeSeePasswordIconState;

  const handleIconClick = () => {
    setIsPasswordVisible(!isPasswordVisible);
    setIsSeePasswordIcon(!isSeePasswordIcon);
  };

  const passwordTypeHandler = () => {
    if (isPasswordVisible) {
      return "text";
    } else {
      return "password";
    }
  };

  return (
    <BaseInput {...props} handleIconClick={handleIconClick}>
      <input
        id={props.name}
        name={props.name}
        placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
        type={passwordTypeHandler()}
        value={props.inputValues[props.name]}
        onChange={props.handleInputChange}
      />
    </BaseInput>
  );
};

export { BaseInput };
export default Input;
