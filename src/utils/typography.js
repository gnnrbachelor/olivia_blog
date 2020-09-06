import Typography from 'typography'
import judahTheme from 'typography-theme-judah'

const typography = new Typography(judahTheme)


// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
