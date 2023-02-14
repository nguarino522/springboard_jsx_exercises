const App = () => {
    return (
        <div>
            <Tweet
                name="Nick G"
                username="nickyg522"
                date={new Date().toDateString()}
                message="Is this thing on?!?!??!"
            />
            <Tweet
                name="Jeff Gaurdino"
                username="jgmiler22"
                date={new Date().toDateString()}
                message="I is hungwy?"
            />
            <Tweet
                name="Vinny G"
                username="daddiomatic722"
                date={new Date().toDateString()}
                message="I like music! :)"
            />
        </div>
    )
};