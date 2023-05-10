import { type ReactElement } from 'react'
import { useTranslation } from 'react-i18next'

const HomePage = (): ReactElement => {
  const { t } = useTranslation('home')

  return <div>{t('homePage')}</div>
}

export default HomePage
