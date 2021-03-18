const getAuthenticated = state => state.auth.isAuthenticated;

const getUsername = state => state.auth.user.email;

const getAuthLoading = state => state.auth.loading;

const selectors = {
    getAuthenticated,
    getUsername,
    getAuthLoading
}

export default selectors;