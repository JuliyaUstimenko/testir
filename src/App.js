import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import { BrowserRouter, Route } from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Navbar />
        <div className="content">
          <Route path="/content" render ={ () => 
                   <Content state={props.state.contentPage}
                   addPost={props.addPost}/>} />
          <Route path="/dialogs" render ={ () => 
                   <Dialogs state={props.state.dialogsPage}/>} />
         {/*<Route path="/dialogs" render ={ () => <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/>} />*/}
          <Route path="/news" render ={ () => <News />} />
          <Route path="/music" render ={ () => <Music />} />
          <Route path="/settings" render ={ () => <Settings />} />
          <Route path="/friends" render ={ () => <Friends />} />

          {/*<Route path="/content" component={Content} />
          <Route path="/dialogs" component={Dialogs} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />*/}
          
          {/*<News />
          <Content />*/}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
