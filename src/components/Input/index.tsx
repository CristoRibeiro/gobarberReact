import React, {
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { IconBaseProps } from 'react-icons';

import { useField } from '@unform/core';
import { FiAlertCircle } from 'react-icons/fi';
import { Container, Error } from './style';

interface PropsInput extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<PropsInput> = ({ name, icon: Icon, ...rest }) => {
  const refInput = useRef<HTMLInputElement>(null);

  const [isFocussed, setIsFocussed] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { defaultValue, fieldName, registerField, error } = useField(name);

  const handleOnFocus = useCallback(() => {
    setIsFocussed(true);
  }, []);

  const handleOnBlur = useCallback(() => {
    setIsFocussed(false);
    setIsFilled(!!refInput.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: refInput.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container isErrored={!!error} isFocussed={isFocussed} isFilled={isFilled}>
      {Icon && <Icon size={20} />}
      <input
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        defaultValue={defaultValue}
        ref={refInput}
        {...rest}
      />
      {error && (
        <Error title={error}>
          <FiAlertCircle size={20} />
        </Error>
      )}
    </Container>
  );
};

export default Input;
