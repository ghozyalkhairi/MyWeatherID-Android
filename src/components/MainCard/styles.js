import {StyleSheet} from 'react-native'
import colors from '../../colors'

const Styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    padding: 20,
    borderRadius: 30,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  logoCuaca: {
    width: 120,
    height: 120,
  },
  lokasiContainer: {
    flexDirection: 'row',
    marginTop: 20,
    alignSelf: 'center',
  },
  lokasi: {
    textAlign: 'center',
    color: colors.white,
    marginLeft: 10,
  },
  hari: {
    fontSize: 18,
    color: colors.white,
  },
  tanggal: {
    fontSize: 14,
    color: colors.white,
  },
  suhu: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.white,
  },
  textGold: {
    color: colors.gold,
  },
})

export default Styles
