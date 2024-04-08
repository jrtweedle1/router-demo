import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root, {
	loader as rootLoader,
	action as rootAction,
} from "./routes/root";
import "./index.css";
import ErrorPage from "./error-page";
import Contact, { loader as contactLoader } from "./routes/contact";

// First route, "root" route
const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		loader: rootLoader,
		action: rootAction,
        loader: contactLoader,
		children: [
			{
				path: "contacts/:contactId",
				element: <Contact />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
