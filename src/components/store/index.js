import ConfigStore from './config.store';
import AuthStore from './auth.store'
import UsersStore from './users.store'

const config = new ConfigStore()
const auth = new AuthStore();
const users = new UsersStore();

export default { config, auth, users }