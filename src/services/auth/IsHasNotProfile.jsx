import useAuth from "../../hooks/auth/useAuth";
import {get, isNil} from "lodash";

const IsHasNotProfile = ({children}) => {
    const {isAuthenticated=false,user=null} = useAuth({});
    return !!(isAuthenticated && isNil(get(user,"user-profile"))) ? children : null
};
export default IsHasNotProfile;