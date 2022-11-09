export default function Card (randomImage) { 
    function handleClick () {
     
        const CardID = randomImage.id
        randomImage.onDataUpdate(CardID)}
        return (
    <div>
        <button onClick={handleClick}>
            <img src={randomImage.src} id = {randomImage.id}></img>
        </button>
    </div>
    )
}