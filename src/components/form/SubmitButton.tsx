/** @jsxImportSource @emotion/react */

interface Props {
  disabled?: boolean;
  children: React.ReactNode;
}

const SubmitButton: React.FC<Props> = (props) => {
  const { disabled, children } = props;

  return (
    <button
      css={{
        cursor: !disabled ? "pointer" : "inherit",
        backgroundColor: "#161616",
        borderRadius: "0.5rem",
        border: "none",
        height: "40px",
        color: "white",
        fontSize: "1rem",
        fontWeight: "bold",
        padding: "0.75rem 1.5rem",
        opacity: !disabled ? 1 : 0.3,
        "&:hover": {
          backgroundColor: !disabled ? "#2e2e2e" : "#161616",
        },
      }}
      type="submit"
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default SubmitButton;
