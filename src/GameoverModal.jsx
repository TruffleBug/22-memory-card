import NewGameButton from "./NewGameButton";

export default function GameoverModal({ 
        showGameoverModal, 
        setShowGameoverModal, 
        currScore, 
        setClickedCards, 
        gameNum, 
        setGameNum,
        setShowWinModal
    }) {
        
    return (
        <dialog className='gameoverModal' open={showGameoverModal}>
            Game Over <br />
            Score: {currScore} <br />
            <NewGameButton 
                setShowGameoverModal={setShowGameoverModal}
                setShowWinModal={setShowWinModal}
                setClickedCards={setClickedCards}
                gameNum={gameNum}
                setGameNum={setGameNum}
            />
        </dialog>
    )

    // function handleCloseModal() {
    //     setShowGameoverModal(false);
    //     setClickedCards([]);
    //     setGameNum(gameNum += 1);
    // };
    
    // return (
    //     <dialog className='gameoverModal' open={showGameoverModal}>
    //         Game Over <br />
    //         Score: {currScore} <br />
    //         <button className='newGameButton' onClick={handleCloseModal}>New Game</button>
    //     </dialog>
    // )

}