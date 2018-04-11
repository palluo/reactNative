import { types } from './types'

function login() {
    return dispath => {
        return dispath({
            type: types.login.type
        });
    }
}
module.exports = { login };

