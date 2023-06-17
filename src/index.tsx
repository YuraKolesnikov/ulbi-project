import { render } from 'react-dom'

import css from './index.module.scss'

render(
  <div className={css.yeet}>Hello world</div>,
  document.getElementById('app'),
)
