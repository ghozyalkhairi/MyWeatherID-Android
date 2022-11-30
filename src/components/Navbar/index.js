import {memo} from 'react'
import {TouchableOpacity, View} from 'react-native'
import HomeIcon from '../../assets/svg/home.svg'
import HomeIconActive from '../../assets/svg/homeActive.svg'
import LocationIcon from '../../assets/svg/location.svg'
import LocationIconActive from '../../assets/svg/locationActive.svg'
import InfoIcon from '../../assets/svg/info.svg'
import InfoIconActive from '../../assets/svg/infoActive.svg'
import Styles from './styles'

const Navbar = ({routeName, onPress, flex}) => {
  return (
    <View style={[Styles.bottom, flex ? {flex: 1} : null]}>
      <View style={Styles.nav}>
        <TouchableOpacity hitSlop={20} onPress={() => onPress('Home')}>
          {routeName === 'Home' ? (
            <HomeIconActive width={28} height={28} />
          ) : (
            <HomeIcon width={28} height={28} />
          )}
        </TouchableOpacity>
        <TouchableOpacity hitSlop={20} onPress={() => onPress('Location')}>
          {routeName === 'Location' ? (
            <LocationIconActive width={28} height={28} />
          ) : (
            <LocationIcon width={28} height={28} />
          )}
        </TouchableOpacity>
        <TouchableOpacity hitSlop={20} onPress={() => onPress('About')}>
          {routeName === 'About' ? (
            <InfoIconActive width={28} height={28} />
          ) : (
            <InfoIcon width={28} height={28} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default memo(Navbar)
