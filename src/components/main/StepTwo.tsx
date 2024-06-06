import Page from "../../enum/Page";

const StepTwo = ({
  username,
  email,
  password,
  setCurrentPage,
}: {
  username: string;
  email: string;
  password: string;
  setCurrentPage: Function;
}) => {
  return (
    <section className="step-two container">
      <h2>Results</h2>
      <div>
        <p>Name: {username}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
      </div>
      <button
        className="button"
        onClick={() => {
          setCurrentPage(Page.Form);
        }}
      >
        Edit your information
      </button>
    </section>
  );
};

export default StepTwo;
