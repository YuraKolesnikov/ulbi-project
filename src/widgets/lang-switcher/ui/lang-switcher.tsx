import { type FC, useMemo, type ReactElement } from 'react'
import { useTranslation } from 'react-i18next'

import { Button, ButtonDesign } from 'shared/ui/button'

interface ILangSwitcherProps {
  className?: string
}

export const LangSwitcher: FC<ILangSwitcherProps> = ({ className }): ReactElement => {
  const { t, i18n } = useTranslation()

  const oppositeLang = useMemo(
    () => (i18n.language === 'en' ? 'ru' : 'en'),
    [i18n.language]
  )

  const toggleLang = (): void => {
    i18n.changeLanguage(oppositeLang)
  }

  return (
    <Button
      className={className}
      design={ButtonDesign.CLEAR}
      onClick={toggleLang}
    >
      {t(`lang.${oppositeLang}`)}
    </Button>
  )
}
