const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const SET_TOTAL_USERS = 'SET-TOTAL-USERS';
const TOGGLE_IS_FOLOWWING = 'TOGGLE-IS-FOLOWWING';

let initialState = {
    users: [],
    currentPage: 1,
    totalUsers: 11,
    numberOfUsersOnPage: 6,
    isFetching: true,
    followingInProgress: [],
}

const peopleReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.newPageNumber,
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        case SET_TOTAL_USERS:
            return {
                ...state,
                totalUsers: action.totalUsersNum,
            }
        case TOGGLE_IS_FOLOWWING:
            return {
                ...state,
                followingInProgress: action.inProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)

            }
        default:
            return state;
    }
};

// ActionCreators
export const follow = (userId) => ({
    type: FOLLOW,
    userId
});
export const unfollow = (userId) => ({
    type: UNFOLLOW,
    userId
});
export const setUsers = (users) => ({
    type: SET_USERS,
    users
});
export const setCurrentPage = (newPageNumber) => ({
    type: SET_CURRENT_PAGE,
    newPageNumber
});
export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
});
export const setTotalUsers = (totalUsersNum) => ({
    type: SET_TOTAL_USERS,
    totalUsersNum
})
export const toggleIsFollowing = (inProgress, userId) => ({
    type: TOGGLE_IS_FOLOWWING,
    inProgress, userId,
})

export default peopleReducer;