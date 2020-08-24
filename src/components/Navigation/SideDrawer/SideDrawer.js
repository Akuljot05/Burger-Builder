import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../Navigationitems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrp from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary';


const sideDrawer = (props) => {

    let attachedClasses = [classes.SideDrawer, classes.Close];
    if(props.open){
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return(
        <Aux>
            <Backdrp show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>    
                    <Logo />
                </div>
                <nav>
                    <NavigationItems  />
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;