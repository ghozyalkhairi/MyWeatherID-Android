import {memo} from 'react'
import {useCuacaSuhuKota} from '../../cuacaStore'
import {FlatList} from 'react-native'
import MiniCard from '../MiniCard'

const CuacaList = () => {
  const cuacaList = useCuacaSuhuKota()
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{marginTop: -10, alignSelf: 'center'}}
      style={{marginHorizontal: -24}}
      data={cuacaList}
      keyExtractor={item => item.waktu}
      renderItem={({item, index}) => (
        <MiniCard
          style={index === 0 ? {marginLeft: 24} : null}
          waktu={item.waktu}
          gambar={item.gambar}
          suhu={item.suhu}
        />
      )}
    />
  )
}

export default memo(CuacaList)
