
import styles, { ButtonProps } from "./Button.styles"

function RoundedButton({ bg }: ButtonProps) {
    return (
        <button css={styles.rounded({ bg })}>Route</button>

    )
}

export default RoundedButton