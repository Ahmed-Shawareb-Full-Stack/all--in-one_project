//? ─── Sec 18 - Use Reducer ────────────────────────────────────────────────────

/*
! useState() VS. useReducer() >>

    *useState() : 
                ^- produce and update state
                ^- rerender when update
                ^- very fine to use when component need a state
    
    *useReducer() : 
                ^- just like useState >> produce, update, and rerender
                ^- used when >> 
                                ^- states are closely related
                                ^- states depends on previous states
                
                ^- implementation >>
                    
                ?   const [state , dispatch] = useReducer(reducer , {...some initial states})
                    ^- dispatch ?? >> dispatch is the Fn that will carry the order of execution to the reducer with the data needed to update the state
                        ? dispatch({
                        ?   type : "...some identifier",
                        ?   payload? : ...some data to the state
                        ? })
                        ^- the object in the dispatch is called the action object that will tell the reducer which piece of state will be updated and if needed it  will carry a value to the state in the reducer 

                    ^- reducer >> a Fn that will carry the state updating logic
                        ? const reducer = (state , action)=>{
                            ^- here is where the magic happens
                        ?   switch (action) {
                        ?   case("...some identifier"){
                        ?       return{
                        ?           ...state,
                        ?           piece of state : ... some updates
                        ?            }
                        ?       return state
                        ?        }
                        ?    }
                        ? }
                    ^- action.type >>
                            ^- set a variable to the name of each action type 
                    
                    ^- Immer library >>
                            ^- a library that allowing to mutate the state object in the reducer
                            ?import produce from "Immer"
                            ? const [state , dispatch] = useReducer(produce(reducer) , {...some initial states })




*/
