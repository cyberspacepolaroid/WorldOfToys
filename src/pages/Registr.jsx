import { useState } from 'react'
import { onRegistr } from '../http/auth'
import Layout from '../Layout/Layout'
import { useNavigate } from 'react-router-dom';



const Register = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const navigate= useNavigate()
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const { data } = await onRegistr(values)

      setError('')
      setSuccess(data.message)
      setValues({ email: '', password: '' })
      navigate('./home')

    } catch (error) {
      setError(error.response.data.errors[0].msg)
      setSuccess('ok!')
    }
  }

  return (
    <Layout>
      <form onSubmit={(e) => onSubmit(e)} className='container mt-3'>
        <h1>Регистрация</h1>

        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input
            onChange={(e) => onChange(e)}
            type='email'
            className='form-control'
            id='email'
            name='email'
            value={values.email}
            placeholder='test@gmail.com'
            required
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='password' className='form-label'>
            пароль
          </label>
          <input
            onChange={(e) => onChange(e)}
            type='password'
            value={values.password}
            className='form-control'
            id='password'
            name='password'
            placeholder='придумайте пароль'
            required
          />
        </div>

        <div style={{ color: 'red', margin: '10px 0' }}>{error}</div>
        <div style={{ color: 'green', margin: '10px 0' }}>{success}</div>

        <button  type='submit' className='btn btn-primary'>
          Продолжить
        </button>
      </form>
    </Layout>
  )
}

export default Register
