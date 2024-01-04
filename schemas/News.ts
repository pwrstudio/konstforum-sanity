import { ConvertImagesInput } from "./Components/convertImages/convertImages"

export default {
    title: "News",
    name: "news",
    type: "document",
    groups: [
        {
            name: 'eng',
            title: 'Engelska',
        },
        {
            name: 'sve',
            title: 'Svenska',
        },
        {
            name: 'img',
            title: 'Konvertera bilder',
        },
    ],
    fields: [
        {
            title: "Titel (SVE)",
            name: "title",
            type: "string",
            validation: Rule => Rule.required(),
            group: "sve"
        },
        {
            title: "Titel (ENG)",
            name: "title_eng",
            type: "string",
            validation: Rule => Rule.required(),
            group: "eng"
        },

        {
            title: "Ingress (SVE)",
            name: "intro_sve",
            type: "contentEditor",
        },
        {
            title: "Ingress (ENG)",
            name: "intor_eng",
            type: "contentEditor",
        },
        {
            title: "Huvudbild",
            name: "mainImage",
            type: "imageDyad",
            group: ["sve", "eng"]
        },
        {
            title: "Innehåll (SVE)",
            name: "content_sve",
            type: "contentEditor",
            group: "sve"
        },
        {
            title: "Innehåll (ENG)",
            name: "content_eng",
            type: "contentEditor",
            group: "eng"
        },
        {
            title: 'Lista',
            name: 'list',
            type: 'array',
            of: [{
                title: "Punkt",
                name: "item",
                type: "object",
                fields: [
                    {
                        title: 'Tid',
                        name: 'time',
                        type: 'string',
                    },
                    {
                        title: 'Text (SVE)',
                        name: 'text_sve',
                        type: 'text',
                    },
                    {
                        title: 'Text (ENG)',
                        name: 'text_eng',
                        type: 'text',
                    },
                ]
            }],
            group: ["sve", "eng"]
        },
        {
            title: "Slug",
            name: "slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 200,
            },
            validation: (Rule) => Rule.required(),
            group: ["sve", "eng"]
        },
        {
            title: "Konvertera bilder",
            name: "fetch",
            type: "string",
            components: {
                input: ConvertImagesInput
            },
            group: ["img"]
        },
    ],
    preview: {
        select: {
            title: 'title',
            media: 'mainImage.bild'
        },
    }
}