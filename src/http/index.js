import axios from 'axios'

export const fetchLocation = async (longitude, latitude) => {
  const accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN'
  const options = {
    method: 'GET',
    url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${accessToken}`,
  }

  return await axios.request(options)
}

export const fetchProvinsi = async () => {
  const url = 'https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json'
  const options = {
    method: 'GET',
    url,
  }

  return await axios.request(options)
}

export const fetchCuaca = async provID => {
  const url = 'https://secure-sands-34800.herokuapp.com'
  const options = {
    method: 'GET',
    url: `${url}${getProvURL(parseInt(provID))}`,
  }

  return await axios.request(options)
}

const getProvURL = id => {
  switch (id) {
    case 11:
      return '/aceh'
    case 12:
      return '/sumatera-utara'
    case 13:
      return '/sumatera-barat'
    case 14:
      return '/riau'
    case 15:
      return '/jambi'
    case 16:
      return '/sumatera-selatan'
    case 17:
      return '/bengkulu'
    case 18:
      return '/lampung'
    case 19:
      return '/bangka-belitung'
    case 21:
      return '/kepulauan-riau'
    case 31:
      return '/jakarta'
    case 32:
      return '/jawa-barat'
    case 33:
      return '/jawa-tengah'
    case 34:
      return '/yogyakarta'
    case 35:
      return '/jawa-timur'
    case 36:
      return '/banten'
    case 51:
      return '/bali'
    case 52:
      return '/nusa-tenggara-barat'
    case 53:
      return '/nusa-tenggara-timur'
    case 61:
      return '/kalimantan-barat'
    case 62:
      return '/kalimantan-tengah'
    case 63:
      return '/kalimantan-selatan'
    case 64:
      return '/kalimantan-timur'
    case 65:
      return '/kalimantan-utara'
    case 71:
      return '/sulawesi-utara'
    case 72:
      return '/sulawesi-tengah'
    case 73:
      return '/sulawesi-selatan'
    case 74:
      return '/sulawesi-tenggara'
    case 75:
      return '/gorontalo'
    case 76:
      return '/sulawesi-barat'
    case 81:
      return '/maluku'
    case 82:
      return '/maluku-utara'
    case 91:
      return '/papua-barat'
    case 94:
      return '/papua'
  }
}
