const Person = (props) => {
    const voteText = props.age >= 18 ? "Please go vote!" : "You must be 18 years old.";
    const hobbies = props.hobbies.map(hobby => <li>{hobby}</li>);
    return (
        <div>
            <p>Learn some information about this person:</p>
            <ul>
                <li>Name: {props.name}</li>
                <li>Age: {props.age}</li>
                <ul>
                    Hobbies
                    {hobbies}
                </ul>
            </ul>
            <h3>{voteText}</h3>
        </div>
    )
}