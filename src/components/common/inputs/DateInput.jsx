import React from "react";
import styled from "styled-components";
import { DatePicker, KeyboardDatePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import tw from "twin.macro";
import { ReactSVG } from "react-svg";

const StyledDateInput = styled.div`
  ${tw`w-full relative`}

  label {
    ${tw`text-lg ml-2 font-medium`}
  }

  input {
    ${tw`w-full mb-8 mt-2 px-5 py-3.5`}

    border: 1px solid  rgba(0,0,0, 0.15);
    border-radius: 20px;
    outline: none;
    border-color: ${(props) => props.errorMessage && "#c407077d"};
  }

  input:focus {
    border-color: rgba(0, 0, 0, 0.3);
  }

  p {
    ${tw`text-xs absolute bottom-3 ml-2`}

    color: #c40707;
    display: ${(props) => (props.errorMessage ? "block" : "none")};
  }

  svg {
    ${tw`absolute h-auto right-5 cursor-pointer`}
    bottom: 46px;
    width: 25px;
    fill: rgba(0, 0, 0, 0.15);
    stroke: rgba(0, 0, 0, 0.15);
  }
`;

const DateInput = ({
  label,
  name,
  placeholder,
  errorMessage,
  value,
  onChange,
  iconUrl,
}) => {
  return (
    <StyledDateInput>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <DatePicker
          id={name}
          name={name}
          variant="inline"
          label={label}
          value={value}
          onChange={onChange}
        />
        <p>{errorMessage}</p>
        {iconUrl && <ReactSVG src={iconUrl} />}
      </MuiPickersUtilsProvider>
    </StyledDateInput>
  );
};

export default DateInput;
