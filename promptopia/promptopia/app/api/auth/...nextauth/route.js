import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import User from '@models/user'
import { connectToDB } from '@utils/database'


const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,            
        })
    ],
    async session({ session }) {

    },
    async signIn({ profile }) {

    }
})

export { handler as GET, handler as POST }