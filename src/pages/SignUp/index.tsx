import React from 'react';
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi';
import logo from '../../assets/Logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container, Background, Content } from './style';

const SignUp: React.FC = () => (
  <>
    <Container>
      <Background />
      <Content>
        <img src={logo} alt="GoBarber" />
        <form>
          <Input icon={FiUser} name="user" placeholder="Usuário" />
          <Input icon={FiMail} name="email" placeholder="E-mail" />
          <Input
            icon={FiLock}
            type="password"
            name="senha"
            placeholder="Senha"
          />
          <Button type="submit">Cadastrar</Button>
        </form>

        <a href="SigUp">
          <FiArrowLeft />
          Voltar para login
        </a>
      </Content>
    </Container>
  </>
);

export default SignUp;
