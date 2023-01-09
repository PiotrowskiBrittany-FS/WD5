import React from "react";

const Navigation = ()=>{
    return(
        <nav>
            <div style={styles.navWrapper}>
                <h1><a href="#" className="logo">Popcorner</a></h1>
            </div>
        </nav>
    )
}
export default Navigation;

const styles = {
    navWrapper:{
        display: "flex",
    }
}