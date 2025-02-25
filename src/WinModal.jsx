import NewGameButton from "./NewGameButton"

export default function WinModal({ 
    showWinModal, 
    setShowWinModal, 
    setShowGameoverModal, 
    currScore, 
    setClickedCards, 
    gameNum, 
    setGameNum
    }) {

    return (
        <dialog className='winModal' open={showWinModal}>
            You Win! <br />
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
    //     setGameNum(gameNum += 1)
    // };
    
    // return (
    //     <dialog className='winModal' open={showWinModal}>
    //         You Win! <br />
    //         <button className='newGameButton' onClick={handleCloseModal}>New Game</button>
    //     </dialog>
    // )
}