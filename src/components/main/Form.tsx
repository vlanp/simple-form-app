import { FormEvent } from "react";
import Page from "../../enum/Page";

const Form = ({
  username,
  setUsername,
  email,
  setEmail,
  password,
  setPassword,
  confirmedPassword,
  setConfirmedPassword,
  setCurrentPage,
}: {
  username: string;
  setUsername: Function;
  email: string;
  setEmail: Function;
  password: string;
  setPassword: Function;
  confirmedPassword: string;
  setConfirmedPassword: Function;
  setCurrentPage: Function;
}) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password.length < 8) {
      alert("Your password must be at least 8 characters long");
    } else if (confirmedPassword !== password) {
      alert("Your 2 passwords are not identical");
    } else {
      setCurrentPage(Page.StepTwo);
    }
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h2>Create account</h2>
      <div>
        <p>Name</p>
        <input
          type="text"
          name="username"
          placeholder="Jean Dupont"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          value={username}
        />
      </div>
      <div>
        <p>Email</p>
        <input
          type="email"
          name="email"
          placeholder="jeandupont@lereacteur.io"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          value={email}
        />
      </div>
      <div>
        <p>Password</p>
        <input
          type="password"
          name="password"
          placeholder="sqdSj2E234sdj"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          value={password}
        />
      </div>
      <div>
        <p>Confirm your password</p>
        <input
          type="password"
          name="confirm-password"
          placeholder="sqdSj2E234sdj"
          onChange={(event) => {
            setConfirmedPassword(event.target.value);
          }}
          value={confirmedPassword}
        />
      </div>
      <input className="form-button" type="submit" value="Register" />
    </form>
  );
};

export default Form;
