import React, { useState } from "react";

const DarkMode = () => {
    let [mode, setMode] = useState('dark')
    let [btnMode, setBtnMode] = useState('daasasasasark')



    function darkModeHandler() {
        if (mode === 'dark') {
            setMode('light')
            setBtnMode('lighttttttttttt')
        } else {
            setMode('dark')
            setBtnMode('darkkkkkkkkkkkkk')
        }
        console.log(mode);
    }


    return (
        <div>
            <button onClick={darkModeHandler}>change To {btnMode}</button>

            <p className={mode}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                suscipit sint molestiae mollitia id, aliquam pariatur illo doloribus
                vitae quos excepturi ad veritatis rem non eum eius aut perferendis
                cupiditate.
            </p>
        </div>
    );
};

export default DarkMode;
