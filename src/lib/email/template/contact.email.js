export function contactMailTemplate({ name, subject, message}){
    return`
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2>New Contact Form Message</h2>
      <div style="background: #f5f5f5; padding: 20px; border-radius: 8px;">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <div style="background: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
          ${message.replace(/\n/g, '<br>')}
        </div>
      </div>
      <p style="color: #666; font-size: 12px; margin-top: 20px;">
        Sent: ${new Date().toLocaleString()}
      </p>
    </div>`
}
