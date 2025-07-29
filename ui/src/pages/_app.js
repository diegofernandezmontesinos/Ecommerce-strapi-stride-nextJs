import { AuthContext, AuthProvider } from "@/contexts/AuthContext";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "@/scss/_global.scss";

export default function App(props) {
  const { Component, pageProps } = props;
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
