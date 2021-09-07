const PlayerDisplay = ({ title, value }) => {
    return (
        <>
            <div className="inline-flex space-x-4">
                <p className="font-bold">
                    {title}
                </p>
                <p className="font-light">
                    {value}
                </p>
            </div>
        </>
    )
}

export default PlayerDisplay