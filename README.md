# youtube-clone
 Website with real API.

     npm install -D tailwindcss postcss autoprefixer
     npx tailwindcss init
     npm i @reduxjs/toolkit react-redux
     npm i react-router-dom

# DEBOUNCING
 typing slow = (difference between key strokes) = 200ms
 typing fast = (difference between key strokes) = 30ms

 Performance
 typing slow = 14 letters = 14*1000= 14000 API calls
 typing fast = 3 API = 3*1000= 3000 API calls

To give a better user experience show API call after 200ms not at the end of typing completed

API call - calling another server - requesting data over te network - HTTP call - uses handshake - HTTPS ssl certificate

Debouncing with 200ms
- if difference between 2 key stroke is <200ms - DECLINE API call
- >200ms make an API call

STEPS
1. Tie up/Bind  the key entered on input box to the search API.
For that first create a state and add it 
  const[searchQuery, setSearchQuery]= useState("");
  <input onChange = {(e)=> setSearchQuery(e.target.value)}>

  const getSuggestionList = async ()=>{
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json[1])
  }

  key - s
  - render the component
  - useEffect()
  - start timer => make api call after 200ms

  key - sa
  - re-render the component
  - useEffect()
  - start new timer => make api call after 200ms

  But we need to clear the previous timeOut
  So, for re-rendering the component it must destroy the previous component i.e. previous setTimeout
  So, you must unmount it i.e. inside return and clear the timeout 

  useEffect(()=>{
    // console.log(searchQuery);    
    //make an API call after every key press
    // but if the difference between 2 key press i.e API CALL is <200ms
    // decline the API call;

    const timer = setTimeout(()=> getSuggestionList(), 200)
    return ()=>{
      clearTimeout(timer);
    }
  },[searchQuery])

  const getSuggestionList = async ()=>{
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json[1])
    setSuggestions(json[1]);
  }

  Now optimizing the API call when we press backspace it must not make an API call

  
Cache:
['','',''] Time complexity = O(n) array.length. LINEAR SEARCH


{i:       Time complexity in Object(map, hashmap) = o(1)
  ip:
  iph:}

  const searchCache = useSelector((store) =>store.search);
  useEffect(()=>{
      const timer = setTimeout(()=> {
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery])
      }
      else{
      getSuggestionList()     
      }
    }, 200)
    return ()=>{
      clearTimeout(timer);
    }
  },[searchQuery])
