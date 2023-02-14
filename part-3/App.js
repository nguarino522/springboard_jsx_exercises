const App = () => {
    return (
        <div>
            <Person
                name="Nicky G"
                age={23}
                hobbies={["running", "gaming", "coffee"]}
            />
            <Person
                name="Josh"
                age={32}
                hobbies={["running", "coding", "yelling"]} />
            <Person
                name="Vinny G"
                age={55}
                hobbies={["keyboard", "music"]}
            />
        </div>
    )
}