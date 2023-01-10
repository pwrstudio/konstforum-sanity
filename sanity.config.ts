import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import schemas from './schemas'
import deskStructure from './deskStructure'

export default defineConfig({
    name: 'default',
    title: 'konstforum',

    projectId: '80e68670',
    dataset: 'production',

    plugins: [deskTool({
        structure: deskStructure
    }), visionTool()],

    schema: {
        types: schemas,
    },
})
