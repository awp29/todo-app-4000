/** @jsxImportSource @emotion/react */

interface Props {
  children: React.ReactNode;
}

const ListItem: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <li
      css={{
        display: "flex",
        padding: "5px 0px",
      }}
    >
      {children}
    </li>
  );
};

export default ListItem;
