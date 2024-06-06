import Page from "../enum/Page";
import Form from "./main/Form";
import StepTwo from "./main/StepTwo";
import { useState } from "react";

const Main = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [currentPage, setCurrentPage] = useState(Page.Form);

  return (
    <main>
      {currentPage === Page.Form && (
        <Form
          username={username}
          setUsername={setUsername}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          confirmedPassword={confirmedPassword}
          setConfirmedPassword={setConfirmedPassword}
          setCurrentPage={setCurrentPage}
        />
      )}
      {currentPage === Page.StepTwo && (
        <StepTwo
          username={username}
          email={email}
          password={password}
          setCurrentPage={setCurrentPage}
        />
      )}
    </main>
  );
};

export default Main;
