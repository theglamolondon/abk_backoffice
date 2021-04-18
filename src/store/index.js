import ContextRx from "../reducer/context";
import UtilisateurRx from "../reducer/user";

let rootReducers = {
    context: ContextRx.reducer,
    user: UtilisateurRx.reducer
}

export default rootReducers;
