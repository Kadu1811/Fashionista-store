import { useReducer } from 'react'

const useToggle = (initialValue: boolean) => {
  return useReducer((prevState: boolean) => !prevState, initialValue)
}

export { useToggle }
