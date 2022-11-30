import {memo} from 'react'
import {FlatList} from 'react-native'
import {useListKota} from '../../cuacaStore'
import KotaItem from '../KotaItem'
import Styles from './styles'

const KotaList = () => {
  const listKota = useListKota()
  return (
    <FlatList
      data={listKota}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={Styles.container}
      keyExtractor={item => item.$.id}
      renderItem={({item}) => (
        <KotaItem kota={item.$.description} provinsi={item.$.domain} />
      )}
    />
  )
}

export default memo(KotaList)
