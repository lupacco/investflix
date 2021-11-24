import styled from "styled-components";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 8px;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const Container = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  background-color: #00031e;
  justify-content: center;
  align-items: center;
  font-weight: bold;

  div {
      width: 100%;
      margin-bottom: 32px;
  }

`;

export const Input = styled.input`
  width: 50%;
  padding: 1em;
  margin: 5px 5px 0 5px;
  border-radius: 8px;
  border-style: hidden;
  color: #535353;
  font-size: 8px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  background-color: #0095ff;
  width: 50%;
  padding: .5em;
  margin: 5px;
  text-align: center;
  border-radius: 8px;
  border-style: hidden;
  font-size: 12px;
  font-weight: bolder;
`;

export const Logo = styled.img`
    margin: 25px;
    width: 100px;
    
`;

export const Header = styled.img`
    
    width: 150px;
    
`;

export const Footer = styled.img`
    margin-top: 150px;
    width: 50px;
    
`;


export const IconArrow = styled(AiOutlineArrowRight)`
  margin-left: 5px;
`;