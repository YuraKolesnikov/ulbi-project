import { FC, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { Button, ButtonType } from 'shared/ui/Button'

interface ILangSwitcherProps {
  className?: string
}

export const LangSwitcher: FC<ILangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation()

  const oppositeLang = useMemo(
    () => (i18n.language === 'en' ? 'ru' : 'en'),
    [i18n.language]
  )

  const toggleLang = () => i18n.changeLanguage(oppositeLang)

  return (
    <Button
      className={className}
      buttonType={ButtonType.CLEAR}
      onClick={toggleLang}
    >
      {t(`lang.${oppositeLang}`)}
    </Button>
  )
}
