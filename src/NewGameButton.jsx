export default function NewGameButton({
    setShowGameoverModal, 
    setShowWinModal, 
    setClickedCards, 
    gameNum, 
    setGameNum
}) {
    function handleCloseModal() {
        setShowGameoverModal(false);
        setShowWinModal(false);
        setClickedCards([]);
        setGameNum(gameNum += 1);
    };

    return (
        <button className='newGameButton' onClick={handleCloseModal}>New Game</button>
    )

}