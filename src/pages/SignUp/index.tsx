import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../assets/Logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container, Background, Content, AnimatedContainer } from './style';
import getValidationErrors from '../../utils/getValidationErrors';
import { useToast } from '../../hooks/toast';
import api from '../../services/api';

interface FormDataSingUp {
  name: string;
  password: string;
  email: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(async (data: FormDataSingUp) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string().required('Usuário obrigatório!'),
        email: Yup.string()
          .required('E-mail obrigatório!')
          .email('Informe um email válido!'),
        password: Yup.string().min(6, 'Mínimo de 6 dígitos!'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await api.post('users', data);
      history.push('/');
      addToast({
        title: 'Usuário cadastrado com sucesso',
        message: 'Realize o logon!',
        type: 'success',
      });
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
  }, []);

  return (
    <>
      <Container>
        <Background />
        <Content>
          <AnimatedContainer>
            <img src={logo} alt="GoBarber" />
            <Form ref={formRef} onSubmit={handleSubmit}>
              <Input icon={FiUser} name="name" placeholder="Usuário" />
              <Input icon={FiMail} name="email" placeholder="E-mail" />
              <Input
                icon={FiLock}
                type="password"
                name="password"
                placeholder="Senha"
              />

              <Button type="submit">Cadastrar</Button>
            </Form>
            <Link to="/">
              <FiArrowLeft />
              Voltar para login
            </Link>
          </AnimatedContainer>
        </Content>
      </Container>
    </>
  );
};

export default SignUp;
