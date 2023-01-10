// ICONS
import {
    MdImage,
    MdHome,
    MdMail,
    MdEvent,
    MdEdit,
    MdQuestionAnswer,
    MdFileCopy
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
        ])
