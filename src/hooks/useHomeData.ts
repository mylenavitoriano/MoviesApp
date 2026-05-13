import { useQuery } from "@tanstack/react-query";
import { HomeScreenData } from "../types/media";
import { getHomeScreenData } from "../services/home/homeService";

export function useHomeData() {
    return useQuery<HomeScreenData>({
        queryKey: ['home'],
        queryFn: getHomeScreenData,
        staleTime: 1000 * 60 * 5, // 5 minutos
    })
}