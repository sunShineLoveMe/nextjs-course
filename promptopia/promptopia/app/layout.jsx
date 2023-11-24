import '@styles/globals.css'
import Nav from '@components/Nav'

export const metadata = {
    title: 'Promptopia',
    description: 'Discover & Share AI Prompts',
}

const RootLayout = ({children}) => {
    return (
        <html lang='en'>
            <body>
                <Nav />
                <div className='main'>
                    <div className='gradient'></div>
                </div>
                <main className='app'>
                    {children}
                </main>
            </body>
        </html>
    )
}

export default RootLayout