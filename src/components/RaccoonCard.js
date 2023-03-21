function RaccoonCard({ raccoon, deleteRaccoon }) {

  const handleClick = () => deleteRaccoon(raccoon.id)

    return (
        <div className="border-black">
            <h2>Name: {raccoon.name}</h2>
            <p>Favorite Food: {raccoon.favFood}</p>
            <button onClick={handleClick}>Delete Raccoon</button>
        </div>
    )
}

export default RaccoonCard
