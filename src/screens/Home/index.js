import {memo} from 'react'
import {SafeAreaView, ActivityIndicator} from 'react-native'
import {useLoading} from '../../cuacaStore'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import MainCard from '../../components/MainCard'
import TanggalList from '../../components/TanggalList'
import CuacaList from '../../components/CuacaList'
import Styles from './styles'

const Home = ({navigation, route}) => {
  const onNavigate = link => navigation.navigate(link)
  const loading = useLoading()

  return (
    <SafeAreaView style={Styles.container}>
      <Header />
      {loading ? (
        <ActivityIndicator size="large" color="#FED059" />
      ) : (
        <>
          <MainCard />
          <TanggalList />
          <CuacaList />
        </>
      )}
      <Navbar flex routeName={route.name} onPress={onNavigate} />
    </SafeAreaView>
  )
}

export default memo(Home)
