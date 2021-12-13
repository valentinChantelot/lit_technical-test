import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import client from './apollo'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import Home from './pages/Home'
import Category from './pages/Category'
import Post from './pages/Post'
import NotFound from './pages/NotFound'
import Header from './components/Header'

import './App.scss'

function App() {
    return (
        <ApolloProvider client={client}>
            <DndProvider backend={HTML5Backend}>
                <Router>
                    <>
                        <Header
                            navigation={[
                                { label: 'Home', path: '/' },
                                { label: 'Categories', path: '/categories' },
                            ]}
                        />

                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route exact path="/categories">
                                <Category />
                            </Route>
                            <Route exact path="/post/:id">
                                <Post />
                            </Route>
                            <Route component={NotFound} />
                        </Switch>
                    </>
                </Router>
            </DndProvider>
        </ApolloProvider>
    )
}

export default App
