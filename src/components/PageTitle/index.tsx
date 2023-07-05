import "./styles.css";

type Texts = {
  title: string;
  subtitle: string;
  error: undefined;
};

const PageTitle = (props: Texts) => {
  return (
    <div className={`PageTitle ${props.error ? "error" : ""}`}>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
};

export { PageTitle };
