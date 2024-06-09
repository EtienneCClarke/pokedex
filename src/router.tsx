import { createBrowserRouter, redirect, RouteObject } from "react-router-dom";
import { Pokemon } from "./routes/pokemon";
import { Root } from "./routes/root";

const routesConfig: RouteObject[] = [
	{
		path: "/",
		element: <Root />,
		errorElement: <div>404 Not Found</div>
	},
	{
		path: "pokemon",
		element: <></>,
		loader: async () => {
			return redirect("/");
		}
	},
	{
		path: "pokemon/:pokemonName",
		element: <Pokemon />
	}
];

const browserRouter = createBrowserRouter(routesConfig);

export { browserRouter, routesConfig }