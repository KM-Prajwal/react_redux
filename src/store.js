import { configureStore } from '@reduxjs/toolkit'
import { combineReducers, compose} from 'redux'
import rootreducer from './rootreducer'

const store = configureStore({reducer: rootreducer})

export default store ;