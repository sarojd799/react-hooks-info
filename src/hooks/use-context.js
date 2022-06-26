import React, { useContext } from 'react';

const PlayerContext = React.createContext({ 'player': 'messi' })

function UseContext(props) {

    //Accepts a context object (the value returned from React.createContext) and returns the current context value for that context
    const context = useContext(PlayerContext)

    return (
        <div>
            {context.player}
        </div>
    );
}

export default UseContext;