import {memo, useState} from 'react'
import {
  useDataProvinsi,
  useCuacaActions,
  useProvPickerValue,
} from '../../cuacaStore'
import {fetchCuaca} from '../../http'
import DropDownPicker from 'react-native-dropdown-picker'
import Styles from './styles'

const ProvinsiPicker = () => {
  DropDownPicker.setTheme('DARK')
  const listProvinsi = useDataProvinsi()
  const provPickerValue = useProvPickerValue()
  const {
    setListKotaCopy,
    setDataCuacaCopy,
    setLoading,
    setProvPickerValue,
    resetCurrentDate,
    setCuacaSuhuList,
    setCuacaSuhuKota,
  } = useCuacaActions()
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(provPickerValue)
  const onProvinsiChange = value => {
    setProvPickerValue(value)
    setLoading(true)
    fetchCuaca(value).then(resp => {
      setDataCuacaCopy(resp.data)
      setListKotaCopy()
      resetCurrentDate()
      setCuacaSuhuList()
      setCuacaSuhuKota()
      setLoading(false)
    })
  }
  return (
    <DropDownPicker
      placeholder="Pilih Provinsi"
      style={Styles.container}
      arrowIconStyle={Styles.arrow}
      placeholderStyle={Styles.placeholder}
      dropDownContainerStyle={Styles.dropdown}
      selectedItemContainerStyle={Styles.selectedItemContainer}
      selectedItemLabelStyle={Styles.selectedItem}
      schema={{label: 'name', value: 'id'}}
      items={listProvinsi}
      open={open}
      value={value}
      setOpen={setOpen}
      setValue={setValue}
      onChangeValue={onProvinsiChange}
    />
  )
}

export default memo(ProvinsiPicker)
