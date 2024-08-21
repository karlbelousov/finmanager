import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Header } from '../views/global/Header';
import { Footer } from '../views/global/Footer';
import { css } from '../../styles/form.css';
import { InputComponent } from '../comps/Input';
import { useAppDispatch } from '../../hooks';
import { setStat } from '../../store/action';

const {FormContainer, Button} = css;

export const Main = () => {
  const [value, setValue] = useState('');
  const [type, setType] = useState('доход');
  const [comment, setComment] = useState('');
  const dispatch = useAppDispatch();

  const validation = () => {
    if (value.length > 2 && type) {
      const data = {
        value,
        type,
        comment
      };
      dispatch(setStat(data));
      setValue('');
      setType('доход');
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setType((event.target as HTMLInputElement).value);
  };

  const handleChangeComment = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment((event.target as HTMLInputElement).value);
  };

  return (
    <>
      <Header />
      <FormContainer style={{alignItems: 'flex-start'}}>
        <InputComponent placeholder='Введите сумму транзакции' action={setValue} inputValue={value} />
        <FormControl style={{marginTop: '9px', marginBottom: '12px'}}>
          <FormLabel id="demo-controlled-radio-buttons-group">Выберите тип транзакции</FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            style={{marginTop: '5px', marginLeft: '6px'}}
            value={type}
            onChange={handleChange}
          >
            <FormControlLabel value="доход" control={<Radio />} label="Доход" />
            <FormControlLabel value="расход" control={<Radio />} label="Расход" />
          </RadioGroup>
        </FormControl>
        {type === 'доход' && <InputComponent placeholder='Введите комментарий' action={setComment} inputValue={comment} />}
        {type === 'расход' && (
          <FormControl style={{marginTop: '0px', marginBottom: '14px'}}>
            <FormLabel id="demo-controlled-radio-buttons-group">Выберите тип расходов</FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              style={{marginTop: '5px', marginLeft: '6px'}}
              value={comment}
              onChange={handleChangeComment}
            >
              <FormControlLabel value="покупка продуктов" control={<Radio />} label="Покупка продуктов" />
              <FormControlLabel value="оплата счетов" control={<Radio />} label="Oплата счетов" />
              <FormControlLabel value="покупка одежды" control={<Radio />} label="Покупка одежды" />
              <FormControlLabel value="расходы на транспорт" control={<Radio />} label="Расходы на транспорт" />
              <FormControlLabel value="развлечения" control={<Radio />} label="Развлечения" />
              <FormControlLabel value="путешествия" control={<Radio />} label="Путешествия" />
            </RadioGroup>
          </FormControl> )}
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
