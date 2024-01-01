import * as Styles from './ProfileInfo.styles'

type TitleProps = {
    title: string;
}
function Photo() {
    return <Styles.Photo>포토</Styles.Photo>
}

function Title({ title }: TitleProps) {
    return <Styles.Title>{title}</Styles.Title>
}




const ProfileInfo = {
    Photo,
    Title
}
export default ProfileInfo