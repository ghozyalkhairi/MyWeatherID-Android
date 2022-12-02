import {memo} from 'react'
import {Text, TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {useCuacaActions, useUserLocation} from '../../cuacaStore'
import KotaIcon from '../../assets/svg/city.svg'
import Styles from './styles'

const KotaItem = ({kota, provinsi}) => {
  const location = useUserLocation()
  console.log(location)
  const {navigate} = useNavigation()
  const {
    mergeCuacaKota,
    setUserLocation,
    setCuacaSuhuKota,
    setCuacaSuhuList,
    setCurrentForecast,
    resetCurrentDate,
  } = useCuacaActions()
  const onChangeLocation = () => {
    setUserLocation({kota, provinsi})
    mergeCuacaKota()
    resetCurrentDate()
    setCuacaSuhuList()
    setCuacaSuhuKota()
    setCurrentForecast()
    navigate('Home')
  }
  return (
    <TouchableOpacity onPress={onChangeLocation} style={Styles.container}>
      <KotaIcon width={28} height={28} />
      <Text style={Styles.teksKota}>{kota}</Text>
    </TouchableOpacity>
  )
}

export default memo(KotaItem)
