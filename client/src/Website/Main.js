import React, { useState } from 'react';
import {Route, Switch} from 'react-router-dom'
import Books from './Books'
import NewBook from './NewBook'
import Book from './Book'
export default function Main(props){

    return(
        <div>
            <Switch>
                <Route path="/" exact component={Books} />
                <Route path="/NewBook" exact component={NewBook} />
                <Route path="/Book/:id/:name/:pages/:author" exact component={Book} />
            </Switch>
        </div>
    )
}