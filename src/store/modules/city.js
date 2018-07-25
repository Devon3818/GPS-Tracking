import request from '@/utils/request'

var qs = require('qs');

const city = {
    state: {
        cityName: '',
        cityId: '',  //城市ID
        cityList: []
    },

    mutations: {
        SET_NAME: (state, name) => {
            state.cityName = name
        },
        SET_CITY_LIST: (state, list) => {
            state.cityList = list
        },
        SET_CITY_ID: (state, id) => {
            state.cityId = id
        }
    },

    actions: {
        //设置城当前市名字
        setCityName({ commit }, name) {
            return new Promise((resolve, reject) => {
                commit('SET_NAME', name);
                
                //根据城市名 返回 id
                request.post('/user_api/common_list/second_area_list').then(rs=>{
                    //console.log(rs)
                    if( rs.data.code == 0 ){
                        
                        var onCity = rs.data.data.filter(city=>{
                            if( city.area_name ==  name){
                                return true;
                            }else{
                                return false;
                            }
                        });

                        //console.log(onCity);
                        commit('SET_CITY_ID', onCity[0]['area_id']);
                        
                        //根据城市id 返回镇区或街道列表
                        request.post('/user_api/common_list/third_fourth_area_list',qs.stringify({
                            "second_area_id": onCity[0]['area_id']
                        })).then(rs=>{
                            //onsole.log(rs)
                            if( rs.data.code == 0 ){
                                commit('SET_CITY_LIST', rs.data.data[0]['fourth_area_list']);
                            }
                        })


                    }
                }).catch(error=>{
                    console.log(error)
                })

                resolve()
            })
        },
        
    }

}

export default city