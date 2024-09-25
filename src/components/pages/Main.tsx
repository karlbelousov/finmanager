import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Footer } from '../views/global/Footer';
import { css } from '../../styles/form.css';
import { InputComponent } from '../comps/Input';
import { useAppDispatch, useAppSelector} from '../../hooks';
import { changeViewType, changeValue, changeComment } from '../../store/reducers/view-type-for-main';
import { setData } from '../../store/reducers/data';

const {FormContainer, Button} = css;

export const Main = () => {
  const dispatch = useAppDispatch();
  const viewType = useAppSelector((state) => state.viewTypeMain.viewType);
  const viewValue = useAppSelector((state) => state.viewTypeMain.value);
  const viewComment = useAppSelector((state) => state.viewTypeMain.comment);

  const validation = () => {
    if (viewValue.length > 2 && viewType) {
      dispatch(changeViewType('доход'));
      dispatch(changeValue(''));
      dispatch(changeComment(''));
      dispatch(setData({
        value: viewValue,
        type: viewType,
        comment: viewComment
      }));

    } else {
      // eslint-disable-next-line no-console
      console.log('Ошибка валидации');
    }
  };

  let backgroundColorButton = '';

  if (viewValue.length > 3 && viewType.length > 3) {
    backgroundColorButton = 'rgb( 176, 243, 71 )';
  } else {
    backgroundColorButton = 'rgb( 229, 229, 229 )';
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeViewType(event.target.value));
  };

  const handleChangeValue = (value: string) => {
    dispatch(changeValue(value));
  };

  const handleChangeComment = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeComment((event.target.value)));
  };

  const handleChangeCommentValue = (comment: string) => {
    dispatch(changeComment(comment));
  };


  return (
    <>
      <FormContainer style={{alignItems: 'flex-start'}}>
        <InputComponent placeholder='Введите сумму транзакции' action={handleChangeValue} inputValue={viewValue} />
        <FormControl style={{marginTop: '9px', marginBottom: '12px'}}>
          <FormLabel id="demo-controlled-radio-buttons-group">Выберите тип транзакции</FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            style={{marginTop: '5px', marginLeft: '6px'}}
            value={viewType}
            onChange={handleChange}
          >
            <FormControlLabel value="доход" control={<Radio />} label="Доход" />
            <FormControlLabel value="расход" control={<Radio />} label="Расход" />
          </RadioGroup>
        </FormControl>
        {viewType === 'доход' && <InputComponent placeholder='Введите комментарий' action={handleChangeCommentValue} inputValue={viewComment} />}
        {viewType === 'расход' && (
          <FormControl style={{marginTop: '0px', marginBottom: '14px'}}>
            <FormLabel id="demo-controlled-radio-buttons-group">Выберите тип расходов</FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              style={{marginTop: '5px', marginLeft: '6px'}}
              value={viewComment}
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
