import ReactDOM from "react-dom/client";
import Router from "./routes/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <QueryClientProvider client={client}>
    <Router />
  </QueryClientProvider>
);
