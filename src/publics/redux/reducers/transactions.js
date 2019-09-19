const initialState = {
    transactions: [],
    isLoading: false,
    isRejected: false,
    isFulfilled: false
}

const transactions = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_TRANSACTIONS_BY_USER_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case 'GET_TRANSACTIONS_BY_USER_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            }
        case 'GET_TRANSACTIONS_BY_USER_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                transactions: action.payload.data.responses
            }

        case 'POST_TRANSACTION_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case 'POST_TRANSACTION_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            }
        case 'POST_TRANSACTION_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                transactions: action.payload.data.responses
            }

        default:
            return state
    }
}

export default transactions