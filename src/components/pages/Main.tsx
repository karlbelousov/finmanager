import { useState } from 'react';
import { Header } from '../views/global/Header';
import { Footer } from '../views/global/Footer';
import { css } from '../../styles/form.css';
import { InputComponent } from '../comps/Input';

const {FormContainer, Button} = css;

export const Main = () => {
  const [value, setValue] = useState('');
  const [type, setType] = useState('');
  const [comment, setComment] = useState('');

  const validation = () => {
    if (value.length > 2 && type) {
      // eslint-disable-next-line no-console
      console.log('Валидация прошла успешно');
      setValue('');
      setType('');
      setComment('');
    } else {
      // eslint-disable-next-line no-console
      console.log('Ошибка валидации');
    }
  };

  let backgroundColorButton = '';

  if (value.length > 3 && type.length > 3) {
    backgroundColorButton = 'rgb( 176, 243, 71 )';
  } else {
    backgroundColorButton = 'rgb( 229, 229, 229 )';
  }

  return (
    <>
      <Header />
      <FormContainer>
        <InputComponent placeholder='Введите сумму транзакции' action={setValue} inputValue={value} />
        <InputComponent placeholder='Введите тип транзакции' action={setType} inputValue={type} />
        <InputComponent placeholder='Введите комментарий' action={setComment} inputValue={comment} />
        <Button
          backgroundColor={backgroundColorButton}
          onClick={validation}
        >
          Сохранить транзакцию
        </Button>
      </FormContainer>
      <Footer />
    </>
  );
};
