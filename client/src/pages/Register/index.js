import React, { useState } from "react";
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

  
  
  const handleOnClick = (values) => {
      Axios.post("http://localhost:3001/registro", {
        name: user,
        tel: tel,
        email: email,
        password: pwd,
        birthdate: birthdate,
        sex: sex,
      }).then((res) => {
        console.log(res); //exploit
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
      
        <Input
          name="name"
          type="text"
          onChange={(event) => setUser(event.target.value)}
          placeholder="Nome completo"
          required
        ></Input>
        <Input
          name="tel"
          type="tel"
          onChange={(event) => setTel(event.target.value)}
          placeholder="Celular"
          required
        ></Input>
        <Input
          name="email"
          type="text"
          onChange={(event) => setEmail(event.target.value)}
          placeholder="E-mail"
          required
        ></Input>
        <Input
          name="confemail"
          type="text"
          onChange={(event) => setConfEmail(event.target.value)}
          placeholder="Confirme seu e-mail"
          required
        ></Input>
        <Input
          name="password"
          type="text"
          onChange={(event) => setPwd(event.target.value)}
          placeholder="Senha"
          required
        ></Input>
        <Input
          name="confpassword"
          type="text"
          onChange={(event) => setConfPwd(event.target.value)}
          placeholder="Confirme sua senha"
          required
        ></Input>
        <Input
          name="birthdate"
          type="text"
          onChange={(event) => setBirthdate(event.target.value)}
          placeholder="Data de nascimento"
          required
        ></Input>
        <Input
          name="sex"
          type="text"
          onChange={(event) => setSex(event.target.value)}
          placeholder="Sexo"
          required
        ></Input>
        <Button onClick={handleOnClick} type="submit">
          Cadastrar <IconArrow />
        </Button>
        
      
    </Container>
  );
}
