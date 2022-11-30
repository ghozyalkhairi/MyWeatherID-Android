import {memo, useEffect, useState} from 'react'
import {
  useDataProvinsi,
  useUserLocation,
  useCuacaActions,
  useProvPickerValue,
} from '../../cuacaStore'
import {fetchCuaca} from '../../http'
import DropDownPicker from 'react-native-dropdown-picker'
import Styles from './styles'

const ProvinsiPicker = () => {
  DropDownPicker.setTheme('DARK')
  const listProvinsi = useDataProvinsi()
  const userLocation = useUserLocation()
  const provPickerValue = useProvPickerValue()
  const {setListKota, setDataCuaca, setLoading, setProvPickerValue} =
    useCuacaActions()
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(null)
  const onProvinsiChange = value => {
    console.log(value)
    setProvPickerValue(value)
    setValue(value)
    setLoading(true)
    fetchCuaca(value).then(resp => {
      setDataCuaca(resp.data)
      setListKota()
      setLoading(false)
    })
  }
  useEffect(() => {
    const selectedProv = listProvinsi.find(
      provinsi =>
        provinsi.name.trim().toLowerCase() ===
        userLocation.provinsi.trim().toLowerCase(),
    )?.id
    setValue(selectedProv || provPickerValue)
  }, [])
  return (
    <DropDownPicker
      style={Styles.container}
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
