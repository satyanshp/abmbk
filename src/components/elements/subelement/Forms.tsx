import Box from '@mui/material/Box'
import React, { useState } from 'react'
import { Form, Field, Formik } from 'formik';
import { object, string } from 'yup';
import Button from '@mui/material/Button';

const Forms = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    
    loading: false,
  })
  return (
    <Formik
      initialValues={formData}
      validationSchema={object({
        name: string()
          .required('Required'),
          // .email('Invalid email'),
          email: string()
          .required('Required'),
          // .email('Invalid email'),
          subject: string()
          .required('Required'),
          message: string()
          .required('Required'),
      })}
      onSubmit={(values, formikHelpers) => {
        setFormData({ ...values, loading: true });
        // dispatch(login(values));
        formikHelpers.resetForm();
      }}
    >
      {({ errors, isValid, touched, dirty, handleSubmit }) => (
        <Form onSubmit={handleSubmit} className='form-container' style={{display:'flex',flexDirection:'column'}}>
          <Box display='flex' flexDirection={{md:'row',xs:'column'}} width='95%' gap={2}>
            <Box flexGrow='1'>
              <Box display='flex' flexDirection='column'>
                <label className='label' htmlFor="">Enter Your Name *</label>
                <Box height={8} />
                <Field
                  className='input-field'
                  placeholder='Name'
                  type='text'
                  name='name'
                  size='lg'
                  label='Enter Your Name'
                  required
                  style={{borderColor:touched.name && errors.name?'red':''}}
                />
                {/* {touched.name && errors.name?<span className='error-msg'>*{errors.name}</span>:null} */}
              </Box>
              <Box height={8} />
              <Box display='flex' flexDirection='column'>
                <label className='label' htmlFor="">Enter Your Email *</label>
                <Box height={8} />
                <Field
                  className='input-field'
                  placeholder='Email'
                  type='email'
                  name='email'
                  label='Enter Your Email'
                  required
                  style={{borderColor:touched.email && errors.email?'red':''}}
                />
                {/* {touched.email && errors.email?<span className='error-msg'>*{errors.email}</span>:null} */}
              </Box>
              <Box height={8} />
              <Box display='flex' flexDirection='column'>
                <label className='label' htmlFor="">Enter Your Subject *</label>
                <Box height={8} />
                <Field
                  className='input-field'
                  placeholder='Subject'
                  type='text'
                  name='subject'
                  label='Enter Your Subject'
                  required
                  style={{borderColor:touched.subject && errors.subject?'red':''}}
                />
                {/* {touched.subject && errors.subject?<span className='error-msg'>*{errors.subject}</span>:null} */}
              </Box>
            </Box>
            <Box height={8} />
            <Box flexGrow='1'>
              <Box display='flex' flexDirection='column'>
                <label className='label' htmlFor="">Enter Your Message Here *</label>
                <Box height={8} />
                <Field
                  style={{display:'flex',flexDirection:'column',flexGrow:'1',borderColor:touched.message && errors.message?'red':''}}
                  className='input-field-area'
                  placeholder='Message'
                  type='text'
                  as='textarea'
                  name='message'
                  required
                />
                {/* {touched.message && errors.message?<span className='error-msg'>*{errors.message}</span>:null} */}
              </Box>
            </Box>
          </Box>
          <Box height={20} />
        <div style={{ width: '95%', textAlign: 'center',display:'flex', justifyContent:'flex-start',flexDirection:'row-reverse' }}>
          <Button
          //  onClick={()=>inc()}
            // disabled={!isValid || !dirty }
            type='submit'
            variant='contained'
            sx={{ width:'100%',background: '#0F4C85',border:'1px solid #FFFFFF',color:'#FFFFFF',borderRadius:'0',height:'30px',textTransform:'capitalize',fontWeight:'400' }}
          >
            Submit
          </Button>
          <Box height={7} />
        </div>
        </Form>
      )}
    </Formik>
  )
}

export default Forms