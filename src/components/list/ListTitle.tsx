/** @jsxImportSource @emotion/react */

interface Props {
  children: React.ReactNode;
}

const ListTitle: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <h2 css={{ fontWeight: "bold", marginTop: "10px", fontSize: "20px" }}>
      {children}
    </h2>
  );
};

export default ListTitle;
