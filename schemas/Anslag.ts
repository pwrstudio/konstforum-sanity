import { MdBookmarkAdd } from "react-icons/md";

export default {
    title: "Anslag",
    name: "anslag",
    icon: MdBookmarkAdd,
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
    ],
    fields: [
        {
            title: "Titel (SVE)",
            name: "title",
            type: "string",
            validation: (Rule: any) => Rule.required(),
            group: "sve"
        },
        {
            title: "Titel (ENG)",
            name: "title_eng",
            type: "string",
            group: "eng"
        },
        {
            title: "Namn/organisation",
            name: "name",
            type: "string",
        },
        {
            title: "E-post (kontaktperson)",
            name: "email",
            type: "string",
        },
        {
            title: "Publiceringsdatum",
            name: "publicationDate",
            type: "date",
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
            title: "Slug",
            name: "slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 200,
            },
            validation: (Rule: any) => Rule.required(),
            group: ["sve", "eng"]
        },
    ]
}