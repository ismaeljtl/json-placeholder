import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../Layout/Layout";
import UserContainer from "../../containers/UserContainer";
import PostContainer from "../../containers/PostContainer";
import PostsByUserContainer from "../../containers/PostsByUserContainer";
import UserFormContainer from "../../containers/UserFormContainer";
import PostFormContainer from "../../containers/PostFormContainer";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={UserContainer} />
          <Route exact path="/posts" component={PostContainer} />
          <Route exact path="/post/:userId" component={PostsByUserContainer} />
          <Route exact path="/userForm/:id" component={UserFormContainer} />
          <Route exact path="/postForm/:id" component={PostFormContainer} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
