import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Dialog } from "./Dialog";

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Dialog />
		</QueryClientProvider>
	);
}

export default App;
