import ReactDOM from 'react-dom/client'
import './main.css'
import {Suspense} from "react";
import OverlayLoader from "./components/loader/OverlayLoader.jsx";
import Query from "./services/query/index.jsx";
import Router from "./router/index.jsx";
import i18n from "./services/i18n";

ReactDOM.createRoot(document.getElementById('root')).render(
    <Suspense fallback={<OverlayLoader />}>
        <Query>
            <Router />
        </Query>
    </Suspense>
)
