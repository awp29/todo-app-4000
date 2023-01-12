/** @jsxImportSource @emotion/react */

import { FormEvent } from "react";

interface Props {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
}

const Form: React.FC<Props> = (props) => {
  const { onSubmit, children } = props;

  return (
    <form css={{ display: "flex" }} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
