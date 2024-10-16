'use server';

import { auth } from "@clerk/nextjs/server";
import { use } from "react";

export const getAurinkoAuthUrl  = async ( serviceType : "Google"| "Office365") => {
    const {userId} = await auth();
    if(!userId) throw new Error("Unauthenticated");

    const params = new URLSearchParams({
        clientId: process.env.AURINKO_CLIENT_ID as string,
        serviceType: serviceType,
        scopes: 'Mail.Read Mail.ReadWrite Mail.Send Mail.Drafts Mail.All',
        responseType: "code",
        returnUrl: `${process.env.NEXT_PUBLIC_DEPLOY_URL}/api/aurinko/callback`,
    })

    return `https://api.aurinko.io/v1/auth/authorize?${params.toString()}`

}