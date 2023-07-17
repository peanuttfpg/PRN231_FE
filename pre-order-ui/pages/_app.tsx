import { Box, ChakraProvider } from "@chakra-ui/react";
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
import Link from "next/link";
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
      <Box className="App">
        <Link href="/admin">
            Home
        </Link>
        <Link href="/admin/login">
            Login
        </Link>
        <Link href="/admin/users">
            Users
        </Link>
        <Link href="/admin/products">
            Products
        </Link>
      </Box>
      <Box>
        <Component {...pageProps} />
      </Box>
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
