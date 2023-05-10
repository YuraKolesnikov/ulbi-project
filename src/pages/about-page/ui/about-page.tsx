import { type ReactElement } from 'react'
import { useTranslation } from 'react-i18next'

const AboutPage = (): ReactElement => {
  const { t } = useTranslation('about')

  return <div>{t('aboutPage')}</div>
}

export default AboutPage
