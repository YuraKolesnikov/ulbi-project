import { useTranslation } from 'react-i18next'

const HomePage = () => {
  const { t } = useTranslation()
  
  return (
    <div>{t('HomePage.content')}</div>
  )
}

export default HomePage
