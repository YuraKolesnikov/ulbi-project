import { FC, useCallback, useMemo } from 'react'

import { Button } from 'shared/ui'
import { useTranslation } from 'react-i18next'

export const LangSwitcher: FC = ({}) => {
  const { t, i18n } = useTranslation()

  const currentLang = useMemo(() => i18n.language, [i18n.language])

  const onLangToggle = useCallback(() => {
    i18n.changeLanguage(currentLang === 'ru' ? 'en' : 'ru')
  }, [currentLang])

  return <Button onClick={onLangToggle}>{t('ChangeLang')}</Button>
}
