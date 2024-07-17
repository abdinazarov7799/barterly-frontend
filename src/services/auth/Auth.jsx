import React, { useEffect } from "react";
import { KEYS } from "../../constants/key";
import { URLS } from "../../constants/url";
import useGetAllQuery from "../../hooks/api/useGetAllQuery";
import { useStore } from "../../store";
import {get} from "lodash";
import useAuth from "../../hooks/auth/useAuth";
import OverlayLoader from "../../components/loader/OverlayLoader.jsx";

const Auth = ({ children, ...rest }) => {
  const {token} = useAuth({})
  const setUser = useStore((state) => get(state, "setUser", () => {}));
  const setAuthenticated = useStore((state) => get(state, "setAuthenticated", () => {}));
  // const { data, isLoading } = useGetAllQuery({
  //   key: KEYS.getMe,
  //   url: URLS.getMe,
  //   hideErrorMsg: true,
  //   enabled:!!token
  // });

  useEffect(() => {
    if (get(data, "data")) {
      setUser(get(data, "data", {}));
      setAuthenticated(true);
    }
  }, [data]);

  if (isLoading) {
    return <OverlayLoader />;
  }
  return <>{children}</>;
};

export default Auth;
