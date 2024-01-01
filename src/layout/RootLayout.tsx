import Header from '../features/header/Header.component'
import Profile from '../features/users/profile/Profile.template'
import * as Styles from './RootLayout.styles'


type Props = {
    children: React.ReactNode
}
function RootLayout({ children }: Props) {
    return (
        <>
            <Header />
            <Styles.RootMain>
                <Styles.Left>
                    <Profile />
                </Styles.Left>
                <Styles.Right>{children}</Styles.Right>
            </Styles.RootMain>
        </>
    )
}

export default RootLayout