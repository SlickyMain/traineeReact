export function getUsername(userID, token) {
    if (userID) {
        const username = fetch(`/api/v1/user/${userID}/`, {
            headers: {
                Authorization: "Bearer " + token
            }
        })
        .then(async response => {
            if (response.ok) {
                const result = await response.json()
                return result[0].username
            }
            else {throw new Error(response.status)}
        })
        .catch(err => {
            console.log(err)
        })
        return username
    }
}