import { getToken, setToken, removeToken,clearAll,getUid,setUid } from '@/utils/auth'
import request from '@/utils/request'

const user = {
    state: {
        token: getToken(),
        uid: getUid(),
        info: {}
    },

    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_UID: (state, uid) => {
            state.uid = uid
        },
        SET_INFO: (state, info) => {
            state.info = info
        }
    },

    actions: {
        //ç™»å½•
        LoginByUsername({ commit }, {token, uid}) {
            return new Promise((resolve, reject) => {
                commit('SET_TOKEN', token);
                commit('SET_UID', uid);
                setToken(token)
                setUid(uid)
                resolve()
            }).catch(error => {
                reject(error)
            })
        },
        GetUserInfo({ commit, state }) {
            return new Promise((resolve, reject) => {
                request.post('/user_api/user_center/user_info')
                .then((response) => {
                    if(response['data']){
                        console.log(response['data']);
                        commit('SET_INFO', response['data']);
                        resolve(response['data'])
                    }
                    
                })
                .catch(error => {
                    reject(error)
                })
            })

            
        },
        QuitUser({ commit }){
            return new Promise((resolve, reject) => {
                commit('SET_TOKEN', null);
                removeToken();
                clearAll()
                resolve();
            })
            
        }
    }

}

export default user