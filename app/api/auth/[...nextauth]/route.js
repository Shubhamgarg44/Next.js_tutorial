import NextAuth from 'next-auth'
import AppleProvider from 'next-auth/providers/apple'
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'
import GithubProvider from "next-auth/providers/github"

const handler = NextAuth({
  providers: [
    // OAuth authentication providers...
    GithubProvider({
        clientId: process.env.GITHUB_ID,  // by writing in env file we can share it using porcess.env.name this help is deployment and keep site secure
        clientSecret: process.env.GITHUB_SECRET,
      })
  ]
})

export {handler as GET, handler as POST}