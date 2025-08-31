import { NextResponse} from "next/server";
// import { sendEmail } from "@/lib/email/sendEmail";
// import { ApiError } from "@/lib/utils/ApiError";
// import { asyncHandler } from "@/lib/utils/errorHandler";
// import { ApiResponse } from "@/lib/utils/ApiResponse";
import { sendEmail } from "@/lib/email/emailConfig";

export async function POST(request,response){
    const { firstName, lastName, email, subject, message } = await request.json();
    if(! lastName || lastName.trim().length<2 ||!firstName || firstName.length<2){
        return NextResponse.json({
            success: false,
            message:"Message must be "
        })
    }
    if(!email || !email.includes("@")){
        throw new ApiError(400,"Please provide a valid email");
    }
    if(!message || message.length<10){
        throw new ApiError(400,"Message must be at least 10 characters");
    }

  await sendEmail({ firstName, email, subject, message});
    return new (200,"Mail sent");
}