import {memo} from 'react'
import {useCuacaActions, useCurrentDate} from '../../cuacaStore'
import {Text, FlatList, TouchableOpacity} from 'react-native'
import Styles from './styles'

const TanggalList = () => {
  const {getTanggalList, setCurrentDate, setCuacaSuhuList, setCuacaSuhuKota} =
    useCuacaActions()
  const tanggal = getTanggalList()
  const currentDate = useCurrentDate()
  const onDateSelected = date => {
    setCurrentDate(date)
    setCuacaSuhuList()
    setCuacaSuhuKota()
  }
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={tanggal}
      contentContainerStyle={{marginTop: 14, alignSelf: 'center'}}
      style={{marginHorizontal: -24}}
      keyExtractor={item => item.raw}
      renderItem={({item, index}) => (
        <TouchableOpacity hitSlop={10} onPress={() => onDateSelected(item.raw)}>
          <Text
            style={[
              item.raw === currentDate ? Styles.currentTanggal : Styles.tanggal,
              index === 0 ? {marginLeft: 24} : null,
            ]}>
            {item.formatted}
          </Text>
        </TouchableOpacity>
      )}
    />
  )
}

export default memo(TanggalList)
