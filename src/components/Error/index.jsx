import './index.scss'
import { TiWarningOutline } from 'react-icons/ti'

const Error = ({}) => {
  return (
    <div className='error'>
      <TiWarningOutline />
      <h3>Something went wrong...</h3>
    </div>
  )
}

Error.propTypes = {}

export default Error
