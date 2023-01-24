//? ─── Sec (19 - 20) - Redux Toolkit ────────────────────────────────────────────────────

/*
        *Sec - 19
        
        ! redux and useReducer:
                        ^- the are actually similar but in redux >>

            * what is redux ??!!!
                
                        ^- redux actually is as state management tool use a tech that looks like combining useReducer() with context to share the state between different components
                        ^- redux has what is called a store !!!
                        ^- redux store is a way to mange the state by splitting the application state to parts and use a reducer to manage a part then combining all the parts to one store the when calling a dispatch to the store you have the access to all the states in the application.

            * from redux to redux toolkit (RTK) !!!
                
                        ^- redux is a greet way to manage and share the state but it has a really big boilerplate that make things a bit complicated so we have now redux toolkit
                        ^- redux toolkit is a wrapper for redux that make use of redux but make things more simplified and not repeatable.

            * store object : 
                
                        ^- store is the object that will combine all the pieces of states into one big object 

                        ? const store = configureStore({
                        ?   reducer : {
                        ?       something : some reducer,
                        ?       another thing : another reducer,
                        ?        }
                        ?   })
                        
                        ? console.log(store) >> 
                        ?   {
                        ?       something : [...some info],
                        ?       another thing : [...some info],
                        ?   }
                        
            * slice ??
                        
                        ^- slices is the way redux toolkit creates the action types and reducers but in some different ways 
                        ? const slice = createSlice({
                        ?   name : "name",
                        ?   initialState : could be any thing >> [array] , "some text" , {object of properties} , any value >> the initial state is the value  will be passed to the store as an initial state for this piece of state
                        ?   reducers : {
                        ?       doSomething(state , action)  {
                        ?           mutate the state.
                        ?           },
                        ?       doAnotherthing(state , action)  {
                        ?           mutate the state.
                        ?           },
                        ?       }
                        ?   })

                        ^- reducers in slice >> reducers in slice is a combination of mini reducers that redux toolkit will combine all of them  with a function called reducer >> slice.reducer >>
                        
            * actions ??
                        
                        ^- redux toolkit automatically create an actions object that create an action object for every reducer 
                        ? slice.actions = {
                        ?       doSomething(payload){
                        ?               return{
                        ?                   type : "name/doSomething",
                        ?                   payload : payload
                        ?            }
                        ?        }
                        ?    }
                        ^- action type = "name" + "/" + "doSomething"
                        ?   dispatch({
                        ?       type : "name/doSomething",
                        ?       payload : payload
                        ?    }).

            * react-redux : 
                        
                        ^- wrap the react app and add the store to the provider >> <Provider store = {store}><App/></Provider>
                        ^- by this way we can access the state anywhere in th app
                        ^- export actions from store 

            * dispatch an action in a component: 
                        
                        ^- import actions from store
                        ^- use react-redux useDispatch() hook
                        ? const dispatch = useDispatch()
                        ? const eventHandler = (...some data)=>dispatch(action(...some data as the payload))

            * access the state in a component:
                        
                        ^- use react-redux useSelector() hook
                        ^- useSelector() is a hook receive a "selector function"
                        ? const someData = useSelector((state)=>state.someData)

            * costume actions: 
                        
                        ^- create costume actions are different from the default action creators created by redux toolkit
                        ? const costumeAction = createAction("action")

                        ^- costume actions in action:

                        ? const slice = createSlice({
                        ?   name : "name",
                        ?   initialState : some data,
                        ?   reducers : {},
                        ?   extraReducers(builder) {
                        ?       builder.addCase(costumeAction , (state , action) =>{
                        ?           mutate the state.
                        ?            })
                        ?        }
                        ?   })

            * file and folder structure:
                        
                        ? store > {
                        ?       slices : {
                        ?           application slices
                        ?        },
                        ?       actions : {
                        ?           application costume actions
                        ?        },
                        ?       index.js : a file that will contain the store configuration + will be the central communicator between here and outside folders
                        ?    }
        * Sec - 20
                
           * derived state:
                        ^- a state that can be driven or calculated from an existing state
        
                                



*/
