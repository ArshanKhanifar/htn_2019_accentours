import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Home} from "./home/home";
import 'antd/dist/antd.css'
import './custom_styles.scss'
import { Layout, Menu } from "antd"
import {SearchPage} from "./search/search_page";
const { Header, Content } = Layout;

const ACCENTOURS_LOGO_PATH = "accentours_logo.svg";

function BasicExample() {
    return (
        <Router>
            <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">
                            <Link to="/" style={{float: 'right'}}>
                                <img src={ACCENTOURS_LOGO_PATH}/>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/search/helloooo">Search</Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to="/topics">Topics</Link>
                        </Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 0', marginTop: 64}}>
                    <Route exact path="/" component={Home} />
                    <Route path="/search/:universities/:start_date/:end_date/" component={SearchPage} />
                    <Route path="/topics" component={Topics} />
                </Content>
            </Layout>
        </Router>
    );
}


function Topics({ match }) {
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={`${match.url}/rendering`}>Rendering with React</Link>
                </li>
                <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
                </li>
            </ul>
            <Route path={`${match.path}/:topicId`} component={Topic} />
            <Route
                exact
                path={match.path}
                render={() => <h3>Please select a topic.</h3>}
            />
        </div>
    );
}

function Topic({ match }) {
    return (
        <div>
            <h3>{match.params.topicId}</h3>
        </div>
    );
}


ReactDOM.render(
    <BasicExample />,
    document.getElementById("root")
)
