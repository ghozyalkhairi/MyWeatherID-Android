import create from 'zustand'
import {format, parseISO} from 'date-fns'
import {id} from 'date-fns/locale'
import imgPath from '../imgPath'

const useCuacaStore = create((set, get) => ({
  // * STATES
  loading: true,
  userLocation: {},
  dataProvinsi: [],
  dataCuaca: [],
  listKota: [],
  cuacaSuhuList: {},
  cuacaSuhuKota: [],
  currentForecast: {},
  provPickerValue: null,
  currentDate: format(new Date(), 'yyyyMMdd'),
  currentTime: format(new Date(), 'kkmm'),
  // * ACTIONS
  actions: {
    setLoading: loading => set({loading}),
    setUserLocation: userLocation => set({userLocation}),
    setDataProvinsi: dataProvinsi => set({dataProvinsi}),
    setDataCuaca: dataCuaca => set({dataCuaca}),
    setCurrentDate: currentDate => set({currentDate}),
    setListKota: () => {
      const dataCuaca = get().dataCuaca
      const listKota = dataCuaca.filter(kota => {
        if (kota.parameter) return kota
      })
      set({listKota})
    },
    setProvPickerValue: provPickerValue => set({provPickerValue}),
    resetCurrentDate: () => {
      const newDate = format(new Date(), 'yyyyMMdd')
      set({currentDate: newDate})
    },
    getProvID: () => {
      const provinsi = get().userLocation.provinsi.trim().toLowerCase()
      const dataProvinsi = get().dataProvinsi
      return dataProvinsi.find(
        data => data.name.trim().toLowerCase() === provinsi,
      ).id
    },
    setCuacaSuhuList: () => {
      const userKota = get().userLocation.kota.trim().toLowerCase()
      const currentDate = get().currentDate
      const listKota = get().listKota
      const cuacaKota = listKota.find(
        kota => kota.$.description.trim().toLowerCase() === userKota,
      ).parameter[6]
      const suhuKota = listKota.find(
        kota => kota.$.description.trim().toLowerCase() === userKota,
      ).parameter[5]
      const filteredCuaca = cuacaKota.timerange.filter(
        time => time.$.datetime.slice(0, -4) === currentDate,
      )
      const filteredSuhu = suhuKota.timerange.filter(
        time => time.$.datetime.slice(0, -4) === currentDate,
      )
      set({cuacaSuhuList: {cuaca: filteredCuaca, suhu: filteredSuhu}})
    },
    setCuacaSuhuKota: () => {
      const cuacaSuhuList = get().cuacaSuhuList
      const ketWaktu = index => {
        if (index === 0) return 'Pagi'
        if (index === 1) return 'Siang'
        if (index === 2) return 'Malam'
        if (index === 3) return 'Dini'
      }
      const listData = cuacaSuhuList.suhu.map((suhu, index) => {
        return {
          waktu: ketWaktu(index),
          suhu: suhu.value[0]._,
          gambar: imgPath(cuacaSuhuList.cuaca[index].value[0]._, index),
        }
      })
      set({cuacaSuhuKota: listData})
    },
    setCurrentForecast: () => {
      const cuacaSuhuKota = get().cuacaSuhuKota
      const currentTime = get().currentTime
      const timestamp = parseInt(currentTime.slice(0, 2))
      if (timestamp >= 24 || timestamp < 6)
        set({currentForecast: cuacaSuhuKota[3]})
      if (timestamp >= 6 && timestamp < 12)
        set({currentForecast: cuacaSuhuKota[0]})
      if (timestamp >= 12 && timestamp < 18)
        set({currentForecast: cuacaSuhuKota[1]})
      if (timestamp >= 18 && timestamp < 24)
        set({currentForecast: cuacaSuhuKota[2]})
    },
    getTanggalList: () => {
      const detailHari = tgl => format(parseISO(tgl), 'EEEE', {locale: id})
      const detailTanggal = tgl =>
        format(parseISO(tgl), 'dd MMMM', {locale: id})
      const listKota = get().listKota
      const [timerange] = listKota.map(k => k.parameter[6].timerange)
      const newTime = timerange.map(time => {
        return {
          formatted: `${detailHari(
            time.$.datetime.slice(0, -4),
          )}, ${detailTanggal(time.$.datetime.slice(0, -4))}`,
          raw: time.$.datetime.slice(0, -4),
        }
      })
      return [...new Map(newTime.map(time => [time.raw, time])).values()]
    },
    getFormattedTanggal: () => {
      const detailHari = tgl => format(parseISO(tgl), 'EEEE', {locale: id})
      const detailTanggal = tgl =>
        format(parseISO(tgl), 'dd MMMM', {locale: id})
      const currentDate = get().currentDate
      return `${detailHari(currentDate)}, ${detailTanggal(currentDate)}`
    },
  },
}))

export const useLoading = () => useCuacaStore(state => state.loading)
export const useUserLocation = () => useCuacaStore(state => state.userLocation)
export const useProvPickerValue = () =>
  useCuacaStore(state => state.provPickerValue)
export const useDataProvinsi = () => useCuacaStore(state => state.dataProvinsi)
export const useDataCuaca = () => useCuacaStore(state => state.dataCuaca)
export const useListKota = () => useCuacaStore(state => state.listKota)
export const useCurrentForecast = () =>
  useCuacaStore(state => state.currentForecast)
export const UseCuacaSuhuKota = () =>
  useCuacaStore(state => state.cuacaSuhuKota)
export const useCurrentDate = () => useCuacaStore(state => state.currentDate)
export const useCurrentTime = () => useCuacaStore(state => state.currentTime)
export const useCuacaActions = () => useCuacaStore(state => state.actions)
