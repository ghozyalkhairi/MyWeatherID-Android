import {memo} from 'react'
import {FlatList} from 'react-native'
import {
  useListKota,
  useProvPickerValue,
  useListKotaCopy,
} from '../../cuacaStore'
import KotaItem from '../KotaItem'
import Styles from './styles'

const KotaList = () => {
  const listKota = useListKota()
  const listKotaCopy = useListKotaCopy()
  const provPickerValue = useProvPickerValue()
  return (
    <FlatList
      data={provPickerValue ? listKotaCopy : listKota}
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
