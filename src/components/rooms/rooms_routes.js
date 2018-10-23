import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Lobby from './lobby';
import Create from './create_room';
import Chat from './chat';

export default props => {

    const {path} = props.match

    console.log('Path:', path);

    return (
        <Switch>
            <Route exact path={path} component={Lobby} />
            <Route exact path={`${path}/create`} component={Create}/>
            <Route path={`${path}/:room_id`} component={Chat}/>
        </Switch>
    );
}