import {StyleSheet} from 'react-native'
import colors from '../../colors'

const Styles = StyleSheet.create({
  dropdown: {
    borderWidth: 1,
    borderColor: colors.white,
    backgroundColor: colors.darkBlue,
  },
  selectedItemContainer: {
    backgroundColor: colors.blue,
  },
  selectedItem: {
    color: colors.gold,
  },
  container: {
    backgroundColor: colors.blue,
  },
  placeholder: {
    color: colors.gold,
  },
})

export default Styles
