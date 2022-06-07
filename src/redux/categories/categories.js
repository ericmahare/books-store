const CHECK_STATUS = 'CHECKSTATUS'

export const checkStatus = () => ({
  type: CHECK_STATUS,
});

const categoryReducer = (state = [], action) => {
  switch(action.type){
    case CHECK_STATUS:
      return 'under construction'
    default: return state
  }
}

export default categoryReducer