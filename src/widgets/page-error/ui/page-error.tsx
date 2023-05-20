import { type ReactElement, type FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Button, ButtonDesign } from 'shared/ui/button'

import css from './page-error.module.scss'

export const PageError: FC = (): ReactElement => {
  const { t } = useTranslation()

  const reload = (): void => {
    window.location.reload()
  }

  return (
		<div className={css.container}>
			<p className={css.error}>{t('error')}</p>
			<Button design={ButtonDesign.CLEAR} onClick={reload}>Reload</Button>
		</div>
  )
}
