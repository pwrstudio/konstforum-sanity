import { ConvertImagesInput } from "./Components/convertImages/convertImages"

export default {
    title: "Categories",
    name: "categories",
    type: "document",

    fields: [
        {
            title: "Titel",
            name: "title",
            type: "string",
        },
        {
            title: 'Kategorier',
            name: 'categories',
            type: 'array',
            of: [{
                title: "category",
                name: "category",
                type: "object",
                fields: [
                    {
                        title: "Title (SVE)",
                        name: "label_sve",
                        type: "string",
                        validation: Rule => Rule.required(),
                    },
                    {
                        title: "Title (ENG)",
                        name: "label_eng",
                        type: "string",
                        validation: Rule => Rule.required(),
                    }
                ]
            }]
        },
    ],
}