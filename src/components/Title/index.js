import {memo} from 'react'
import {Text} from 'react-native'
import Styles from './styles'

const Title = ({text, detail, style}) => {
  return (
    <Text style={[detail ? Styles.detail : Styles.title, style]}>{text}</Text>
  )
}

Title.defaultProps = {
  text: 'MyWeatherID',
}

export default memo(Title)
