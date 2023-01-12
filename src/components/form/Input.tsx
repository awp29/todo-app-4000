/** @jsxImportSource @emotion/react */

import { ChangeEvent } from "react";

interface Props {
  className?: string;
  value: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = (props) => {
  const { className, value, placeholder, onChange } = props;

  return (
    <input
      className={className}
      css={{
        height: "40px",
        width: "100%",
        padding: "8px 12px",
        backgroundColor: "#e4e2df",
        borderRadius: "0.5rem",
        border: "1px solid",
        borderColor: "transparent",
        fontSize: "1rem",
        "&::placeholder": {
          color: "#666666",
        },
        "&:hover": {
          backgroundColor: "#d8d5d1",
        },
        "&:focus": {
          outline: "none",
          borderColor: "rgba(22,22,22,.15)",
        },
      }}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
