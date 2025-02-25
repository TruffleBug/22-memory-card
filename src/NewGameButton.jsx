export default function NewGameButton({
    // setShowGameoverModal, 
    winModal,
    gameoverModal,
    setShowWinModal, 
    setClickedCards, 
    gameNum, 
    setGameNum
}) {

    function handleCloseModal() {
        winModal.current.close()
        gameoverModal.current.close()
        setClickedCards([]);
        setGameNum(gameNum += 1);
    };

    return (
        <button className='newGameButton' onClick={handleCloseModal}>New Game</button>
    );
};