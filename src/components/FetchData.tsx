import {useQuery} from "@tanstack/react-query";
import {fetchUser} from "../api/user.ts";

export const FetchData: React.FC = () => {
    const {data, isLoading, isError} = useQuery({
        queryKey: ['users'],
        queryFn: fetchUser,
    });


    if (isLoading) return <p>Loading...</p>
    if (isError) return <p>Error...</p>
    return (
        <div>
            {
                data?.map((user: any) => (
                    <li key={user.id}>{user.name}</li>
                ))
            }
        </div>
    )
}
export default FetchData
