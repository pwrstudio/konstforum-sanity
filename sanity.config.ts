import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { googleMapsInput } from "@sanity/google-maps-input";
import schemas from './schemas'
import deskStructure from './deskStructure'

const GMAP_API_KEY = ""

export default defineConfig({
    name: 'default',
    title: 'konstforum',

    projectId: '80e68670',
    dataset: 'production',

    plugins: [deskTool({
        structure: deskStructure
    }), visionTool(), googleMapsInput({
        apiKey: GMAP_API_KEY
    })],

    schema: {
        types: schemas,
    },
})
