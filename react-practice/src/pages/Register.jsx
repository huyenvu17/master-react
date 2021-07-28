import React from 'react'
import { useForm } from 'react-hook-form'
export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm({
    defaultValues: {
      email: '',
      name: '',
      nation: 'vietnam',
      hobby: null,
      sex: '',
      password: '',
      confirmPassword: ''
    }
  })
  const handleSubmitForm = data => {
    console.log(data)
  }
  const handleClass = (name, baseClass = 'form-control') => `${baseClass} ${errors[name] ? 'is-invalid' : ''}`
  const ErrorMessage = ({ name }) => {
    if (errors[name]) {
      return <div className="invalid-feedback">{errors[name].message}</div>
    }
    return null
  }
  return (
    <div className="container">
      <form noValidate onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="form-floating mb-3">
          <input
            type="email"
            id="email"
            name="email"
            className={handleClass('email')}
            placeholder="name@gmail.com"
            {...register('email', {
              required: { value: true, message: 'Email is required' },
              validate: {
                email: v =>
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(v) ||
                  'invalid email format'
              }
            })}
          />
          <label htmlFor="email">Email Address</label>
          <ErrorMessage name="email" />
        </div>
        <div className="form-floating mb-3">
          <input
            type="name"
            id="name"
            name="name"
            className={handleClass('name')}
            placeholder="Alan"
            {...register('name', {
              required: { value: true, message: 'Name is required' },
              minLength: {
                value: 2,
                message: 'Name should be from 2-160 characters'
              },
              maxLength: {
                value: 160,
                message: 'Name should be from 2-160 characters'
              }
            })}
          />
          <label htmlFor="name">Name</label>
          <ErrorMessage name="name" />
        </div>
        <div className="mb-3">
          <div className="form-check">
            <input
              type="radio"
              name="nation"
              id="vietnam"
              value="vietnam"
              className={handleClass('nation', 'form-check-input')}
              {...register('nation', {
                required: {
                  value: true,
                  message: 'This field is required'
                }
              })}
            />
            <label htmlFor="vietnam" className="form-check-label">
              Vietnam
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              name="nation"
              id="aboard"
              value="aboard"
              className={handleClass('nation', 'form-check-input')}
              {...register('nation', {
                required: {
                  value: true,
                  message: 'This field is required'
                }
              })}
            />
            <label htmlFor="aboard" className="form-check-label">
              Aboard
            </label>
            <ErrorMessage name="nation" />
          </div>
        </div>
        <div className="mb-3">
          <div className="form-check">
            <input
              type="checkbox"
              className={handleClass('hobby', 'form-check-input')}
              id="gym"
              name="hobby"
              value="gym"
              {...register('hobby', {
                required: {
                  value: true,
                  message: 'This field is required'
                }
              })}
            />
            <label htmlFor="gym" className="form-check-label">
              Gym
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className={handleClass('hobby', 'form-check-input')}
              id="other"
              name="hobby"
              value="other"
              {...register('hobby', {
                required: {
                  value: true,
                  message: 'This field is required'
                }
              })}
            />
            <label htmlFor="other" className="form-check-label">
              Other
            </label>
            <ErrorMessage name="hobby" />
          </div>
        </div>
        <div className="mb-3">
          <select
            name="sex"
            className={handleClass('sex', 'form-select')}
            {...register('sex', {
              required: {
                value: true,
                message: 'This field is required'
              }
            })}
          >
            <option value="">sex</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">Other</option>
          </select>
          <ErrorMessage name="sex" />
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            id="password"
            name="password"
            className={handleClass('password')}
            placeholder="****"
            {...register('password', {
              required: {
                value: true,
                message: 'This field is required'
              },
              minLength: {
                value: 6,
                message: 'password should be from 6-160 characters'
              },
              maxLength: {
                value: 160,
                message: 'password should be from 6-160 characters'
              }
            })}
          />
          <label htmlFor="password">Password</label>
          <ErrorMessage name="password" />
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className={handleClass('confirmPassword')}
            placeholder="****"
            {...register('confirmPassword', {
              required: {
                value: true,
                message: 'This field is required'
              },
              minLength: {
                value: 6,
                message: 'password should be from 6-160 characters'
              },
              maxLength: {
                value: 160,
                message: 'password should be from 6-160 characters'
              },
              validate: {
                samePassword: v => v === getValues('password') || 'password does not match'
              }
            })}
          />
          <label htmlFor="confirmPassword">Confirm password</label>
          <ErrorMessage name="confirmPassword" />
        </div>
        <button className="btn btn-primary" type="submit">
          Register
        </button>
      </form>
    </div>
  )
}
