/** @jsxImportSource @emotion/react */

interface Props {
  className?: string;
  children: React.ReactNode;
}

const List: React.FC<Props> = (props) => {
  const { className, children } = props;

  return <ul className={className}>{children}</ul>;
};

export default List;
