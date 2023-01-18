// ICONS
import {
    MdImage,
    MdHome,
    MdMail,
    MdEvent,
    MdEdit,
    MdQuestionAnswer,
    MdFileCopy,
    MdTag
} from "react-icons/md"

export default (S) =>
    S.list()
        .title("Konstforum")
        .items([
            S.listItem()
                .title("Om konstforum")
                .icon(MdImage)
                .child(
                    S.list()
                        .title("Om konstforum")
                        .items([
                            S.listItem()
                                .title("Om")
                                .icon(MdHome)
                                .child(
                                    S.editor()
                                        .id("about")
                                        .title("Om")
                                        .schemaType("default-page")
                                        .documentId("about")
                                ),
                            S.listItem()
                                .title("FAQ")
                                .icon(MdQuestionAnswer)
                                .child(
                                    S.editor()
                                        .id("faq")
                                        .title("FAQ")
                                        .schemaType("default-page")
                                        .documentId("faq")
                                ),
                            S.listItem()
                                .title("Kontakt")
                                .icon(MdMail)
                                .child(
                                    S.editor()
                                        .id("kontakt")
                                        .title("contact")
                                        .schemaType("default-page")
                                        .documentId("kontakt")
                                ),
                        ])
                ),
            S.listItem()
                .title("Poster")
                .icon(MdFileCopy)
                .child(
                    S.list()
                        .title("Poster")
                        .items([
                            S.listItem()
                                .title('Alla poster')
                                .icon(MdFileCopy)
                                .child(
                                    S.documentList()
                                        .title('Alla poster')
                                        .showIcons(true)
                                        .filter("_type == $type")
                                        .params({ type: "post" }))
                        ])
                ),
            S.listItem()
                .title("Evenemang")
                .icon(MdEvent)
                .child(
                    S.list()
                        .title("Evenemang")
                        .items([
                            S.listItem()
                                .title("Alla evenemang")
                                .icon(MdEvent)
                                .child(
                                    S.documentList()
                                        .title('Alla evenemang')
                                        .showIcons(true)
                                        .filter("_type == $type")
                                        .params({ type: "event" }))
                        ])
                ),
            S.listItem()
                .title("Kategorier")
                .icon(MdTag)
                .child(
                    S.list()
                        .title("Kategorier")
                        .items([
                            S.listItem()
                                .title("Evenemang")
                                .icon(MdTag)
                                .child(
                                    S.editor()
                                        .id("categories-event")
                                        .title("Evenemang")
                                        .schemaType("categories")
                                        .documentId("categories-event")
                                ),
                            S.listItem()
                                .title("Konstnär")
                                .icon(MdTag)
                                .child(
                                    S.editor()
                                        .id("categories-artist")
                                        .title("Konstnär")
                                        .schemaType("categories")
                                        .documentId("categories-artist")
                                ),
                            S.listItem()
                                .title("Organisation")
                                .icon(MdTag)
                                .child(
                                    S.editor()
                                        .id("categories-organisation")
                                        .title("Organisation")
                                        .schemaType("categories")
                                        .documentId("categories-organisation")
                                ),
                            S.listItem()
                                .title("Verksam")
                                .icon(MdTag)
                                .child(
                                    S.editor()
                                        .id("categories-participant")
                                        .title("Verksam")
                                        .schemaType("categories")
                                        .documentId("categories-participant")
                                ),
                            S.listItem()
                                .title("Projekt")
                                .icon(MdTag)
                                .child(
                                    S.editor()
                                        .id("categoeries-project")
                                        .title("Projekt")
                                        .schemaType("categories")
                                        .documentId("categoeries-project")
                                )
                        ]))
        ])
