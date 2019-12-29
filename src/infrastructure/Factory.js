import * as axios from 'axios'
import ContentService from '@/services/ContentService'

export const contentService = new ContentService(axios)
