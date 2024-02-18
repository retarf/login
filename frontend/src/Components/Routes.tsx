import {AuthenticationPage} from "./AuthenticationPage.tsx";
import {HomePage} from "./HomePage.tsx"
import {RootElement} from "./RouteElement.tsx"



const Routes = [
    {
        path: "/",
        element: <RootElement />,
        errorElement: <h1>404 Not Found</h1>,
        children: [
            {
                index: true,
                element: <HomePage/>,
                errorElement: <h1>404 Not Found</h1>
            },
            {
                path: '/auth',
                element: <AuthenticationPage/>,
                errorElement: <h1>404 Not Found</h1>
            }

        ]
    },
]

export default Routes;