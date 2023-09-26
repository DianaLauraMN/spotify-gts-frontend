import { useContext } from 'react'
import { GameContext } from '../context/gameContext/GameContext'

const useGameConfig = () => useContext(GameContext);
export default useGameConfig