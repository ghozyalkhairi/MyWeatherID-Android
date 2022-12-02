import {memo, useEffect} from 'react'
import {Image, SafeAreaView, View} from 'react-native'
import {useCuacaActions} from '../../cuacaStore'
import {fetchProvinsi, fetchCuaca} from '../../http'
import Title from '../../components/Title'
import Button from '../../components/Button'
import Styles from './styles'

const Splash = ({navigation}) => {
  const onNavigate = () => navigation.navigate('Home')
  const {
    setDataProvinsi,
    getProvID,
    setDataCuaca,
    setCuacaSuhuList,
    setCuacaSuhuKota,
    setCurrentForecast,
    setListKota,
    setLoading,
  } = useCuacaActions()
  useEffect(() => {
    setLoading(true)
    fetchProvinsi().then(resp => {
      setDataProvinsi(resp.data)
      fetchCuaca(getProvID()).then(resp => {
        setDataCuaca(resp.data)
        setListKota()
        setCuacaSuhuList()
        setCuacaSuhuKota()
        setCurrentForecast()
        setLoading(false)
        console.log('SUCCESS')
      })
    })
  }, [])
  return (
    <SafeAreaView style={Styles.container}>
      <Image
        style={Styles.image}
        source={require('../../assets/splashLogo.png')}
      />
      <View style={Styles.column}>
        <Title />
        <Title detail text="Cek cuaca di lokasi anda dengan mudah" />
        <Button onPress={onNavigate} text="Mulai" />
      </View>
    </SafeAreaView>
  )
}

export default memo(Splash)
