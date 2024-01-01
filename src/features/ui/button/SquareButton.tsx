
import styles, { ButtonProps } from "./Button.styles"

function SquareButton({ bg }: ButtonProps) {
    return (
        <button css={styles.square({ bg })}>Route</button>

    )
}

export default SquareButton