/** @jsxImportSource @emotion/react */

import { ChangeEvent } from "react";

interface Props {
  checked: boolean;
  onChange: (e: ChangeEvent) => void;
}

const ListItemCheckBox: React.FC<Props> = (props) => {
  const { checked, onChange } = props;

  return (
    <input
      css={{ marginRight: "10px", minWidth: "14px" }}
      type="checkbox"
      checked={checked}
      onChange={onChange}
    />
  );
};

export default ListItemCheckBox;
