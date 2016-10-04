import React from 'react'

import AddWord from './AddWord'
import WordsContainer from '../containers/WordsContainer'

import AddImage from './AddImage'
import ImageContainer from '../containers/ImageContainer'

const App = () => (
  <div className='app-container'>
    <WordsContainer />
    <AddWord />
    <ImageContainer />
    <AddImage />
  </div>
)

export default App
