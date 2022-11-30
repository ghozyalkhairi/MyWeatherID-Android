import {StyleSheet} from 'react-native'
import colors from '../../colors'

const Styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginRight: 20,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  logoCuaca: {
    width: 50,
    height: 50,
  },
  text: {
    fontSize: 16,
    marginVertical: 12,
    color: colors.white,
  },
})

export default Styles
