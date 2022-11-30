import {memo} from 'react'
import {SafeAreaView, View} from 'react-native'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import Title from '../../components/Title'
import LogoBMKG from '../../assets/svg/bmkg.svg'
import Styles from './styles'

const About = ({navigation, route}) => {
  const onNavigate = link => navigation.navigate(link)

  return (
    <SafeAreaView style={Styles.container}>
      <Header />
      <View style={Styles.center}>
        <Title
          style={{textAlign: 'center', fontWeight: '300', fontSize: 22}}
          detail
          text="Semua data yang digunakan aplikasi ini disediakan oleh:"
        />
        <LogoBMKG width={150} height={150} />
      </View>
      <Navbar flex routeName={route.name} onPress={onNavigate} />
    </SafeAreaView>
  )
}

export default memo(About)
