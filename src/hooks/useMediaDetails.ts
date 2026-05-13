import { useQuery } from "@tanstack/react-query";
import { MediaDetails } from "../types/details";
import { getMediaDetails } from "../services/details/detailsService";
import { MediaType } from "../types/media";

export function useMediaDetails(id: string, type: MediaType) {
    return useQuery<MediaDetails>({
        queryKey: ['details', id],
        queryFn: () => getMediaDetails(id, type),
        staleTime: 1000 * 60 * 10, // 10 minutos
    })
}