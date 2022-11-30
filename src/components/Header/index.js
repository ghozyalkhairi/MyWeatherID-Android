import {memo} from 'react'
import {Text, View} from 'react-native'
import Styles from './styles'

const Header = () => {
  return (
    <View style={Styles.top}>
      <Text style={Styles.text}>MyWeatherID</Text>
    </View>
  )
}

export default memo(Header)
