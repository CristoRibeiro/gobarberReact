import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from './style';

interface PropsInput extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<PropsInput> = ({ name, icon: Icon, ...rest }) => {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input {...rest} name={name} />
    </Container>
  );
};

export default Input;
