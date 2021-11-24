import React, { useState, useContext } from "react";
import { createGlobalStyle } from "styled-components";
import {
  Container,
  Input,
  Button,
  Logo,
  IconArrow,
  Footer,
  Header,
  StyledLink,
} from "./style";
import logo from "../../images/invest-logo.png";
import banner from "../../images/invest-banner.png";
// import { context } from "../../context";
// import { useHistory } from "react-router";
// import { Link } from "react-router-dom";

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

export default function Login() {
  // const ctx = useContext(context);
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("")
  // const history = useHistory();
  // const handleOnClick = (route) => history.push(route);

  //   async function getUserData() {
  //     try {
  //       const response = await client.get(`/${input}`);
  //       const repos = await client.get(`/${input}/repos`);
  //       const followers = await client.get(`/${input}/followers`);
  //       const following = await client.get(`/${input}/following`);

  //       ctx.setUser(response.data);
  //       console.log({followers})
  //       ctx.setRepos(repos.data);
  //       ctx.setFollowers(followers.data);
  //       ctx.setFollowing(following.data);
  //       handleOnClick("/home");
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }

  return (
    <Container>
      <GlobalStyle />
      <div>
        <Header src={banner} />
      </div>
      <Logo src={logo} />
      <Input
        value={user}
        onChange={(event) => setUser(event.target.value)}
        placeholder="Usuário"
        required
      ></Input>
      <Input
        value={pwd}
        onChange={(event) => setPwd(event.target.value)}
        placeholder="Senha"
        type="password"
        required
      ></Input>
      <Button type="submit">
        ENTRAR <IconArrow />
      </Button>
      <StyledLink to="/registro">Cadastre-se</StyledLink>
      <Footer src={banner} />
      <footer>Copyrigth &copy;</footer>
    </Container>
  );
}
