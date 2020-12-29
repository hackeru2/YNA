import axios  from 'axios'

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
let instance = axios.create({
    headers: { 'X-Requested-With': 'XMLHttpRequest' }

})
instance.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
export default instance