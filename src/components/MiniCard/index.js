import {memo} from 'react'
import {Image, Text, View} from 'react-native'
import Styles from './styles'

const MiniCard = ({waktu, suhu, gambar, style}) => {
  return (
    <View style={[Styles.container, style]}>
      <Text style={Styles.text}>{waktu}</Text>
      <Image style={Styles.logoCuaca} source={{uri: gambar}} />
      <Text style={Styles.text}>{suhu} °C</Text>
    </View>
  )
}

export default memo(MiniCard)
