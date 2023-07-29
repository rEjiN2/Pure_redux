export const addTask = (text)=>{
    return {
        type: "ADD_TASK",
        payload:{
            id: new Date().getTime(),
            text:text
        }
    }
}

export const deleteTask = (id)=>{
    return {
        type:"DEL_TASK",
        payload:id
    }
}