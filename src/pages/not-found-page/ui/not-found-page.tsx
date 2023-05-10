import { type ReactElement } from 'react'
import { useTranslation } from 'react-i18next'

const NotFoundPage = (): ReactElement => {
  const { t } = useTranslation('notFound')

  return <div>{t('notFoundPage')}</div>
}

export default NotFoundPage
