import '../../styles/Products.css'

export const Tag = ({tags}) => {
    return(
        <>
            {tags.map(tag =>
                <span className="productTag" key={tag}>
                    #{tag}
                </span>
            )}
        </>
    )
}