import './index.scss'

const Footer = () => {
  const themeColor = 'green'
  return (
    <footer>
      <p>
        Powered by:{' '}
        <a className={themeColor} href='https://www.freetogame.com/api-doc' target='__blank'>
          FreeToGame
        </a>
      </p>
    </footer>
  )
}

export default Footer
