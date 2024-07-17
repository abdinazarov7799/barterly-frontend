import {useQuery} from 'react-query'
import {request} from "../../services/api";
import {useTranslation} from "react-i18next";

const useGetAllQuery = ({
                            key = "get-all",
                            url = "/",
                            params = {},
                            showSuccessMsg = false,
                            hideErrorMsg = false,
                            enabled = true,
                            options = {
                                onSuccess: () => {
                                    if (showSuccessMsg){
                                    }
                                },
                                onError: (data) => {
                                    if (!hideErrorMsg) {
                                    }
                                },
                            }
                        }) => {

    const {t} = useTranslation();
    const {isLoading, isError, data, error, isFetching, refetch} = useQuery(key, () => request.get(url, params), {
        ...options,
        enabled
    });

    return {
        isLoading,
        isError,
        data,
        error,
        isFetching,
        refetch
    }
};

export default useGetAllQuery;
