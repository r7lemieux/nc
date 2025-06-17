import { writable } from 'svelte/store';
import {surveyQuestions} from '../lib/models/survey.model'

export const survey = writable(new Array(surveyQuestions.length).fill(0))
