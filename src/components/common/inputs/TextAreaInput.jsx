import styled from "styled-components";
import tw from "twin.macro";

const StyledTextArea = styled.div`
  ${tw`w-full relative`}

  label {
    ${tw`text-lg ml-2 font-medium`}
  }

  textarea {
    ${tw`w-full mb-8 mt-2 px-5 py-3.5`}
    height: 150px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 15px;
    outline: none;
    border-color: ${(props) => props.errorMessage && "#c407077d"};
  }

  textarea:focus {
    border-color: rgba(0, 0, 0, 0.3);
  }

  p {
    ${tw`text-xs absolute bottom-3 ml-2`}

    color: #c40707;
    display: ${(props) => (props.errorMessage ? "block" : "none")};
  }

  @media only screen and (max-width: 600px) {
    label {
      font-size: 16px;
    }
    textarea {
      ${tw`p-3 px-4 mb-5 mt-0`}
      font-size: 14px;
    }
    p {
      font-size: 10px !important;
      bottom: 3%;
    }
  }
`;

const TextAreaInput = (props) => {
  const handleInputChange = (e) => {
    props.setInputValues({
      ...props.inputValues,
      [props.name]: e.target.value,
    });
  };

  return (
    <StyledTextArea errorMessage={props.errorMessage?.[props.name]}>
      <label htmlFor={props.name}>{props.label}</label>
      <textarea
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
        type={props.type}
        value={props.inputValues[props.name]}
        onChange={handleInputChange}
      />
      <p>{props.errorMessage?.[props.name]}</p>
    </StyledTextArea>
  );
};

export default TextAreaInput;
