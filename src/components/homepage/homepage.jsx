import React from 'react';
import NavBar from '../NavBar';
import label from './img/label.jpg'
import styles from './homepage.module.css'


const HomPage = () => {
    return (
        <>
            <div>
                <NavBar a="Start" links={"todo"} />
            </div>
            <div className={styles.hp__container}>

                <div className={styles.label}><img src={label} alt="" /> </div>
                <div>
                    <p>The program allows you to work on a list of tasks. Delete, edit and add new tasks.</p>
                </div>
            </div>
            
        </>
    );
};

export default HomPage