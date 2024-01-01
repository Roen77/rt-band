
import ProfileInfo from './ProfileInfo.component'
import { Container } from './ProfileInfo.styles'

function Profile() {
    return (
        <Container>
            <ProfileInfo.Photo />
            <ProfileInfo.Title title='타이틀' />
        </Container>
    )
}

export default Profile