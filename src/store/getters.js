const getters = {
    token: state => state.user.token,
    uinfo: state => state.user.info,
    uid: state => state.user.uid,
    cityList: state => state.city.cityList,
    cityName: state => state.city.cityName,
    cityId: state => state.city.cityId,
}

export default getters