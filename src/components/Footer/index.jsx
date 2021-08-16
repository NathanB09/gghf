import './index.scss'

const Footer = () => {
  const themeName = 'green'
  return (
    <footer>
      <p>
        Powered by:{' '}
        <a className={themeName} href='https://www.freetogame.com/api-doc' target='__blank'>
          FreeToGame
        </a>
      </p>
    </footer>
  )
}

export default Footer
