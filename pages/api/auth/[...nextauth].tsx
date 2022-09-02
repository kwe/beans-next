import NextAuth from "next-auth";
import CognitoProvider from "next-auth/providers/cognito";


export default NextAuth({

providers: [
    CognitoProvider({
        clientId: process.env.COGNITO-CLIENT-ID,
        clientSecret: process.env.COGNITO-SECRET,
        issuer: process.env.COGNITO-URL,
    })
]
})
