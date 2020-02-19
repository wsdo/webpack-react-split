import React from "react";
import ReactDOM from "react-dom";
import Loadable from 'react-loadable';
// import AboutComponents from './components/About'
const AsyncChunkNames = require("webpack-async-chunk-names-plugin");

import {
  BrowserRouter,
  Switch,
  NavLink as Link,
  Route
} from "react-router-dom";

const asyncFun = () => {
  import("./async.js").then(data => {
    console.log(data);
  });
};

const Loading = () => <h1> 请稍等</h1>

const AboutComponent = () => {
  return import("./components/About.js")
}

const AsyncAboutComonent = Loadable({
  loader: AboutComponent,
  loading: Loading
})
const AsyncBlogComonent = Loadable({
  loader: ()=> import("./components/Blog.js"),
  loading: Loading
})

const HomeComponent = props => {
  return (
    <>
      <button type="button" className="btn btn-success" onClick={asyncFun}>
        获取异步组件
      </button>
      <h1>Home Component!</h1>
    </>
  );
};

// const BlogComponent = props => {
//   return <h1>Blog Component!</h1>;
// };

// const AboutComponent = props => {
//   return <h1>About Component!</h1>;
// };

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="nav">
            <Link exact to="/" activeClassName="active">
              Home
            </Link>
            <Link to="/blog" activeClassName="active">
              Blog
            </Link>
            <Link to="/about" activeClassName="active">
              About
            </Link>
          </div>

          <Switch>
            <Route exact path="/" component={HomeComponent} />
            <Route path="/blog" component={AsyncBlogComonent} />
            <Route path="/about" component={AsyncAboutComonent} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
