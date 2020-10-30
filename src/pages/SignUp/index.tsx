import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import logo from '../../assets/Logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container, Background, Content, Bola } from './style';
import getValidationErros from '../../utils/getValidationErros';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: Object) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        user: Yup.string().required('Usuário obrigatório!'),
        email: Yup.string()
          .required('E-mail obrigatório!')
          .email('Informe um email válido!'),
        password: Yup.string().min(6, 'Mínimo de 6 dígitos!'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (error) {
      const erros = getValidationErros(error);
      formRef.current?.setErrors(erros);
    }
  }, []);

  return (
    <>
      <Container>
        <Background />
        <Content>
          <img src={logo} alt="GoBarber" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input icon={FiUser} name="user" placeholder="Usuário" />
            <Input icon={FiMail} name="email" placeholder="E-mail" />
            <Input
              icon={FiLock}
              type="password"
              name="password"
              placeholder="Senha"
            />

            <Button type="submit">Cadastrar</Button>
          </Form>
          <Bola>
            <div />
          </Bola>

          <a href="SigUp">
            <FiArrowLeft />
            Voltar para login
          </a>
        </Content>
      </Container>
    </>
  );
};

export default SignUp;
