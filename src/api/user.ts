
interface User{
    id: number,
    name: string,
    email: string
}

export const fetchUser = async ():Promise<User[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if(!response.ok) throw new Error('error');
    return response.json();
}
