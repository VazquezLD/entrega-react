import '../../styles/About.css'

export const ThemeSection = ({title, paragraph}) => {
    return(
        <div className="themeSection">
            <h2 className="themeTitle">{title}</h2>
            <p className="themeParagraph">{paragraph}</p>
        </div>
    )
}