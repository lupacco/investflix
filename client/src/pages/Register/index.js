import React, { useState, useContext } from "react";
import { createGlobalStyle } from "styled-components";
import {
  Container,
  Input,
  Button,
  Logo,
  IconArrow,
  Header,
  StyledLink,
} from "./style";
import logo from "../../images/invest-logo.png";
import banner from "../../images/invest-banner.png";
// import { context } from "../../context";
import { useHistory } from "react-router";
import Axios from "axios";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        font-family: Helvetica, sans-serif;
    }
    
    body{
        background: #00031e;
    }
    footer {
        color: #1c1c1c;
    }
`;

export default function Register() {
  // const ctx = useContext(context);
  const [user, setUser] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [confEmail, setConfEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [confPwd, setConfPwd] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [sex, setSex] = useState("");
  const history = useHistory();
  const handleOnClick = (values) => {
    Axios.post("localhost:3001/registro", {
      name: values.user,
      tel: values.tel,
      email: values.email,
      password: values.pwd,
      birthdate: values.birthdate,
      sex: values.sex,
    }).then((res) => {
      console.log(res);
    });
    // history.push('#')
  };

  return (
    <Container>
      <GlobalStyle />
      <div>
        <StyledLink to="/">
          <Header src={banner} />
        </StyledLink>
      </div>
      <Logo src={logo} />
      <form onSubmit={handleOnClick}>
        <Input
          value={user}
          onChange={(event) => setUser(event.target.value)}
          placeholder="Nome completo"
          required
        ></Input>
        <Input
          value={tel}
          onChange={(event) => setTel(event.target.value)}
          placeholder="Celular"
          type="tel"
          required
        ></Input>
        <Input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="E-mail"
          required
        ></Input>
        <Input
          value={confEmail}
          onChange={(event) => setConfEmail(event.target.value)}
          placeholder="Confirme seu e-mail"
          required
        ></Input>
        <Input
          value={pwd}
          onChange={(event) => setPwd(event.target.value)}
          placeholder="Senha"
          required
        ></Input>
        <Input
          value={confPwd}
          onChange={(event) => setConfPwd(event.target.value)}
          placeholder="Confirme sua senha"
          required
        ></Input>
        <Input
          value={birthdate}
          onChange={(event) => setBirthdate(event.target.value)}
          placeholder="Data de nascimento"
          required
        ></Input>
        <Input
          value={sex}
          onChange={(event) => setSex(event.target.value)}
          placeholder="Sexo"
          required
        ></Input>
        <Button type="submit">
          Cadastrar <IconArrow />
        </Button>
      </form>
    </Container>
  );
}
