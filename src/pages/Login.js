import { useState } from "react";
import styled from "styled-components";
import { PageLayout, Input, PasswordInput } from "../components/common";

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background-color: white;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  color: black;
  border-radius: 4px;
`;

export const Login = () => {
  const [formFields, setFormFields] = useState({ username: "", password: "" });

  const handlerInputChange = (e) => {
    //e.persist(); Doc
    //A partir da v17, e.persist() não faz nada porque o SyntheticEvent não é mais agrupado.
    setFormFields((prevState) => ({
      ...prevState,
      //Aqui ela ta pegando o nome do input e passando o valor dele diretamente
      //O nome é o msm do input
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <PageLayout>
      <h1>Login</h1>
      <Form>
        <Input
          placeholder="Username"
          name="username"
          onChange={handlerInputChange}
          value={formFields.username}
          type="text"
        />
        <PasswordInput
          //SAFADOS
          name="password"
          onChange={handlerInputChange}
          value={formFields.password}
        />
      </Form>
    </PageLayout>
  );
};
