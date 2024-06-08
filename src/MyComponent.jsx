import React , {useRef} from "react";


function MyComponent() {
    const inputRef = useRef(null);

    const onClick = () => {
        inputRef.current.focus();
        console.log(inputRef.current.value);
    };


    return (
        <div>
            <h1>Abhinav</h1>
            <input type="text" placeholder="Ex..." ref={inputRef}></input>
            <button onClick={onClick}>
                    Change Name
            </button>
        </div>
    );

}

export default MyComponent;