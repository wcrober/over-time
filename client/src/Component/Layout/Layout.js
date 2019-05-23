import React from 'react'
import Aux from '../../hoc/Aux'
import Toolbar from '../Toolbar/Toolbar'


const layout = (props) => (
    <Aux>
   <Toolbar />
    <main>
        {props.children}
    </main>
    
    </Aux>
    
)

export default layout