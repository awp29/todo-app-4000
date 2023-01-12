/** @jsxImportSource @emotion/react */

interface Props {
  children: React.ReactNode;
}

const AppContainer: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <div
      css={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        maxWidth: "600px",
        padding: "20px",
        margin: "auto",
      }}
    >
      {children}
    </div>
  );
};

export default AppContainer;
