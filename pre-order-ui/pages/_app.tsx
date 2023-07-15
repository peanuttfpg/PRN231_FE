import { ChakraProvider } from "@chakra-ui/react";
import { AuthContextProvider } from "../contexts/AuthContext";
import { UserContextProvider } from "../contexts/UserContext";
import { Children, useEffect} from "react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "../components/assets/css/font.css";
import theme from "../theme/theme";
import { CartContextProvider } from "@/contexts/CartContext";
import Head from 'next/head';
import { useRouter } from 'next/router';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./admin/home/Home";
import { Login } from "./admin/login/Login";
import { Single } from "./admin/single/Single";
import { New } from "./admin/new/New";
import { List } from "./admin/list/List";

const queryClient = new QueryClient();
function MyApp({ Component, pageProps }: any) {
  const router = useRouter();

  if (router.pathname === '/admin') {
    return(
    <React.StrictMode>
        <div className="App">
        <BrowserRouter>
            <Routes>
            <Route path="/">
                <Route index element={<Home />}></Route>
                <Route path="login" element={<Login />} />
                <Route path="users">
                <Route index element={<List />} />
                <Route path=":userId" element={<Single />} />
                <Route path="new" element={<New />} />
                </Route>
                <Route path="products">
                <Route index element={<List />} />
                <Route path=":productId" element={<Single />} />
                <Route path="new" element={<New />} />
                </Route>
            </Route>
            </Routes>
        </BrowserRouter>
        </div>
    </React.StrictMode>
    );
  }
  else {
    return (
      <AuthContextProvider>
        <UserContextProvider>
            <ChakraProvider theme={theme}>
              <QueryClientProvider client={queryClient}>
                <CartContextProvider>
                  <Component {...pageProps} />
                </CartContextProvider>
              </QueryClientProvider>
            </ChakraProvider>
        </UserContextProvider>
      </AuthContextProvider>
    );
  }
}

export default MyApp;
