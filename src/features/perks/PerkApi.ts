import api from '../../api/api'
import {useQuery} from "@tanstack/react-query"

export const usePerks = () => {
    return useQuery({queryKey: ['perks'], queryFn: fetchPerks,}
    )
}

  const fetchPerks = async () => {
    const response = await api.get('perks/');
    return response.data;
  };
  

