//? ─── Sec 21 - Async Thunk ────────────────────────────────────────────────────

/*
    * sec 21: 
        
        ! fetching data in redux toolkit >>
            
            ^- rule : DO NOT FETCH DATA IN A REDUCER.
            ^- reducers 100% sync just update states in the application

            ^- fetching data states:
                ^ 1 - {isLoading : true , data : [] , error : null} >> Start Request >> request is loading 
                ^ 2 - {isLoading : false , data : [...some data] , error : null} >> get date correctly
                ^ 3 - {isLoading : false , data : [] , error : {message : "failed request"}} >> error happened while fetching
            
            * async thunk: 

                ^- watching for fetching data status >> return data as the payload
                ^- create thunks folder >> thunk file for each createAsyncThunk()

                ? const thunk = createAsyncThunk("some text >> "called type" " , async()=>{
                ?       const response = await axios.opt("URL"),
                ?       return data;
                ?    })

                ^- in slices we can use thunk to do actions to make async operations by extraReducers

                ? const slice = createSlice({
                ?       name : "name",
                ?       initialState : {
                ?           isLoading : false,
                ?           data: [],
                ?           error : null
                ?       },
                ?       extraReducers(builder){
                ?           builder.addCase(thunk.pending , (state , action)=>{
                ?               state.isLoading = true,
                ?           })
                ?           builder.addCase(thunk.pending , (state , action)=>{
                ?               state.isLoading = false,
                ?               state.data = action.payload
                ?           })
                ?           builder.addCase(thunk.pending , (state , action)=>{
                ?               state.isLoading = false,
                ?               state.error = action.error
                ?           })
                ?       }
                ?    })

                ^- fetching data using useEffect() 

                ? const dispatch = useDispatch(),
                ? const {isLoading , data , error} = useSelector((state) => state.slice)
                ? useEffect(()=>{
                ?       dispatch(thunk())    
                ?    } , [dispatch])

                ^- by this code we have done the async fetching operation by async thunk >> now the state has the three actions created by thunk

            * RTKQuery: 
                    
                    ^- the fetching process in this way will be combined in a (api) that is not the (api) related to backend

                    ? const api = createApi({
                    ?       reducerPath : "name" >> this will be the name of the piece of the state that will be combined in the big state object produced by RTK
                    ?       baseQuery : fetchBaseQuery({
                    ?               baseUrl : "http://[the base url of the backend api]"           
                    ?       })
                    ?       endpoints(builder){
                    ?           return{
                    ?               callName >> will be the name of calling this part of the fetched date >> : builder.query({
                    ?                   query: (data if we want to pass data to the url)=>{
                    ?                       return{
                    ?                           cUrl : "rest of info of the baseUrl",
                    ?                           params : {
                    ?                               dataToTheUrl : "if params wanted to be added tot the url"
                    ?                           },
                    ?                           method: "GET" || "POST" || "DELETE" || ...
                    ?                       }
                    ?                   }
                    ?               })
                    ?               callName2 : builder.mutation({
                    ?                   query: (data) =>{
                    ?                       return{
                    ?                           cUrl : "...rest of the baseUrl",
                    ?                           body: {
                    ?                               data : some data
                    ?                           },
                    ?                           method : "a method"
                    ?                       }
                    ?                   }
                    ?               })
                    ?           }
                    ?       }
                    ?    })

                    ^- this code will be transferred to a hook api.useCallNameQuery() will fetch the date from "baseUrl/cUrl[params]" bt the method passed in the return

                    ^- time to get tasks done

                    ^- add the api to the store>>

                    ? const store = configureStore({
                    ?       reducers:{
                    ?           ...reducers,
                    ?           [api.reducerPath] : api.reducer,
                    ?       }
                    ?       middleware : (getDefaultMiddleware)=>{
                    ?           return getDefaultMiddleware().concat(api.middleware)
                    ?       }
                    ?   })
                    ?   setupListeners(store.dispatch)
                    ? export{useCallNameQuery , useCallName2Mutation} = api
                    ? export {api}

                    ^- use the api in the component

                    ? const {data , error , isLoading , isFetching , refetch} = useCallNameQuery(...some data to the url)
                    ? const [callName2 , results] = useCallName2Mutation(),
                    ? callName2(...some date) >> this will lead to execute the api with this endpoint.

                    ^- tags

                    ^- tags ara a mark for the endpoint that is used to do some processes by it 

                    ^- in the endpoint we can do this to mark an endpoint
                    

                    



                


*/
