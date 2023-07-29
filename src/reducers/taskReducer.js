
const initialState = {
    tasks : []
}

const taskReducer = (state = initialState , action)=>{
    switch (action.type){
        case "ADD_TASK" :{
            return {
                
                ...state , tasks : [...state.tasks , action.payload]

            }  
        }
        case "DEL_TASK" : {
            return {
                ...state , tasks : state.tasks.filter(tasks => tasks.id!== action.payload)
            }
        }
        default : {
            return state;
        }
    }
}

export default taskReducer;

