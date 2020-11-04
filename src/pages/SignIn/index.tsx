import React, { useCallback, useRef } from 'react';
import { FiLock, FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.svg';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/auth';
import Input from '../../components/Input';
import { Container, Background, Content, AnimatedContainer } from './style';
import getValidationErrors from '../../utils/getValidationErrors';
import { useToast } from '../../hooks/toast';

interface SignInDataForm {
  email: string;
  password: string;
}
const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: SignInDataForm) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string().required('Usuário obrigatório!'),
          password: Yup.string().required('Senha obrigatória!'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({ email: data.email, password: data.password });
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const erros = getValidationErrors(error);
          formRef.current?.setErrors(erros);
        } else {
          addToast({
            title: 'Erro ao efetuar Login',
            message: `Não foi possível realizar login! ${error.status}`,
            type: 'error',
          });
        }
      }
    },
    [addToast, signIn],
  );

  return (
    <>
      <Container>
        <Content>
          <AnimatedContainer>
            <img src={logo} alt="GoBarber" />
            <Form ref={formRef} onSubmit={handleSubmit}>
              <h1>Bem vindo!</h1>
              <Input icon={FiMail} name="email" placeholder="E-mail" />
              <Input
                icon={FiLock}
                type="password"
                name="password"
                placeholder="Senha"
              />
              <Button type="submit">Entrar</Button>
              <a href="forgot">Esqueci minha senha</a>
            </Form>

            <Link to="SignUp">
              <FiMail />
              Criar conta
            </Link>
          </AnimatedContainer>
        </Content>
        <Background />
      </Container>
    </>
  );
};

export default SignIn;
