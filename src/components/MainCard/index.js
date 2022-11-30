import {memo} from 'react'
import {View, Text, Image} from 'react-native'
import {
  useCurrentForecast,
  useUserLocation,
  useCuacaActions,
} from '../../cuacaStore'
import Styles from './styles'
import LocationIcon from '../../assets/svg/location.svg'

const MainCard = () => {
  const {getFormattedTanggal} = useCuacaActions()
  const userLocation = useUserLocation()
  const currentForecast = useCurrentForecast()
  return (
    <View style={Styles.container}>
      <View style={Styles.row}>
        <Text style={Styles.hari}>{currentForecast.waktu} Ini</Text>
        <Text style={Styles.tanggal}>{getFormattedTanggal()}</Text>
      </View>
      <View style={Styles.row}>
        <Text style={Styles.suhu}>
          {currentForecast.suhu}
          <Text style={Styles.textGold}>ºC</Text>
        </Text>
        <Image
          style={Styles.logoCuaca}
          source={{uri: currentForecast.gambar}}
        />
      </View>
      <View style={Styles.lokasiContainer}>
        <LocationIcon width={18} height={18} />
        <Text style={Styles.lokasi}>
          {userLocation.kota}, {userLocation.provinsi}
        </Text>
      </View>
    </View>
  )
}

export default memo(MainCard)
