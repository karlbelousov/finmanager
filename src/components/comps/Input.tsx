import { ChangeEvent} from 'react';
import { css } from '../../styles/form.css';

const {Input} = css;

type InputComponentProps = {
  placeholder?: string;
  action: (value: string) => void;
  inputValue: string;
}

export const InputComponent = ({placeholder, action, inputValue}: InputComponentProps) => (
  <Input
    type='text'
    value={inputValue}
    placeholder={placeholder}
    maxLength={100}
    onChange={(e: ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      action(newValue);
    }}
  />
);
