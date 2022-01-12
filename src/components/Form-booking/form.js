import React, { useState } from 'react';
import { Box, Button, Card, CardContent, Grid, Typography } from '@material-ui/core';
import { Field, Form, Formik, FormikConfig, FormikValues } from 'formik';
import { TextField } from 'formik-material-ui';
import { RadioGroup } from 'formik-material-ui';
import { FormGroup } from '@material-ui/core';
import * as Yup from 'yup';
import { FormControl } from '@material-ui/core';
import { FormLabel } from '@mui/material';
import { CheckboxWithLabel } from 'formik-material-ui';
import DropzoneComponent from './file-upload';
import UniqueQR from './unique-qr';
import Pagination from './pagination';

const options = [
  {
    label: "S",
    value: "S"
  },
  {
    label: "L",
    value: "L"
  },
  {
    label: "XXL",
    value: "XXL"
  },
  {
    label: "M",
    value: "M"
  },
  {
    label: "XL",
    value: "XL"
  }
];

export default function BookingForm() {
  return (
    <Card>
      <CardContent>
        <FormikStepper
          initialValues={{
            print: '',
            name: '',
            email: '',
            phone: '',
            instagram: '',
            country: '',
            region: '',
            city: '',
            street: '',
            houseNum: '',
            flatNum: '',
            size: '',
            image: null
          }}
          onSubmit={(values) => {
            console.log(values)
          }}
        >
          <div>
            <p className='form__text'>Ваше Имя Фамилия для печати на футболке</p>
            <Box paddingBottom={2}>
              <Field fullWidth name='print' component={TextField} label={'Имя Фамилия'} />
            </Box>
          </div>
          <FormikStep
            validationSchema={Yup.object({
              email: Yup.string()
                .email()
                .required('Некорректно введен e-mail'),
              phone: Yup.string()
                .min(9, 'Must be at lest 9 characters')
                .required('Номер телефона является обязательным'),
              instagram: Yup.string()
                .required('Укажите instagram')
            })}
          >
            <p className='form__text'>Заполните информацию , для
              связи получения товара</p>
            <Box paddingBottom={2}>
              <Field fullWidth name='name' component={TextField} label={'ФИО'} />
            </Box>
            <Box paddingBottom={2}>
              <Field fullWidth name='email' component={TextField} label={'E-mail*'} />
            </Box>
            <Box paddingBottom={2}>
              <Field fullWidth name='phone' component={TextField} label={'Телефон*'} />
            </Box>
            <Box paddingBottom={2}>
              <Field fullWidth name='instagram' component={TextField} label={'Instagram*'} />
            </Box>
            <Box paddingBottom={2}>
              <Field fullWidth name='country' component={TextField} label={'Страна'} />
            </Box>
            <Box paddingBottom={2}>
              <Field fullWidth name='region' component={TextField} label={'Регион'} />
            </Box>
            <Box paddingBottom={2}>
              <Field fullWidth name='city' component={TextField} label={'Город'} />
            </Box>
            <Box paddingBottom={2}>
              <Field fullWidth name='street' component={TextField} label={'Улица'} />
            </Box>
            <Box paddingBottom={2}>
              <Field fullWidth name='houseNum' component={TextField} label={'Дом'} />
            </Box>
            <Box paddingBottom={2}>
              <Field fullWidth name='flatNum' component={TextField} label={'Квартира'} />
            </Box>
          </FormikStep>
          <div>
            <DropzoneComponent />
          </div>
          <div>
            <FormControl component="fieldset" style={{ display: "flex" }}>
              <FormLabel component="legend">Выберите размер</FormLabel>
              <FormGroup>
                {options.map(opt => (
                  <Field
                    borderRadius='50%'
                    type="checkbox"
                    component={CheckboxWithLabel}
                    name="size"
                    key={opt.value}
                    value={opt.value}
                    Label={{ label: opt.label }}
                  />
                ))}
              </FormGroup>
            </FormControl>
          </div>
          <UniqueQR />
        </FormikStepper>
      </CardContent>
    </Card >
  )
}

export function FormikStep({ children }) {
  return <>{children}</>
}

export function FormikStepper({ children, ...props }) {
  const childrenArray = React.Children.toArray(children)

  const [step, setStep] = useState(0)
  const currentChild = childrenArray[step]

  function isLastStep() {
    return step === childrenArray.length - 1
  }
  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={async (value, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(value, helpers)
        } else {
          setStep(s => s + 1)
        }
      }}
    >
      <Form autoComplete='off'>
        {currentChild}

        {<Grid container justifyContent="center" >
          <Button variant="contained" style={{
            borderRadius: 28,
            backgroundColor: "#ec1fc0",
            width: '260px',
            height: '55px',
            color: '#ffff',
            fontFamily: 'Gilroy Regular',
            fontSize: '16px',
            marginBottom: '30px'
          }} type='submit'> {isLastStep() ? 'Перейти к оплате' : 'Продолжить'} </Button>
        </Grid>}
        <Pagination count={childrenArray} step={step} />
      </Form>
    </Formik >
  )
}