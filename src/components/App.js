import React, { useReducer, useEffect } from "react";
import '../App.css';
import Header from "./Header";
import Employee from "./Employee";
import spinner from "../assets/ajax-loader.gif";
import Search from "./Search";
import { initialState, reducer } from "../store/reducer";





export default function App() {
  return (
    <div className="App">
      <Header></Header>
      <Search></Search>
      <Employee
        employees={[
          { id: 1, name: 'Bob Hope', email: 'bob@here.com', phone: '212-444-9090', location: 'New York' },
          { id: 2, name: 'John Lennon', email: 'john@here.com', phone: '411-855-2200', location: 'London' },
          { id: 3, name: 'Tina Turner', email: 'tina@here.com', phone: '511-744-5522', location: 'Geneva' },
          { id: 4, name: 'Chris Evans', email: 'chris@here.com', phone: '211-633-7523', location: 'Boston' },
          { id: 5, name: 'Kate McKinnon', email: 'kate@here.com', phone: '212-633-9541', location: 'New York' },
          { id: 6, name: 'Emo Phillips', email: 'emo@here.com', phone: '555-233-4180', location: 'Downsville' },
          { id: 7, name: 'Rodney Dangerfield', email: 'rodney@here.com', phone: '303-555-8741', location: 'Denver' },
          { id: 8, name: 'Beyonce Knowles', email: 'beyonce@here.com', phone: '323-444-8745', location: 'Los Angeles' },
          { id: 9, name: 'Dolly Parton', email: 'dolly@here.com', phone: '410-555-1200', location: 'Nashville' },
          { id: 10, name: 'Jimmy Fallon', email: 'jimmy@here.com', phone: '212-255-1223', location: 'New York' },
          { id: 11, name: 'Willie Nelson', email: 'willie@here.com', phone: '303-522-1874', location: 'Denver' },
          { id: 12, name: 'John Mulaney', email: 'johnm@here.com', phone: '212-444-2356', location: 'New York' },
          { id: 13, name: 'Zelda Zippo', email: 'zelda@here.com', phone: '323-411-0155', location: 'Los Angeles' }
        ]}
      />
    </div>
  );
}
