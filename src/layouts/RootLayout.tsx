import ProtectedRoute from "../components/guards/ProtectedRoute";
import Header from "../components/layouts/Header";

const RootLayout = () => {
  return (
    <ProtectedRoute>
      <Header />
    </ProtectedRoute>
  );
};

export default RootLayout;
