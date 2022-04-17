import { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { detect } from "detect-browser";

// components
import { BaseInput } from "./Input";

// images and icons
import dropdown from "../../../public/svg/dropdown_icon.svg";

const StyledDropdown = styled.div`
  ${tw`relative`}
  flex: 1;

  .inputContainer {
    ${tw`w-full bg-white flex items-center mb-8 mt-2 px-5 py-3.5 cursor-pointer capitalize`}
    border: 1px solid rgba(0,0,0, 0.15);
    border-radius: 16px;
    border-color: ${(props) => props.errorMessage && "#c407077d"};
    font-size: 16px !important;

    &:hover {
      border-color: rgba(0, 0, 0, 0.3);
    }

    p.value {
      position: static;
      display: block;
      font-size: 16px !important;
      margin: 0;
      color: rgb(0, 0, 0, 0.2);

      &.active {
        color: black;
      }
    }
  }

  svg {
    width: 18px !important ;
    bottom: 18px !important;
    transform: unset !important;
  }

  p {
    top: 100%;
  }

  .options {
    ${tw`absolute w-full bg-white py-3 pl-2 overflow-y-scroll  `}
    z-index: 2;
    max-height: 400px;
    border-radius: 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    top: 110%;

    .option {
      ${tw`w-full h-full flex items-center gap-4 w-full px-4 py-3 cursor-pointer capitalize`}
      font-size: 16px;
      transition: all 0.2s;
      border-radius: 12px;
      &:hover {
        background-color: #edf6f2;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    .inputContainer {
      ${tw`p-3 px-4 mb-5 mt-0`}
      font-size: 14px !important;

      p.value {
        font-size: 14px !important;
      }
    }

    svg {
      bottom: 15px !important;
      width: 14px !important;
    }

    .options {
      border-radius: 15px;
      padding: 0.5rem;

      option {
        padding: 0.5rem !important;
        border-radius: 8px;
      }
    }
  }
`;

const Dropdown = (props) => {
  const [valueSelected, setValueSelected] = useState(
    props.inputValues[props.name]
  );

  return /safari|ios/.test(detect().name) ? (
    <DefaultDropdown
      {...props}
      valueSelected={valueSelected}
      setValueSelected={setValueSelected}
    />
  ) : (
    <CustomDropdown
      {...props}
      valueSelected={valueSelected}
      setValueSelected={setValueSelected}
    />
  );
};

const DefaultDropdown = (props) => {
  return (
    <StyledDropdown errorMessage={props.errorMessage?.[props.name]}>
      <BaseInput {...props}>
        <select
          value={props.valueSelected}
          onChange={(e) => e.preventDefault()}
          className="inputContainer"
        >
          <option value="" disabled selected hidden>
            Tap to Choose
          </option>
          <OptionsList {...props} />
        </select>
      </BaseInput>
    </StyledDropdown>
  );
};

const CustomDropdown = (props) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  return (
    <StyledDropdown
      onClick={() => setIsOptionsOpen(true)}
      errorMessage={props.errorMessage?.[props.name]}
    >
      <BaseInput {...props} iconUrl={dropdown.src}>
        <div className="inputContainer">
          <p className={`value ${props.valueSelected ? "active" : ""}`}>
            {props.valueSelected || "Tap To Choose :"}
          </p>
        </div>
      </BaseInput>

      {isOptionsOpen && (
        <Options
          {...props}
          setValueSelected={props.setValueSelected}
          closeOptions={() => setIsOptionsOpen(false)}
        />
      )}
    </StyledDropdown>
  );
};

const Options = (props) => {
  useEffect(() => {
    const handleClick = () => props.closeOptions();
    window.addEventListener("click", handleClick);

    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="options">
      <OptionsList {...props} />
    </div>
  );
};

const OptionsList = (props) => {
  const handleOptionClick = (e) => {
    if (e.target.attributes.disabled) return;

    let name = e.target.attributes.name.value;
    let value = e.target.value;

    props.setValueSelected(value);

    if (name === "typeId") value = Number(value.split(" -")[0].trim());

    props.setInputValues({
      ...props.inputValues,
      [name]: value,
    });
  };

  return props.options.map((option, index) => {
    return (
      <option
        key={index}
        name={option.name}
        value={option.value}
        disabled={option.disabled}
        className="option"
        onClick={handleOptionClick}
        data-icon={option.icon}
      >
        {option.value}
      </option>
    );
  });
};

export default Dropdown;
