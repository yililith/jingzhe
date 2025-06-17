import req from "@/utils/utils_requests";


export const api_get_user_menu = (uid: string) => {
    return req.get('/api/v1/menu/getUserMenus', {
        params: {
            uid
        }
    });
}