import {memo} from 'react'
import {SafeAreaView, ActivityIndicator, View} from 'react-native'
import {useLoading} from '../../cuacaStore'
import KotaList from '../../components/KotaList'
import Navbar from '../../components/Navbar'
import ProvinsiPicker from '../../components/ProvinsiPicker'
import Styles from './styles'

const Location = ({route, navigation}) => {
  const onNavigate = link => navigation.navigate(link)
  const loading = useLoading()
  return (
    <SafeAreaView style={Styles.container}>
      <ProvinsiPicker />
      {loading ? (
        <View style={Styles.spinnerContainer}>
          <ActivityIndicator size="large" color="#FED059" />
        </View>
      ) : (
        <KotaList />
      )}
      <Navbar routeName={route.name} onPress={onNavigate} />
    </SafeAreaView>
  )
}

export default memo(Location)
