import {memo} from 'react'
import {Text, TouchableOpacity} from 'react-native'
import Styles from './styles'

const Button = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={Styles.button}>
      <Text style={Styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default memo(Button)
