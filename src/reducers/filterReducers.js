const defaultFilters = {
  sortBy: 'all', // user can sort by all ,active ,completed
};

const filtersReducer = (state = defaultFilters, action) => {
  switch (action.type) {
    case 'SORT_BY_ALL':
      return {
        ...state,
        sortBy: 'all',
      };

    case 'SORT_BY_ACTIVE':
      return {
        ...state,
        sortBy: 'active',
      };

    case 'SORT_BY_COMPLETED':
      return {
        ...state,
        sortBy: 'completed',
      };

    default:
      return state;
  }
};

export default filtersReducer;
