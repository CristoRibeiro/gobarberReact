import React from 'react';
import { FiLock, FiMail } from 'react-icons/fi';
import logo from '../../assets/Logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container, Background, Content } from './style';

const SignIn: React.FC = () => (
  <>
    <Container>
      <Content>
        <img src={logo} alt="GoBarber" />
        <form>
          <h1>Bem vindo!</h1>
          <Input icon={FiMail} name="email" placeholder="E-mail" />
          <Input
            icon={FiLock}
            type="password"
            name="senha"
            placeholder="Senha"
          />
          <Button type="submit">Entrar</Button>
          <a href="forgot">Esqueci minha senha</a>
        </form>

        <a href="SigUp">
          <FiMail />
          Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  </>
);

export default SignIn;
