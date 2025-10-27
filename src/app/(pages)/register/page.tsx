'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './styles.module.scss'
import { apiServices } from '@/src/lib/api-services'

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    // Валидация паролей
    // if (formData.password !== formData.confirmPassword) {
    //   setError('Пароли не совпадают')
    //   setIsLoading(false)
    //   return
    // }

    // if (formData.password.length < 6) {
    //   setError('Пароль должен содержать минимум 6 символов')
    //   setIsLoading(false)
    //   return
    // }

    try {
      await apiServices.users.createUser(formData)
    } catch (err) {
      setError('Ошибка регистрации. Попробуйте еще раз.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={styles.authContainer}>
      <div className={styles.authCard}>
        <h1 className={styles.title}>Регистрация</h1>
        
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputRow}>
            <div className={styles.inputGroup}>
              <label htmlFor="name" className={styles.label}>
                Имя
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
                placeholder="Введите имя"
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="lastName" className={styles.label}>
                Фамилия
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                className={styles.input}
                placeholder="Введите фамилию"
                required
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
              placeholder="Введите ваш email"
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>
              Пароль
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className={styles.input}
              placeholder="Введите пароль (минимум 6 символов)"
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="confirmPassword" className={styles.label}>
              Подтвердите пароль
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={styles.input}
              placeholder="Повторите пароль"
              required
            />
          </div>

          {error && (
            <div className={styles.error}>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className={styles.submitButton}
          >
            {isLoading ? 'Регистрация...' : 'Зарегистрироваться'}
          </button>
        </form>

        <div className={styles.footer}>
          <p className={styles.footerText}>
            Уже есть аккаунт?{' '}
            <a href="/login" className={styles.link}>
              Войти
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register
