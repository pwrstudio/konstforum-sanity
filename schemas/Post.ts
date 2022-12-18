import { ConvertImagesInput } from "./Components/convertImages/convertImages"

export default {
    title: "Post",
    name: "post",
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
            title: 'Synlighet',
            name: 'visibility',
            type: 'string',
            options: {
                list: [
                    { title: 'Offentlig', value: 'public' },
                    { title: 'Dold', value: 'private' },
                ],
                layout: 'radio'
            },
            initialValue: 'public',
            validation: Rule => Rule.required(),
            group: ["sve", "eng"]
        },
        {
            title: 'Typ',
            name: 'type',
            type: 'string',
            options: {
                list: [
                    { title: 'Konstnär', value: 'artist' },
                    { title: 'Organisation', value: 'organization' },
                    { title: 'Verksam', value: 'participant' },
                    { title: 'Projekt', value: 'project' }
                ],
                layout: 'radio'
            },
            initialValue: 'artist',
            validation: Rule => Rule.required(),
            group: ["sve", "eng"]
        },
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
            title: 'Taggar (SVE)',
            name: "tags_sve",
            type: "array",
            of: [{ type: "string" }],
            options: {
                layout: "tags"
            },
            group: ["sve"]
        },
        {
            title: 'Taggar (ENG)',
            name: "tags_eng",
            type: "array",
            of: [{ type: "string" }],
            options: {
                layout: "tags"
            },
            group: ["eng"]
        },
        {
            title: "Huvudbild",
            name: "mainImage",
            type: "imageDyad",
            group: ["sve", "eng"]
        },
        {
            title: 'Bildspel',
            name: 'bildspel',
            type: 'array',
            of: [{
                title: "bild",
                name: "bild",
                type: "imageDyad",
            }],
            hidden: ({ document }) => document?.layout == "alt3",
            group: ["sve", "eng"]
        },
        {
            title: "Kort text (SVE)",
            name: "shortText_sve",
            type: "limitedEditor",
            group: "sve"
        },
        {
            title: "Kort text (ENG)",
            name: "shortText_eng",
            type: "limitedEditor",
            group: "eng"
        },
        {
            title: "Innehåll (SVE)",
            name: "content_sve",
            type: "limitedEditor",
            group: "sve"
        },
        {
            title: "Innehåll (ENG)",
            name: "content_eng",
            type: "limitedEditor",
            group: "eng"
        },
        {
            title: "Plats (SVE)",
            name: "locationText_sve",
            type: "text",
            group: "sve"
        },
        {
            title: "Plats (ENG)",
            name: "locationText_eng",
            type: "text",
            group: "sve"
        },
        {
            title: "Koordinat",
            name: "coordinate_sve",
            type: "geopoint",
            group: ["sve", "eng"]
        },
        {
            title: "Epost",
            name: "emailAddress",
            type: "string",
            group: ["sve", "eng"],
            validation: Rule => Rule.email()
        },
        {
            title: "Hemsida",
            name: "website",
            type: "url",
            group: ["sve", "eng"],
        },
        {
            title: 'Social media',
            name: 'socialMediaLinks',
            type: 'array',
            of: [{
                title: "Länk",
                name: "link",
                type: "object",
                fields: [
                    {
                        title: 'Titel',
                        name: 'title',
                        type: 'string',
                        validation: (Rule) => Rule.required(),
                    },
                    {
                        title: 'Adress',
                        name: 'url',
                        type: 'url',
                        validation: (Rule) => Rule.required(),
                    }
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